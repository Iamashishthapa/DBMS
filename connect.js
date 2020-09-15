const mysql = require("mysql");
const express = require("express");
var cors = require('cors');
const app = express();
app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// create connection

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "984698",
    database: "mydb1"
})

// connect

db.connect((err)=>{
    if(err){
        throw err
    }
    console.log("My sql connected")
})

//select post 1
app.get("/",(req,res)=>{
    let sql = 'SELECT * FROM items'
    let query = db.query(sql, (err, result)=>{
        if(err) throw err
        res.send(result)
    })
})


//insert post 
app.post("/addpost",(req,res)=>{
    let post ={id:parseInt(req.body.id),item_name:req.body.name,item_description:req.body.description,price:req.body.price,tag:req.body.tag,image:parseInt(req.body.id),stock:parseInt(req.body.stock)};
    console.log(post);
    let sql = 'INSERT INTO items SET ?'
    let query = db.query(sql, post, (err, result)=>{
        if(err) throw err
        console.log('yes');
        res.send("item added");
    })
})

//delete post 
app.post("/deletepost",(req,res)=>{
    let id =parseInt(req.body.id); 
    let sql = 'DELETE FROM items where id = ?'
    let query = db.query(sql, id, (err, result)=>{
        if(err) throw err
        console.log('yes');
        res.send("post deleted");
    })
})

//find post
app.post("/findpost",(req,res)=>{
    let id = parseInt(req.body.id); 
    let sql = 'SELECT * FROM items where id = ?'
    let query = db.query(sql,id,(err, result)=>{
        if(err) throw err
        res.send(result)
    })
})
//update post 
// app.post("/updatepost",(req,res)=>{
//     let post ={id:parseInt(req.body.name),item_name:req.body.name,item_description:req.body.description,price:req.body.price,tag:req.body.tag,image:parseInt(req.body.id),stock:parseInt(req.body.stock)};
//     console.log(post);
//     let sql = 'INSERT INTO items SET ?'
//     let query = db.query(sql, post, (err, result)=>{
//         if(err) throw err
//         console.log('yes');
//         res.send("item added");
//     })
// })

//update post
app.post("/updatepost",(req,res)=>{
    let post ={id:parseInt(req.body.id),item_name:req.body.name,item_description:req.body.description,price:req.body.price,tag:req.body.tag,image:parseInt(req.body.id),stock:parseInt(req.body.stock)};
    console.log(post);
    let sql = 'INSERT INTO items SET ?'
    let query = db.query(sql, post, (err, result)=>{
        if(err) throw err
        console.log('yes');
        res.send("item updated");
    })
})

app.get("/addonepost",(req,res)=>{
    let post ={id:1,item_name:"Samsung",item_description:"Samsung Phone",price:900,tag:"Phone",image:1,stock:6};
    console.log(post);
    let sql = 'INSERT INTO items SET ?'
    let query = db.query(sql, post, (err, result)=>{
        if(err) throw err
        console.log('yes');
        res.send("1 item added");
    })
})

app.listen("3001",()=>{
    console.log("server up")
})