import React, { useState } from "react";
import { auth } from "./firebase/firebase";


const Desktop = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // try {
    //   await auth.createUserWithEmailAndPassword(email, password);
    //   // Registration successful, redirect or update UI as needed
    //   window.location.href = "/after-login"; // Redirect to after-login page
    // } catch (error) {
    //   console.error("Registration error:", error.message);
    // }

    window.location.href = "/map"; // Redirect to after-login page
  };
  

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFrameButtonClick = () => {
    window.location.href = "/home";
  };

  const handleLoginHereClick = () => {
    window.location.href = "/login";
  };

  return (
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-left text-6xl text-black font-abeezee">
    <button
  className="relative cursor-pointer bg-gray-800 text-white rounded-none w-96 h-16 pl-8 flex items-center"
  onClick={handleFrameButtonClick}
>
  <img src="../public/image-2@2x.png" alt="" className="mr-4" />
  HOME
</button>

      <img
        className="absolute top-[116px] left-[720px] w-[687px] h-[810px] object-cover"
        alt=""
        src="/rectangle-12@2x.png"
      />
      <div className="absolute top-[232px] left-[63px] text-11xl">Sign up</div>
      <div className="absolute top-[315px] left-[63px]">Email</div>
      <input
        className="border-black bg-transparent absolute top-[365px] left-[61px] h-14 w-96 border border-primary"
        type="email"
        value={email}
        onChange={handleChangeEmail}
      />
      <div className="absolute top-[437px] left-[63px]">Username</div>
      <input
        className="border-black bg-transparent absolute top-[485px] left-[61px] h-14 w-96 border border-primary"
        type="text"
      />
      <div className="absolute top-[557px] left-[61px]">Password</div>
      <input
        className="border-black bg-transparent absolute top-[612px] left-[61px] h-14 w-96 border border-primary"
        type="password"
        value={password}
        onChange={handleChangePassword}
      />
      <div className="absolute top-[680px] left-[63px]">Confirm Password</div>
      <input
        className="border-black bg-transparent absolute top-[730px] left-[63px] h-14 w-96 border border-primary"
        type="password"
      />
      <button
        className="absolute top-[812px] left-[191px] transform -translate-x-1/2 cursor-pointer bg-blue-500 text-white rounded-none w-64 h-12"
        onClick={handleRegister}
      >
        REGISTER
      </button>
      <div className="absolute top-[878px] left-[63px] text-11xl">
        <p className="m-0">&nbsp;</p>
        <p className="m-0">If you already have an account</p>
      </div>
      <button
        className="absolute top-[913px] left-[522px] cursor-pointer bg-primary text-white rounded-none w-48 h-12"
        onClick={handleLoginHereClick}
      >
        Login here
      </button>
    </div>
  );
};

export default Desktop;
