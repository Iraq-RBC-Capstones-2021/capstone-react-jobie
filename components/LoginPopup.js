import logo from "../assets/img_logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerWithGoogle } from "../store/auth/authSlice";

export default function LoginPopup({ handleLoginModal, showLoginModal }) {
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(registerWithGoogle());
    handleLoginModal();
  };

  return (
    <div
      className={`bg-black bg-opacity-80 inset-0 fixed flex justify-center items-center z-50 h-full w-full ${
        !showLoginModal && "hidden"
      }`}
    >
      <div className="rounded-md shadow-md w-1/4 bg-white">
        <div className="flex items-end  justify-end">
          <button
            type="button"
            className="p-4 text-xl"
            onClick={handleLoginModal}
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center px-6 space-y-8 pb-12">
          <div className="text-center w-32">
            <img
              src={logo.src}
              alt="Jobie Logo"
              className="object-center w-full h-full "
            />
          </div>
          <button
            className="my-15 bg-googleBtnBlue rounded-sm flex items-center justify-between py-0.25 px-0.25"
            type="button"
            onClick={handleLoginClick}
          >
            <span className="bg-white p-1 m-1 rounded-sm ">
              <FcGoogle size={45} />
            </span>

            <span className="text-white px-2 ">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
