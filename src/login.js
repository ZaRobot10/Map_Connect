import React, { useState } from "react";
import { Link , useHistory } from "react-router-dom";
import { auth } from "./firebase/firebase";
import "./global.css";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSignUpClick = () => {
    // Handle sign up click
  };

  const onRectangleButtonClick = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      history.push("/maps");
    } catch (error) {
      console.error(error.code, error.message);
    }
  };

  return (
    <div className="w-full relative bg-white h-[831px] overflow-hidden text-left text-11xl text-black font-abeezee">
      <div className="absolute top-[211px] left-[41px]">LOG IN</div>
      <div className="absolute top-[294px] left-[41px] text-6xl">
        Email /username
      </div>
      <div className="absolute top-[433px] left-[47px] text-6xl">password</div>
      <div className="absolute top-[667px] left-[48px] inline-block w-[439px]">
        Don't have an account
      </div>
      <Link
        className="cursor-pointer text-darkblue absolute top-[667px] left-[389px] text-darkblue"
        to="/signUp"
        onClick={onSignUpClick}
        style={{ textDecoration: "none" }}
      >
        Sign up
      </Link>
      <Link
        className="cursor-pointer text-white text-center absolute top-[95px] left-[189px]"
        to="/home"
      >
        HOME
      </Link>
      <div
        className="cursor-pointer bg-mediumblue rounded-[20px] w-[242px] h-[66px] absolute top-[584px] left-[147px]"
        onClick={onRectangleButtonClick}
      >
        <Link
          to="/map"
          className="cursor-pointer bg-mediumblue rounded-[20px] w-[500px] h-[66px] block"
        ></Link>
      </div>
      <div
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-[20px] absolute top-[106px] left-[137px]"
        onClick={onRectangleButtonClick}
        style={{ width: "242px", height: "66px" }}
      >
        <button
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-[20px] w-full h-full"
        ></button>
      </div>
      <div className="absolute top-[599px] left-[224px] text-white text-center">
        LOGIN
      </div>
      <img
        className="absolute top-[300px] left-[894px] w-6 h-6 overflow-hidden"
        alt=""
        src="/back-arrow.svg"
      />
      <img
        className="absolute top-[51px] left-[687px] rounded-[50%] w-[694px] h-[698px] object-cover"
        alt=""
        src="/ellipse-3@2x.png"
      />
      <input
        className="border-black border border-solid border-opacity-100 border-opacity-100 border-opacity-100 border-opacity-100 absolute top-[343px] left-[46px] w-[494px] h-[57px] text-black px-3 py-2"
        type="email"
        placeholder="Enter your email"
      />
      <input
        className="border-black border border-solid border-opacity-100 border-opacity-100 border-opacity-100 border-opacity-100 absolute top-[488px] left-[48px] w-[494px] h-[57px] text-black px-3 py-2"
        type="password"
        placeholder="Enter your password"
      />
      <div className="absolute top-[120px] left-[143px] text-snow text-center inline-block w-[232px] h-[52px]">
        HOME
      </div>
    </div>
  );
};

export default Login;