import React, { useState } from "react";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import { useSelector } from "react-redux";
import { fetchProfile } from "../store/profiles/profileSlice";
import { wrapper } from "../store";
import { fetchCompany } from "../store/tempStorage/tempStorageSlice";
import Link from "next/link";

const JobListing = (jobs) => {
  const job = jobs.jobs;
  const logo =
    "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png";
  const [saved, setsaved] = useState(true);
  function SaveButton() {
    setsaved(false);
    setsaved(!saved);
  }

  return (
    <div className="bg-white shadow-lg w-full py-4 px-6 flex justify-between items-center rounded-xl mb-8">
      <div className="flex-none sm:flex space-x-4 items-center justify-center">
        <div className="h-16 w-16 sm:mb-0 mb-3 bg-lightblue rounded-2xl flex justify-center items-center">
          {logo ? (
            <img src={logo} alt="company name" width={50} height={50} />
          ) : (
            <div className="h-full border-primary bg-primary-light text-primary w-full inline-flex items-center align-middle justify-center font-bold text-6xl"></div>
          )}
        </div>

        <div>
          <Link href={`/job/${job.id}`}>
            <a className="font-bold font-primary text-lg">{job.position}</a>
          </Link>
          <p>Google</p>
        </div>
      </div>

      <div>
        <p className="font-bold font-primary text-lg">{job.location}</p>
        <p>part Time</p>
      </div>

      <div>
        <p className="font-bold font-primary text-lg">
          {"$" + job.salary_from + "-" + " $" + job.salary_to}
        </p>
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
        <p className="text-sm">{}</p>
      </span>
    </div>
  );
};

export default JobListing;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(fetchCompany());
});
