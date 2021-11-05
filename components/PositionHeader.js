import React, { useState } from "react";
import { sendUserData } from "../config/emailConfig";
import { VscArrowRight } from "react-icons/vsc";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import Link from "next/link";

const PositionHeader = ({
  job,
  company,
  handleApplyJob,
  applied,
  belongsToCompany,
  currentUser,
  is_company,
  ApplyNow,
  ViewAllJobs,
}) => {
  const [saved, setsaved] = useState(true);

  // when applying the following data needs to be saved and passed down to sendUserData
  const data = {
    username: "john",
    useremail: "sahrayarub@yahoo.de",
    userlink: "link",
    companyemail: "rebaz415@gmail.com",
    companyname: "google",
  };

  function SaveButton() {
    setsaved(false);
    setsaved(!saved);
  }
  return (
    <div className="bg-light w-full">
      <div className="px-4 lg:px-48 w-full py-10">
        {company && (
          <div className="grid grid-cols-3 pb-7">
            <div className="flex  col-span-2 items-center">
              <div className="h-52 w-72  sm:mb-0 bg-lightblue rounded-2xl flex items-center justify-center">
                {company?.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-56 h-48 object-cover rounded-2xl"
                  />
                ) : (
                  <div className="h-full border-primary bg-primary-light text-primary w-full rounded-full inline-flex items-center align-middle justify-center font-bold text-9xl">
                    <span>{company?.name ? company.name.charAt(0) : "C"}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col pl-5 ">
                <p className="font-medium text-accent">{job.category}</p>
                <h1 className="text-3xl text-primary ">{job.position}</h1>
                <h2 className="font-medium text-accent">
                  <Link href={`/company/${company?.id}`}>
                    <a className="hover:underline">{company.name}</a>
                  </Link>
                </h2>
                <h2 className="text-base">
                  {job.location}, {job.address}{" "}
                </h2>
                <h2 className="text-base mt-5">
                  {new Date(job.timestamp).toLocaleDateString("en-GB")}
                </h2>
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

              {currentUser && is_company === true ? (
                belongsToCompany ? (
                  <button
                    className=" bg-accent hover:bg-secondary text-white rounded-full items-center text-xl inline-flex py-3 px-10 self-end my-auto space-x-2"
                    disabled
                  >
                    <span>Edit</span>
                  </button>
                ) : (
                  ""
                )
              ) : applied ? (
                <button
                  className=" bg-gray-500 text-white rounded-full items-center text-xl inline-flex py-3 px-10 self-end my-auto space-x-2"
                  disabled
                >
                  <span>Already Applied</span>
                </button>
              ) : (
                <button
                  className=" bg-accent hover:bg-secondary text-white rounded-full items-center text-xl inline-flex py-3 px-10 self-end my-auto space-x-2"
                  onClick={handleApplyJob}
                >
                  <span>{ApplyNow}</span> <VscArrowRight />
                </button>
              )}
            </div>
          </div>
        )}
        <div>
          <button className="flex text-secondary text-lg space-x-2 font-semibold items-center">
            <span>{ViewAllJobs}</span>
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PositionHeader;
