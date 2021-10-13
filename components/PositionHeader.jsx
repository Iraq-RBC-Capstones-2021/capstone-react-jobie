import React, { useState } from "react";
import Image from "next/image";
import { VscArrowRight } from "react-icons/vsc";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
const PositionHeader = ({
  JobType = "Intership",
  JobName = "UX/UI Designer Web & Mobile Platforms",
  Date = " 26 September  ",
  company = "Avesta Group Company",
  Location = "Iraq,Sulaimany,Salim St.",
  Salary = "10$ - 15$ Per Hour",
}) => {
  const [saved, setsaved] = useState(true);

  function SaveButton() {
    setsaved(false);
    setsaved(!saved);
  }
  return (
    <div className="bg-light  w-screen h-auto flex ">
      <div className="p-12 ">
        <Image
          className="bg-white rounded-xl"
          src="/public/positionheader.svg"
          width={400}
          height={332}
        />
      </div>
      <div className="my-16  space-y-4  ">
        <p className="font-medium text-accent">{JobType}</p>
        <h1 className="text-3xl  ">{JobName}</h1>
        <h2 className="font-medium">
          Posted {Date} by <span className="text-accent">{company}</span>
        </h2>
        <h2>{Location} </h2>
        <h2>{Salary}</h2>
      </div>
      <button className="absolute  flex  bg-accent hover:bg-secondary text-white  px-10 rounded-full space-x-2 items-center h-14 w-52  inset-y-48 right-10 text-xl  ">
        <span>Apply Now</span> <VscArrowRight />
      </button>
      <button className=" absolute  flex    text-secondary  space-x-2   left-16  font-semibold  bottom-56 items-center">
        <span>View All Jobs</span>
        <HiOutlineArrowNarrowRight />
      </button>
      <button className="absolute right-10 top-12 " onClick={SaveButton}>
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
    </div>
  );
};

export default PositionHeader;
