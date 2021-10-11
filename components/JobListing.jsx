import React, { useState } from "react";
import Image from "next/image";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

const JobListing = ({
  position = "senior ui/ux designer ",
  company = "Google",
  location = "California",
  jobType = "Fulltime",
  salary = "$150k - $170k",
  time = "2021/10/10",
}) => {
  const [saved, setsaved] = useState(true);
  function SaveButton() {
    setsaved(false);
    setsaved(!saved);
  }
  return (
    <div className="bg-white shadow-xl w-11/12  py-4 px-6 h-auto flex  space-x-48  rounded-xl">
      <div className="flex space-x-4 ">
        <Image
          src="/Rectangle.svg"
          alt="Picture of the author"
          width={70}
          height={70}
        />
        <span>
          <h1 className="font-bold">{position}</h1>
          <h4>{company}</h4>
        </span>
      </div>

      <span>
        <h1 className="font-bold">{location}</h1>
        <h4>{jobType}</h4>
      </span>

      <span>
        <h1 className="font-bold  ">{salary}</h1>
        <h4>Yearly</h4>
      </span>
      <span className="flex flex-col space-y-8 ">
        <button onClick={SaveButton}>
          {saved ? (
            <div className="  flex justify-end">
              <IoBookmarkOutline />
            </div>
          ) : (
            <div className="  flex justify-end">
              <IoBookmark />
            </div>
          )}
        </button>
        <p className="text-sm">{time}</p>
      </span>
    </div>
  );
};

export default JobListing;
