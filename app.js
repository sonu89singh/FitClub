const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const app = express()
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello from node js server");
});

app.get("/about", (req, res) => {
   res.send("this is for about ");
});

app.post("/register", (req, res) => {
    
   const hashedpassward = bcrypt.hashSync(req.body.password, 10);


    connection.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", [req.body.name, req.body.email, hashedpassward], (err , result) => {
        if (err) {
            console.log("not saved", err);
            return;
        }
        res.send(req.body.name + "has registered with" + req.body.email);
    });
});

app.post("/login", (req,res) => {
    connection.query("SELECT * FROM users WHERE email = ?", [req.body.email], (err, result) => {
        if (result.length == 0) {
            console.log("user not found");
            return;
        }

        const itMach = bcrypt.compareSync(req.body.password, result[0].password)

    if (itMach == true) {
        res.send("login sucsessfully");
        return;
    } else {
        res.send("wrong password");
    }
    });
    
    
}); 

app.listen(3000, () => {
    console.log("server ruiig o port 3000");
});

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "!Q@W1q2w",
    database : "fitflow"
});
 
connection.connect((err) => {
   if(err) {
    console.log("db is not connected ");
    return;
   } 
    console.log("db is running...");
});