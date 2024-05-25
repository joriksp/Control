import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import { registerValudation, loginValudation } from "./validations.js";
import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

mongoose
   .connect(
      "mongodb+srv://jorik:13579sJorik01@cluster0.zmsskws.mongodb.net/app?retryWrites=true&w=majority&appName=Cluster0"
   )
   .then(() => {
      console.log("DB connected");
   })
   .catch((err) => console.log("DB error", err));

const app = express();
const PORT = 4444;

app.use(express.json());
app.use(cors());

app.post("/auth/login", loginValudation, UserController.login);
app.post("/auth/reg", registerValudation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);
app.post("/auth/me", checkAuth, UserController.updateProfile);

app.get("/deals/:id", checkAuth, PostController.getById);
app.get("/deals", checkAuth, PostController.getAll);
app.post("/deals", checkAuth, PostController.create);

app.listen(PORT, (err) => {
   if (err) {
      return console.log(err);
   }
   console.log(`Server is running on port ${PORT}`);
});
