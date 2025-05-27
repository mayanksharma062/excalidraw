import express from "express";
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
const app = express();

app.post("/signup", (req, res)=>{

  // db Call

  res.json({
    auth: "123123";
  })
  
})

app.post("/signin", (req, res)=>{

  const userId = 1;
  const token = jwt.sign({
    userId
  }, "123123");


  res.json({
    token
  })

})

app.post("/room",middleware, (req, res)=>{

  // dbCall


  res.json({
    roomId: "123";
  })
})

app.listen(3001, ()=>{
  console.log("Everything working fine...");
  
});
