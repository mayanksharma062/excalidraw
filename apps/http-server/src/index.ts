import express from "express";
import jwt from "jsonwebtoken"
import { middleware } from "./middleware";
import { JWT_SECRET } from "@repo/backend-common/config";
import { CreateUserSchema, SignInSchema, CreateRoomSchema } from "@repo/common/types"

const app = express();

app.post("/signup", (req, res)=>{

  const data = CreateUserSchema.safeParse(req.body);

  if(!data.success){
    res.json({
      message: "Incorrect Inputs"
    })
    return;
  }

  // db Call

  res.json({
    userId: JWT_SECRET
  })
  
})

app.post("/signIn", (req, res)=>{

  const data = SignInSchema.safeParse(req.body);

  if(!data.success){
    res.json({
      message: "Incorrect Inputs"
    })
    return;
  }

  const userId = 1;
  const token = jwt.sign({
    userId
  }, JWT_SECRET);


  res.json({
    token
  })

})

app.post("/room",middleware, (req, res)=>{

  const data = CreateRoomSchema.safeParse(req.body);

  if(!data.success){
    res.json({
      message: "Incorrect Inputs"
    })
    return;
  }

  // dbCall


  res.json({
    roomId: "123"
  })
})

app.listen(3001, ()=>{
  console.log("Everything working fine...");
  
});
