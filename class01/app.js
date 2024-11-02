
// //           class#4
import express from "express";
import chalk from "chalk";
import mongoose from "mongoose";
import userModel from "./models/userSchema.js";
import bcrypt from 'bcrypt'
import 'dotenv/config'
import cors from 'cors'
const app = express();
// const PORT = 5000;
const PORT = process.env.PORT

// MiddleWares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// mongodb configuration

// const DBURI = "mongodb+srv://sobia:sobia@cluster0.54u79.mongodb.net/";
const DBURI = process.env.MONGODB_URI

mongoose.connect(DBURI);

mongoose.connection.on("connected", () => console.log("MongoDB Connected"));

mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

app.get("/", (req, res) => {
  res.json({
    message: "server starting...",
    status: true,
  });
});

// login Api
app.post("/api/login", async (req,res) => {
  const {email, password} = req.body;

  if(!email || !password){
    res.json({
      message: "Invalid email & password",
      status: false
    })
    return
  }
  const emailExit = await userModel.findOne({email})
  if(!emailExit){
    res.json({
      message: "user not found",
      status: false
      })
      return
}

  const comparePassword = await bcrypt.compare(
    password, emailExist.password
  )
  if(!comparePassword){
    res.json({
      message: "Invalid email & password",
      status: false
      })
      return
      }

      res.json({
        message: "login success",
        status: true
      })


// sign up Api
app.post("/api/signup", async (req, res)=>{
  const {firstName, lastName, email, password} = req.body;

  if (!firstName || !lastName || !email || !password){
    res.json({
      message: "Please fill all the fields",
      status: false
    })
    return
  }
  const emailExist = await userModel.findOne({ email })

  console.log("emailExist", emailExist)

  if(emailExist !== null){
    res,json({
      message: "Email already exist",
      status: false
    })
  }
})




  const hashPassword = await bcrypt.hash(password, 10)

  console.log("hashPassword", hashPassword)
  
  let userObj = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashPassword
  }

  // create user as dbase
  const createUser = await userModel.create(userObj);
  
  res.json({
    message: "User created successfully",
    status: true
})

console.log(body)

res.send("Signup api")
})



app.listen(PORT, () => {
    console.log(
      chalk.red.bgBlack.bold.underline(
        `server is running on http:localhost:${PORT}`
      )
    );
  });




//    class # 3
// import express from "express";
// import chalk from "chalk";
// import mongoose from "mongoose";
// import postModel from "./models/postSchema.js";
// const app = express();
// const PORT = 5000;

// // MiddleWares

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // mongodb configuration

// const DBURI = "mongodb+srv://sobia:sobia@cluster0.54u79.mongodb.net/";

// mongoose.connect(DBURI);

// mongoose.connection.on("connected", () => console.log("MongoDB Connected"));

// mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

// app.get("/", (req, res) => {
//   res.json({
//     message: "server starting...",
//     status: true,
//   });
// });

// //  create post api's

// // post create
// app.post("/createpost", async (req, res) => {
//   const { title, desc, postId } = req.body;

//   if (!title || !desc || !postId) {
//     res.json({
//       message: "Please fill all the fields",
//     });
//     return;
//   }

//   // data save in DB

//   const postObj = {
//     title: title,
//     desc: desc,
//     postId: postId,
//   };

//   const response = await postModel.create(postObj);
//   res.json({
//     message: "post craete successfully",
//     data: response,
//   });
//   res.send("create post");
// });

// // post get
// app.get("/getpost", async (req, res) => {
//   const getData = await postModel.find({});
//   // const getData = await postModel.findOne({ postId: "30" });

//   res.json({
//     message: "post get successfully",
//     data: getData,
//   });
//   res.send("get post");
// });

// // post update
// app.put("/updatepost", async(req, res) => {
//   const { title, desc, postId } = req.body;
//   console.log( title, desc, postId )

//   const updatepost = await postModel.findByIdAndUpdate(postId, {title, desc})

//   res.json({
//     message: "post has been updated",
//     data: updatepost,
//   })
// });

// // post delete
// app.delete("/deletepost/:id", async(req, res) => {
//   const params = req.params.id;

//   await postModel.findByIdAndDelete(params)

//   res.json({
//     message: "post has been deleted",
//   })
// });

// app.listen(PORT, () => {
//   console.log(
//     chalk.red.bgBlack.bold.underline(
//       `server is running on http:localhost:${PORT}`
//     )
//   );
// });






// class # 02
// import express from "express";
// import { data } from "./data.js";
// import chalk from "chalk";
// import mongoose from "mongoose";
// const app = express();
// const PORT = 5000;

// // MiddleWares

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // mongodb configuration

// const DBURI = "mongodb+srv://admin:admin@cluster0.8t9bn.mongodb.net/";

// mongoose.connect(DBURI);

// mongoose.connection.on("connected", () => console.log("MongoDB Connected"));

// mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));

// app.get("/", (req, res) => {
//   res.send("server start");
// });

// // All products

// app.get("/products", (req, res) => {
//   res.send(data);
// });

// // Single Product get method

// app.get("/products/:id", (req, res) => {
//   const singleProId = req.params.id;

//   const filterData = data.filter((e, i) => e.id == singleProId);

//   res.send(filterData);
// });

// // All in One APi

// app.get("/products", (req, res) => {
//   console.log(req.query.id);

//   if (req.query.id) {
//     const filterData = data.filter((e, i) => e.id == req.query.id);

//     res.send(filterData);
//     return;
//   }

//   res.send(data);
// });

// // Api MEthods

// // Create  ---> post
// // Read   ----> get
// // update ----> put
// // delete ----> delete

// // post Api's

// app.get("/api/post", (req, res) => {
//   res.send("get post");
// });

// app.post("/api/post", (req, res) => {
//   console.log(req.body);

//   res.send("create post");
// });

// app.put("/api/post", (req, res) => {
//   res.send("update post");
// });

// app.delete("/api/post", (req, res) => {
//   res.send("delete post");
// });

// app.listen(PORT, () => {
//   console.log(
//     chalk.red.bgBlack.bold.underline(
//       `server is running on http:localhost:${PORT}`
//     )
//   );
// });






//  class # 01
// import express, { request, response } from 'express'
// import {data} from './data.js'

// Port
// app.get("/products", (request, response)=>{
//   response.send(data)
// })

// app.get("/client", (request, response)=>{
//   response.send("client data")
// })

// app.get("/",(request,response)=>{
//   response.send("server running on")
// })

// app.listen(3000,()=>{
//   console.log("Server is running")
// })
