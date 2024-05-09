import React, { useState } from "react";
import LoginForm from "./Signin/SigninForm";
import SignupForm from "./Signup/SignupForm";
import "./Auth.css";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const togglePanel = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex justify-center h-screen items-center overflow-hidden ">
      <div className="box  lg:max-w-4xl">
        <div className={`cover ${isRegister ? "rotate-active" : ""}`}>
          <div class="front">
            <img
              class=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0wS3bsb_kw-LkYQQd1d8Zyn9qn8a2sYbEqyBNAwrr-3AktBKgdu_HApxC3BQJZkcwIk&usqp=CAU"
              alt=""
            />
            <div class="text">
              <span class="text-1">
              Welcome to Manage Task! Stay organized and productive with our intuitive task management platform. Easily create, assign, and track tasks to streamline your workflow and achieve your goals efficiently.
              </span>
              <span class="text-2 text-xl">  Let's get started!</span>
            </div>
          </div>
          <div class="back">
            <img
              src="https://png.pngtree.com/background/20230613/original/pngtree-artistic-wallpapers-picture-image_3429089.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="forms h-full">
          <div className="form-content h-full ">
            <div className="login-form ">
              <LoginForm togglePanel={togglePanel} />
            </div>
            <div className="signup-form">
              <SignupForm togglePanel={togglePanel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
