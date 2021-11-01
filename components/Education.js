import React from "react";
import { FaMinus } from "react-icons/fa";

export default function Education({ handleChange, educationData }) {
  return (
    <div>
      <div className="flex mt-4">
        <h1 className="mb-10 mt-4 text-xl text-primary">Education Item</h1>
        <div className="mt-2 ml-6">
          <button className="flex justify-center rounded-full border-2 border-secondary text-secondary px-6 py-1 text-white font-medium ml-3 mt-1">
            <FaMinus className="mt-1 mr-1" />
            Remove
          </button>
        </div>
      </div>
      <div className=" row-2 grid grid-cols-3 mb-4">
        <div className="self-center col-2 ">
          <h5 className="mb-2">University / School</h5>
          <input
            className="h-11 w-full rounded-lg border-grey border-2 pl-2"
            name="address"
            placeholder=""
            onChange={handleChange}
            defaultValue={educationData.university}
          />
        </div>
        <div className="self-center col-2 ml-4">
          <h5 className="mb-2">Major</h5>
          <input
            className="h-11 w-full rounded-lg border-grey border-2 pl-2"
            name="major"
            placeholder=""
            onChange={handleChange}
            defaultValue={educationData.major}
          />
        </div>
        <div className="self-center col-2 ml-4">
          <h5 className="mb-2">Date</h5>
          <input
            className="h-11 w-full rounded-lg border-grey border-2 pl-2"
            name="date"
            placeholder=""
            onChange={handleChange}
            defaultValue={educationData.date}
          />
        </div>
      </div>
    </div>
  );
}
