import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  verifyEmail,
  googleSignIn,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/google-signin", googleSignIn); // New route for Google Sign-In

export default userRouter;
