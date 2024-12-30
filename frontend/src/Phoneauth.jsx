import React, { useState } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import app from "./firebase-config";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const auth = getAuth(app);

  // Set up reCAPTCHA verifier
  const setupRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("reCAPTCHA solved:", response);
        },
      },
      auth
    );
  };

  // Send OTP to the user's phone
  const sendOTP = async () => {
    try {
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setConfirmationResult(result);
      alert("OTP sent to your phone number!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert(error.message);
    }
  };

  // Verify the OTP entered by the user
  const verifyOTP = async () => {
    try {
      if (!confirmationResult) {
        alert("Please send OTP first.");
        return;
      }
      const result = await confirmationResult.confirm(otp);
      const user = result.user;
      alert(`User signed in successfully: ${user.phoneNumber}`);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Invalid OTP!");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Phone Authentication</h2>

      {/* reCAPTCHA container */}
      <div id="recaptcha-container"></div>

      {/* Input for phone number */}
      <div>
        <input
          type="text"
          placeholder="Enter phone number (+1234567890)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px", width: "100%" }}
        />
        <button
          onClick={sendOTP}
          style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
        >
          Send OTP
        </button>
      </div>

      {/* Input for OTP */}
      <div>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{ marginBottom: "10px", padding: "8px", width: "100%" }}
        />
        <button onClick={verifyOTP} style={{ padding: "10px", width: "100%" }}>
          Verify OTP
        </button>
      </div>
    </div>
  );
};

export default PhoneAuth;
