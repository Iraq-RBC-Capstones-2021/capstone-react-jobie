import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProfile } from "../store/profiles/profileSlice";
import { setProfileComplete } from "../store/auth/authSlice";

export default function LoginAccountType() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [accountType, setAccountType] = useState({
    type: "JobSeeker",
  });

  const handleChange = (event) => {
    setAccountType({ type: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createProfile({
        id: auth.currentUser,
        is_company: accountType.type === "company" ? true : false,
        email: auth.userEmail,
        name: auth.userName,
      })
    );
    dispatch(setProfileComplete());
  };

  return (
    <div className="bg-black bg-opacity-80 inset-0 fixed flex justify-center items-center z-50 w-full h-full">
      <div className="p-10 bg-body rounded-md shadow-md ">
        <h1 className="text-5xl text-primary2 mb-15 mt-10">
          Please select your account type
        </h1>

        <div className="flex justify-between py-20">
          <div
            className={`w-2/4 p-8 border rounded-md shadow-lg ${
              accountType.type === "JobSeeker"
                ? "border-accent"
                : "border-white"
            }`}
          >
            <label>
              <input
                type="radio"
                name="AccountType"
                value="JobSeeker"
                className="w-5 h-5"
                checked={accountType.type === "JobSeeker"}
                onChange={handleChange}
              />

              <span className="ml-2 text-primary2 text-3xl pb-1">
                Job Seeker
              </span>
              <h3 className="text-lightGray2 text-md pl-8">
                User that is looking for a job
              </h3>
            </label>
          </div>

          <div
            className={`w-2/4 p-8 border rounded-md shadow-lg ml-8 checked:border-accent"
        ${accountType.type === "company" ? "border-accent" : "border-white"}`}
          >
            <label>
              <input
                type="radio"
                className="w-5 h-5"
                name="AccountType"
                value="company"
                checked={accountType.type === "company"}
                onChange={handleChange}
              />

              <span className="ml-2 text-primary2 text-3xl">Company</span>
              <h3 className="text-lightGray2 text-md pl-8">
                Employer or company looking for employees to hire
              </h3>
            </label>
          </div>
        </div>

        <div>
          <label className="border-accent">
            <input type="checkbox" className="mr-4  w-4 h-4" />

            <span className="text-primary2 text-lg">
              I agree to the{" "}
              <span className="text-accent  text-lg">terms and conditions</span>
            </span>
          </label>
          <button
            className="mt-8 block bg-primary2 text-white rounded-full py-2 px-6 text-2xl"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
