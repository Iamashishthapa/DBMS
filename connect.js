const mysql = require("mysql");
const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create connection

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "984698",
  database: "mydb1",
});

// connect

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("My sql connected");
});

//select post 1
app.get("/", (req, res) => {
  let sql = "SELECT * FROM items";
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//insert post
app.post("/addpost", (req, res) => {
  let post = {
    id: parseInt(req.body.id),
    item_name: req.body.name,
    item_description: req.body.description,
    price: req.body.price,
    tag: req.body.tag,
    image: parseInt(req.body.id),
    stock: parseInt(req.body.stock),
    email: req.body.email,
  };
  console.log(post);
  let sql = "INSERT INTO items SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log("yes");
    res.send("item added");
  });
});

//delete post
app.post("/deletepost", (req, res) => {
  let id = parseInt(req.body.id);
  let sql = "DELETE FROM items where id = ?";
  let query = db.query(sql, id, (err, result) => {
    if (err) throw err;
    console.log("yes");
    res.send("post deleted");
  });
});

//find post
app.post("/finditem", (req, res) => {
  let id = parseInt(req.body.id);
  let sql = "SELECT * FROM items where id = ?";
  let query = db.query(sql, id, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.post("/searchitem", (req, res) => {
  let name = req.body.search;
  let wCharacter = "";
  for (i = 0; i < name.length; i++) {
    if (name[i] != "%") {
      wCharacter = wCharacter.concat("%", name[i]);
    } else if (name[i] == "%") {
      i = i + 2;
    }
  }
  wCharacter = wCharacter.concat("%");
  let sql = "SELECT * FROM items where item_name like ?";
  let query = db.query(sql, wCharacter, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

//update post
app.post("/updatepost", (req, res) => {
  let post = {
    id: parseInt(req.body.id),
    item_name: req.body.name,
    item_description: req.body.description,
    price: req.body.price,
    tag: req.body.tag,
    image: parseInt(req.body.id),
    stock: parseInt(req.body.stock),
  };
  console.log(post);
  let sql = "INSERT INTO items SET ?";
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log("yes");
    res.send("item updated");
  });
});

app.post("/createuser", (req, res) => {
  let user = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    address: req.body.address,
    phone: req.body.phone,
    account_type: req.body.account_type,
  };
  let sql = "INSERT INTO accounts SET ?";
  let query = db.query(sql, user, (err, result) => {
    if (err) res.send([]);
    res.send(user.email);
  });
});

app.post("/login", (req, res) => {
  let user = { email: req.body.email, password: req.body.password };
  let sql = `SELECT * FROM accounts WHERE email='${user.email}' AND password='${user.password}'`;
  let query = db.query(sql, (err, result) => {
    if (err) res.send([]);
    var string = JSON.stringify(result);
    var json = JSON.parse(string);
    var name=json[0].name;
    var account_type=json[0].account_type;
    var email=json[0].email;
    var senddata={name,account_type,email}
    res.send(senddata);
  });
});

// app.get("/addonepost", (req, res) => {
//   let post = {
//     id: 1,
//     item_name: "Samsung",
//     item_description: "Samsung Phone",
//     price: 900,
//     tag: "Phone",
//     image: 1,
//     stock: 6,
//     email: "haha",
//   };
//   let sql = "INSERT INTO items SET ?";
//   let query = db.query(sql, post, (err, result) => {
//     if (err) throw err;
//     res.send("1 item added");
//   });
// });

app.listen("3001", () => {
  console.log("server up");
});
