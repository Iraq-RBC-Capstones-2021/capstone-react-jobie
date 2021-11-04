import React, { useState } from "react";
import { IoBookmarkOutline, IoBookmark } from "react-icons/io5";
import Link from "next/link";

const JobListing = ({ job, company }) => {
  const [saved, setsaved] = useState(true);
  function SaveButton() {
    setsaved(false);
    setsaved(!saved);
  }
  return (
    <div className="bg-white shadow-lg w-full py-4 px-6 flex justify-between items-center rounded-xl mb-8">
      <div className="flex-none sm:flex space-x-4 items-center  w-5/12">
        <div className="h-16 w-16 sm:mb-0 mb-3 bg-lightblue rounded-2xl flex justify-center items-center ">
          {company?.logo ? (
            <img src={company.logo} alt={company.name} width={50} height={50} />
          ) : (
            <div className="h-full border-primary bg-primary-light text-primary w-full rounded-full inline-flex items-center align-middle justify-center font-bold text-5xl">
              <span>{company?.name ? company.name.charAt(0) : "C"}</span>
            </div>
          )}
        </div>

        <div>
          <Link href={`/job/${job.id}`}>
            <a className="font-bold font-primary text-lg hover:underline">
              {job.position}
            </a>
          </Link>
          <p>
            {" "}
            <Link href={`/company/${company?.id}`}>
              <a className="hover:underline">{company?.name}</a>
            </Link>
          </p>

          {/* <p>{company?.name}</p> */}
        </div>
      </div>

      <div className="w-3/12">
        <p className="font-bold font-primary text-lg">{job.location}</p>
        <p>{job.employment_type}</p>
      </div>

      <div className="w-3/12">
        <p className="font-bold font-primary text-lg">
          {`$${job.salary_from} - $${job.salary_to}`}
        </p>
        <p>Monthly</p>
      </div>

      <span className="flex flex-col space-y-8 w-1/12">
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
        <p className="text-sm self-end">
          {new Date(job.timestamp).toLocaleDateString("en-GB")}
        </p>
      </span>
    </div>
  );
};

export default JobListing;
