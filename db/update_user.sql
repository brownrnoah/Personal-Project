update users
set firstname = $2, lastname = $3, address = $4, city = $5, phone = $6, email = $7
where userid = $1