const express = require("express")
const app = express()
const fs = require("fs");
const users = require("./storage.json");
const path = require("path");

let port = 8080;


app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.get("/", (req,res)=> {
    res.render("index", {allnotes: users});
})

app.post("/save", (req,res)=> {
    const body = req.body;
    users.push({...body, id: users.length+1});
    fs.writeFile('./storage.json', JSON.stringify(users), (err,data)=> {
        console.log("Is it showing");
        return res.json({status: "200", id: users.length});
    })
})

app.listen(port, ()=> {
    console.log(`app is listening on ${port}`);

})


