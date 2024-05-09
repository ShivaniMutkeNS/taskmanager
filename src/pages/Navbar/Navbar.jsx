import React from "react";
import "./Navbar.css";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch=useDispatch()
  const {auth}=useSelector(store=>store)
  return (
    <div className="container z-10 sticky left-20 right-0 top-0 py-3 px-5 lg:px-10 flex justify-between items-center">
      <p className="font-extrabold text-lg text-custom-blue">Welcome to Task management app</p>
      <div className="flex items-center gap-5">
        <p className="font-semibold text-lgx">{auth.user.fullName}</p>
          <p className="font-semibold text-lgx">{auth.user.role}</p>
        <Avatar
          alt="Remy Sharp"
          src="https://em-content.zobj.net/source/google/110/girl_1f467.png"
        />
      </div>
    </div>
  );
};

export default Navbar;
