import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(logout())} className="bg-red-500 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
};

export default LogoutButton;
