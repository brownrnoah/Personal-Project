require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const massive = require("massive");
const Auth0Strategy = require("passport-auth0");

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING
} = process.env

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set("db",db);
    app.listen(SERVER_PORT, ()=>console.log(`Listening on port: ${SERVER_PORT}`));
});

// app.use(express.static(__dirname + "./../build"));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    Cookie: {maxAge: 10000}
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL
}, function(accessToken,refreshToken,extraParams,profile,done){
   const db = app.get("db")
   db.find_user([profile.id]).then(users=>{
       if(!users[0]){
           db.create_user([profile.id]).then(res=>{
                done(null,res[0].id);
           })
       }
       else{
           done(null,users[0].id)
       }
   })
}));

passport.serializeUser((id,done)=>{
    done(null,id);
});

//All user information is stored on req.user
passport.deserializeUser((id,done)=>{
    console.log(id)
    app.get("db").find_session_user([id]).then(user=>{
        console.log(user)
        done(null,user[0])
    })
});

app.get("/auth", passport.authenticate("auth0"));
app.get("/auth/callback", passport.authenticate("auth0",{
    successRedirect: "http://localhost:3000/#/userprofile",
    failureRedirect: "http://localhost:3000"
}));
app.get("/auth/me", (req,res)=>{
    if(req.user){
        res.status(200).send(req.user);
    }
    else{
        res.status(401).send("Nice try BuddyBoi!")
    }
})
app.get("/auth/logout", (req,res)=>{
    req.logOut();
    req.session.destroy();
    res.redirect("http://localhost:3000/")
    console.log(req.user)
})


app.get("/api/displayProduct", (req,res)=>{
    const db = app.get("db")
    db.display_product().then(products=>{
        res.status(200).send(products)
    })
})

