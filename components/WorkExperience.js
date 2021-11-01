import React from "react";
import { FaMinus } from "react-icons/fa";

export default function WorkExperience({ handleChange, work }) {
  console.log("WORK :  ", work);

  // const handle_Change = (e) => {
  //   handleChange(e);
  // };
  // const work = workExperience;

  return (
    <div>
      <>
        <div className="flex mt-4">
          <h1 className="mb-10 mt-4 text-xl text-primary">Experience item</h1>
          <div className="mt-2 ml-6">
            <button className="flex justify-center rounded-full border-2 border-secondary text-secondary px-6 py-1 text-white font-medium ml-3 mt-1">
              <FaMinus className="mt-1 mr-1" />
              Remove
            </button>
          </div>
        </div>
        <div className=" row-2 grid grid-cols-3">
          <div className="self-center col-2 ">
            <h5 className="mb-2">Company</h5>
            <input
              className="h-11 w-full rounded-lg border-grey border-2 pl-2"
              name="company"
              placeholder=""
              onChange={handleChange}
              value={work.company}
            />
          </div>
          <div className="self-center col-2 ml-4">
            <h5 className="mb-2">Location</h5>
            <input
              className="h-11 w-full rounded-lg border-grey border-2 pl-2"
              name="location"
              placeholder=""
              onChange={handleChange}
              value={work.location}
            />
          </div>
          <div className="self-center col-2 ml-4">
            <h5 className="mb-2">Type of employ</h5>
            <input
              className="h-11 w-full rounded-lg border-grey border-2 pl-2"
              name="typeOfEmploy"
              placeholder=""
              onChange={handleChange}
              value={work.typeOfEmploy}
            />
          </div>{" "}
          <div className="self-center col-2 mt-6 mb-4">
            <h5 className="mb-2">Position</h5>
            <input
              className="h-11 w-full rounded-lg border-grey border-2 pl-2"
              name="position"
              placeholder=""
              onChange={handleChange}
              value={work.position}
            />
          </div>{" "}
          <div className="self-center col-2 ml-4 mt-6 mb-4">
            <h5 className="mb-2">Date</h5>
            <input
              className="h-11 w-full rounded-lg border-grey border-2 pl-2"
              name="date"
              placeholder=""
              onChange={handleChange}
              value={work.date}
            />
          </div>
        </div>
      </>
      ;
    </div>
  );
}
