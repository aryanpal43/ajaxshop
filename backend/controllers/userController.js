import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import { sendVerificationEmail } from "../mailtrap/email.js";
import admin from "firebase-admin";
import SDK from "./otpajax1.json" assert { type: "json" };
import GoogleUser from "../models/user-authModel.js";

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(SDK),
  });
}

// Create JWT Token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// User Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// User Registration
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Password too weak" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    await sendVerificationEmail(user.email, verificationToken);

    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Email Verification
export const verifyEmail = async (req, res) => {
  const { code } = req.body;

  try {
    const user = await userModel.findOne({
      verificationToken: code,
      verificationExpiresAt: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationExpiresAt = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    console.error("Error in verifyEmail", error);
    res.status(500).json({
      success: false,
      message: "Error in email verification",
    });
  }
};

// Google Sign-In
export const googleSignIn = async (req, res) => {
  try {
    const { tokenId } = req.body;

    if (!tokenId) {
      return res.status(400).json({ success: false, message: "Token is required" });
    }

    // Verify the token using Firebase Admin SDK
    const decodedToken = await admin.auth().verifyIdToken(tokenId);
    const { email, name } = decodedToken;

    if (!email || !name) {
      return res.status(400).json({ success: false, message: "Invalid token data" });
    }

    // Check if user exists in your database
    let user = await GoogleUser.findOne({ email });

    if (!user) {
      user = new GoogleUser({ name, email, isVerified: true });
      await user.save();
    }

    // Generate your custom JWT token
    const token = createToken(user._id);

    // Respond with the token
    res.json({ success: true, token });
  } catch (error) {
    console.error("Error in Google Sign-In", error);

    if (error.code === "auth/id-token-expired") {
      return res.status(401).json({ success: false, message: "Token expired" });
    }
    if (error.code === "auth/argument-error") {
      return res.status(400).json({ success: false, message: "Invalid token" });
    }
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


// Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // You can add more useful payload to the JWT token here
      const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: "7d" });
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

