import React, { useState } from "react";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";

const JobListing = ({
  position = "senior ui/ux designer ",
  company = "Google",
  location = "California",
  jobType = "Fulltime",
  salary = "$150k - $170k",
  time = "2021/10/10",
  logo = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
}) => {
  const [saved, setsaved] = useState(true);
  function SaveButton() {
    setsaved(false);
    setsaved(!saved);
  }
  return (
    <div className="bg-white shadow-lg w-full py-4 px-6 flex justify-between items-center rounded-xl">
      <div className="flex-none sm:flex space-x-4 items-center justify-center">
        <div className="h-16 w-16 sm:mb-0 mb-3 bg-lightblue rounded-2xl flex justify-center items-center">
          {logo ? (
            <img src={logo.src} alt={company} width={50} height={50} />
          ) : (
            <div className="h-full border-primary bg-primary-light text-primary w-full inline-flex items-center align-middle justify-center font-bold text-6xl">
              <span>{company.charAt(0)}</span>
            </div>
          )}
        </div>

        <div>
          <p className="font-bold font-primary text-lg">{position}</p>
          <p>{company}</p>
        </div>
      </div>

      <div>
        <p className="font-bold font-primary text-lg">{location}</p>
        <p>{jobType}</p>
      </div>

      <div>
        <p className="font-bold font-primary text-lg">{salary}</p>
        <p>Yearly</p>
      </div>

      <span className="flex flex-col space-y-8 ">
        <button onClick={SaveButton}>
          {saved ? (
            <div className="flex justify-end text-lg">
              <IoBookmarkOutline />
            </div>
          ) : (
            <div className="flex justify-end text-lg">
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
