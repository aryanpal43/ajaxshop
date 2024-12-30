
import mongoose from "mongoose";

const googleUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cartData: { type: Object, default: {} },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const GoogleUser = mongoose.model("GoogleUser", googleUserSchema);

export default GoogleUser;
