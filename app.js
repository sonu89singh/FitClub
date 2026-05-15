const express = require("express");
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
});

app.listen(3000, () => {
    console.log("server ruiig o port 3000");
});