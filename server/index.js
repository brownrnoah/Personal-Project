require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const massive = require("massive");
const Auth0Strategy = require("passport-auth0");
const stripe = require("stripe")("sk_test_zrTNBBTjFf0UPRrStKb8QqIT");
const cors = require('cors')

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

app.use(bodyParser.json());
app.use(cors());


massive(CONNECTION_STRING).then(db => {
    app.set("db",db);
    app.listen(SERVER_PORT, ()=>console.log(`Listening on port: ${SERVER_PORT}`));
});

app.use(express.static(__dirname + "./../build"));

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
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken,refreshToken,extraParams,profile,done){
   const db = app.get("db")
   db.find_user([profile.id]).then(users=>{
       if(!users[0]){
           db.create_user([profile.id,profile.name.givenName,profile.name.familyName]).then(users=>{
                return done(null,users[0].userid);
           })
       }
       else{
           return done(null,users[0].userid)
       }
   })
}));

passport.serializeUser((id,done)=>{
    return done(null,id);
});

//All user information is stored on req.user
passport.deserializeUser((id,done)=>{
    app.get("db").find_session_user([id]).then(user=>{
        return done(null,user[0])
    })
});

app.get("/auth", passport.authenticate("auth0"));
app.get("/auth/callback", passport.authenticate("auth0",{
    successRedirect: process.env.PRIVATE_PAGE,
    failureRedirect: process.env.HOMEPAGE
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
    res.redirect(process.env.REACT_APP_LOGOUT)
})

app.get("/api/displayProduct", (req,res)=>{
    const db = app.get("db")
    db.display_product().then(products=>{
        res.status(200).send(products)
    })
})

app.put("/api/updateUser", (req,res)=>{
    console.log(req.body)
    const db = app.get("db")
    db.update_user([req.user.userid,req.body.firstname,req.body.lastname,req.body.address,req.body.city,req.body.phone,req.body.email]).then(user=>{
        res.status(200).send(user)
    })
})

app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
          break;
      } else {
          pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));
  
    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function(err, charge) {
      if (err){
        return res.sendStatus(500);
      }
      else{
        return res.sendStatus(200);
      }
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
  });

