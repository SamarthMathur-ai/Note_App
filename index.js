const express = require("express")
const app = express()
const fs = require("fs");
let users = require("./storage.json");
const path = require("path");

let port = 8080;


app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.get("/", (req,res)=> {
    res.render("index", {allnotes: users});
})

app.get("/getNote/:id", (req,res)=> {
    const id = req.params.id;

    const foundNote = users.find(n => n.id==id);

    if(foundNote) {
        res.json(foundNote);
    } else {
        res.status(404).send("not found");
    }
    
})

app.post("/save", (req,res)=> {
    const {title, content, id} = req.body;
    let currId = id;
    if(currId) {
        const index = users.findIndex(u=>u.id == currId);
        users[index] = {...users[index],title, content}; // should be the same to overwrite the name.
    }
    else {
        currId = Date.now();
        users.push({id: currId, content ,title});
    }
    
    fs.writeFile('./storage.json', JSON.stringify(users), (err,data)=> {
        console.log("Is it showing");
        return res.json({status: "200", id: currId});
    })
})


app.delete("/delete/:id",(req,res)=> {
    const id = req.params.id;
    users = users.filter(n=> n.id != id);

    fs.writeFile('./storage.json', JSON.stringify(users), (err,data)=> {
        console.log("The data is deleted and the new data is saved unto the file.");
        return res.json({status: "200", id: id});
    })
})

app.listen(port, ()=> {
    console.log(`app is listening on ${port}`);

})


