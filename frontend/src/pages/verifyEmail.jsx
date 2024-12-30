import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post(`${backendUrl}/api/user/verify-email`, {
        code,
      });

      if (response.data.success) {
        setMessage(response.data.message);
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] ">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Verify Email</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Enter your verification code"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Verify
        </button>
      </form>
      {message && <p className="text-green-600 mt-4">{message}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <div className="w-full flex justify-center  text-sm mt-[8px]">
        <Link to="/verify-phone">
          <p>Verify with Phone</p>
        </Link>
      </div>
    </div>
  );
};

export default VerifyEmail;
