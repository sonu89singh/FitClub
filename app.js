const express = require("express");
const mysql = require("mysql2");
const app = express()
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello from node js server");
});

app.get("/about", (req, res) => {
   res.send("this is for about ");
});

app.post("/register", (req, res) => {
    console.log(req.body.name);
res.send(req.body.name + "has registered with" + req.body.email);
    connection.query("INSERT INTO users (name, email) VALUES (?,?)", [req.body.name, req.body.email], (err , result) => {
        if (err) {
            console.log("not saved", err);
            return;
        }
        console.log("saved sucssesfully");
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