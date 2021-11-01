import { React, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Select from "react-select";
import { cities, employment } from "../selectData";

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
  }),
};

export default function WorkExperience({
  handleWorkChange,
  work,
  handleWorkRemove,
}) {
  // const [formData, setFormData] = useState(work);
  // const handleFormChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handle_Change = (e) => {
  //   handleChange(e);
  // };
  // const work = workExperience;

  return (
    <div>
      <div className="flex mt-4">
        <h1 className="mb-10 mt-4 text-xl text-primary">Experience item</h1>
        <div className="mt-2 ml-6">
          <button
            className="flex justify-center rounded-full border-2 border-secondary text-secondary px-6 py-1 font-medium ml-3 mt-1"
            type="button"
            onClick={() => handleWorkRemove(work.id)}
          >
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
            // onChange={handleChange}
            // value={work.company}
          />
        </div>
        <div className="self-center col-2 ml-4">
          <h5 className="mb-2">Location</h5>
          <Select
            instanceId="location"
            className=" w-full h-11 rounded-lg border-grey border-2"
            name="work_location"
            required
            options={cities}
            styles={style}
            placeholder="Select the Location that applies"
            // onChange={(e) => {
            //   setProfileData({
            //     ...profileData,
            //     ["work_location"]: e.value,
            //   });
            // }}
            // value={{
            //   value: work.location,
            //   label: work.location,
            // }}
          />
        </div>
        <div className="self-center col-2 ml-4">
          <h5 className="mb-2">Type of Employment</h5>
          <Select
            instanceId="employement_type"
            className=" w-full h-11 rounded-lg border-grey border-2"
            name="work_employement_type"
            required
            options={employment}
            styles={style}
            placeholder="Choose one that applies"
            // onChange={handleDropDownChange}
            // value={{
            //   value: formData.employement_type,
            //   label: formData.employement_type,
            // }}
          />
        </div>{" "}
        <div className="self-center col-2 mt-6 mb-4">
          <h5 className="mb-2">Position</h5>
          <input
            className="h-11 w-full rounded-lg border-grey border-2 pl-2"
            name="position"
            onChange={(e) => handleWorkChange(e, work.id)}
            value={work.position}
          />
        </div>{" "}
        <div className="self-center col-2 ml-4 mt-6 mb-4">
          <h5 className="mb-2">Date</h5>
          <input
            className="h-11 w-full rounded-lg border-grey border-2 pl-2"
            type="date"
            name="date"
            placeholder=""
            // onChange={handleChange}
            // value={work.date}
          />
        </div>
      </div>
    </div>
  );
}
