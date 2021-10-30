import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { VscArrowRight } from "react-icons/vsc";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

const PositionHeader = ({
  JobType = "Intership",
  JobName = "UX/UI Designer Web & Mobile Platforms",
  Date = " 26 September, 2021",
  company = "Avesta Group Company",
  Location = "Iraq,Sulaimany,Salim St.",
  Salary = "10$ - 15$ Per Hour",
  logo = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
}) => {
  const [saved, setsaved] = useState(true);
  const emailtest = {
    username: "john",
    useremail: "john123@gmail.com",
    userlink: `{"https://rbc-jobie.netlify.app/user/${userid}"}`,
    companyemail: "rebaz415@gmail.com",
    companyname: "google"
  }

  function SaveButton() {
    setsaved(false);
    setsaved(!saved);
  }
  const sendUserInfo = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m2azucq', 'template_6qnh9fc', emailtest, 'user_sRP5iBhZmFEbxe9NtZU2b')
      .then((result) => {
        alert("Application was submitted successfully");
      }, (error) => {
        alert("Application was not submitted successfully");
      });
  };

  return (
    <div className="bg-light w-full">
      <div className="px-4 lg:px-48 w-full py-10">
        <div className="grid grid-cols-3 pb-7">
          <div className="flex  col-span-2 items-center">
            <div className="h-52 w-72  sm:mb-0 bg-lightblue rounded-2xl flex items-center justify-center">
              {logo ? (
                <img
                  src={logo}
                  alt={JobName}
                  className="w-44 h-44 object-cover rounded-2xl"
                />
              ) : (
                <div className="h-full border-primary bg-primary-light text-primary w-full rounded-full inline-flex items-center align-middle justify-center font-bold text-9xl">
                  <span>{company.charAt(0)}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col pl-5 ">
              <p className="font-medium text-accent">{JobType}</p>
              <h1 className="text-3xl text-primary ">{JobName}</h1>
              <h2 className="font-medium text-accent">{company}</h2>
              <h2 className="text-base">{Location} </h2>
              <h2 className="text-base mt-5">{Date}</h2>
            </div>
          </div>

          <div className="flex flex-col ">
            <button className="text-2xl self-end" onClick={SaveButton}>
              {saved ? (
                <div>
                  <IoBookmarkOutline />
                </div>
              ) : (
                <div>
                  <IoBookmark />
                </div>
              )}
            </button>
            <button 
              className=" bg-accent hover:bg-secondary text-white rounded-full items-center text-xl inline-flex py-3 px-10 self-end my-auto space-x-2"
              onClick={sendUserInfo}
            >
              <span>Apply Now</span> <VscArrowRight />
            </button>
          </div>
        </div>
        <div>
          <button className="flex text-secondary text-lg space-x-2 font-semibold items-center">
            <span>View All Jobs</span>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositionHeader;
