import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { createJob } from "../store/jobs/jobsSlice";
import { useState } from "react";
import { useRouter } from "next/router";
import useIsLoggedIn from "../config/useIsLoggedIn";
import Loading from "../components/Loading";

export default function Createjob() {
  const [loading, setLoading] = useState(true);
  useIsLoggedIn().then((value) => {
    setLoading(value);
  });
  const cities = [
    { value: "Remote", label: "Remote" },
    { value: "Anbar", label: "Anbar" },
    { value: "Babylon", label: "Babylon" },
    { value: "Baghdad", label: "Baghdad" },
    { value: "Basrah", label: "Basrah" },
    { value: "Dahuk", label: "Dahuk" },
    { value: "Diyala", label: "Diyala" },
    { value: "Erbil", label: "Erbil" },
    { value: "Kerbala", label: "Kerbala" },
    { value: "Missan", label: "Missan" },
    { value: "Muthanna", label: "Muthanna" },
    { value: "Najaf", label: "Najaf" },
    { value: "Ninewa", label: "Ninewa" },
    { value: "Qadissiya", label: "Qadissiya" },
    { value: "Salah al-Din", label: "Salah al-Din" },
    { value: "Sulaymaniyah", label: "Sulaymaniyah" },
    { value: "Tameem", label: "Tameem" },
    { value: "Thi-Qar", label: "Thi-Qar" },
    { value: "Wassit", label: "Wassit" },
  ];

  const employment = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Contract", label: "Contract" },
    { value: "Internship", label: "Internship" },
  ];

  const category = [
    { value: "Design", label: "Design" },
    { value: "Frontend Developer", label: "Frontend Developer" },
    { value: "Backend Developer", label: "Backend Developer" },
    { value: "Full Stack Developer", label: "Full Stack Developer" },
    { value: "Web Developer", label: "Web Developer" },
    { value: "Network", label: "Network" },
    { value: "Project Manager", label: "Project Manager" },
    { value: "Data", label: "Data" },
  ];

  const experience = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4+", label: "4+" },
  ];

  const level = [
    { value: "Entry-Level", label: "Entry-Level" },
    { value: "Mid-Level", label: "Mid-Level" },
    { value: "Senior-Level", label: "Senior-Level" },
  ];

  const gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Both", label: "Both" },
  ];

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };

  const router = useRouter();

  const [formData, setFormData] = useState({
    position: "",
    address: "",
    description: "",
    responsibilities: "",
    experience: "",
    salary_from: "",
    salary_to: "",
    location: "",
    employment_type: [],
    category: "",
    work_level: [],
    gender: "",
    experience_years: "",
  });
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDropDownChange = (values, action) => {
    if (Array.isArray(values)) {
      const selectedData = values.map((value) => {
        return value.value;
      });
      setFormData({ ...formData, [action.name]: selectedData });
    } else {
      setFormData({ ...formData, [action.name]: values.value });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(createJob(formData));

    setFormData({
      position: "",
      address: "",
      description: "",
      responsibilities: "",
      experience: "",
      salary_from: "",
      salary_to: "",
      location: "",
      employment_type: "",
      category: "",
      work_level: "",
      gender: "",
      experience_years: "",
    });
  };

  if (loading) return <Loading />;
  else
    return (
      <form className="form">
        <div className="bg-body px-4 lg:px-48 w-full pt-10">
          <div className="border-b-2 grid grid-cols-3">
            <div className="col-1 col-span-2">
              <h1 className="text-dark font-semibold text-4xl">
                {" "}
                Create a Job{" "}
              </h1>
              <h4 className="mb-10"> Create a new job offer here</h4>
            </div>
            <div className="col-start-3 my-10 flex justify-end">
              <button
                className="text-base rounded-full p-1 px-6   text-white font-semibold  bg-accent"
                type="submit"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="text-base rounded-full p-1 px-6 ml-6  text-dark  font-semibold  bg-lightgrey"
                type="button"
                onClick={() => router.back()}
              >
                Cancel
              </button>
            </div>
          </div>
          <h1 className="text-dark font-semibold mt-6 mb-4">Job Detail</h1>
          <div className="grid grid-rows-5 auto-rows-min">
            <div className="row-1 grid grid-cols-3">
              <div className=" self-center col-1 col-span-2 ">
                <h5>Position</h5>
                <input
                  className=" w-full h-10 rounded-lg border-grey border-2 pl-2"
                  name="position"
                  placeholder="web developer"
                  onChange={handleFormChange}
                  value={formData.position}
                />
              </div>

              <div className=" self-center col-3 border-l-4 ml-6 pl-6  border-dark text-footer">
                Some job title examples:
                <ul className="list-disc ml-6 ">
                  <li>React Developer</li>
                  <li>Team Lead</li>
                  <li>Front-end Developer</li>
                </ul>
              </div>
            </div>

            <div className=" row-2 grid grid-cols-3">
              <div className="self-center col-1">
                <h5>Location</h5>
                <Select
                  instanceId="location"
                  className=" w-full h-11 rounded-lg border-grey border-2"
                  name="location"
                  required
                  options={cities}
                  styles={style}
                  placeholder="Select the Location that applies"
                  onChange={handleDropDownChange}
                  value={{
                    value: formData.location,
                    label: formData.location,
                  }}
                />
              </div>

              <div className="self-center col-2 ml-4">
                <h5>Address</h5>
                <input
                  className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                  name="address"
                  placeholder="as sulaymaniyah, Iraq"
                  onChange={handleFormChange}
                  value={formData.address}
                />
              </div>

              <div className="self-center col-3 border-l-4 ml-6 pl-6 my-8  border-dark text-footer">
                Tip
                <ul className="list-disc ml-6 ">
                  <li>Choose “Remote” as location for online work</li>
                </ul>
              </div>
            </div>

            <div className="row-3 grid grid-cols-3">
              <div className="self-center col-1">
                <h5>Type of Employment</h5>
                <Select
                  instanceId="employment_type"
                  className=" w-full h-11 rounded-lg border-grey border-2"
                  name="employment_type"
                  required
                  options={employment}
                  styles={style}
                  placeholder="Choose all that applies"
                  onChange={handleDropDownChange}
                  value={{
                    value: formData.employment_type,
                    label: formData.employment_type,
                  }}
                />
              </div>

              <div className="self-center col-2 ml-4">
                <h5>Category</h5>
                <Select
                  instanceId="category"
                  className=" w-full h-11 rounded-lg border-grey border-2"
                  name="category"
                  required
                  options={category}
                  styles={style}
                  placeholder="Choose all that applies"
                  onChange={handleDropDownChange}
                  value={{
                    value: formData.category,
                    label: formData.category,
                  }}
                />
              </div>
            </div>

            <div className="row-4 grid grid-cols-3">
              <div className="self-center col-1">
                <h5>Work Level</h5>
                <Select
                  instanceId="work_level"
                  className=" w-full h-11 rounded-lg border-grey border-2"
                  name="work_level"
                  required
                  options={level}
                  styles={style}
                  placeholder="Choose all that applies"
                  onChange={handleDropDownChange}
                  value={{
                    value: formData.work_level,
                    label: formData.work_level,
                  }}
                />
              </div>

              <div className="self-center col-2 ml-4">
                <h5>Experience</h5>
                <Select
                  instanceId="experience_years"
                  className=" w-full h-11 rounded-lg border-grey border-2"
                  name="experience_years"
                  required
                  options={experience}
                  styles={style}
                  placeholder="how many years of experience"
                  onChange={handleDropDownChange}
                  value={{
                    value: formData.experience_years,
                    label: formData.experience_years,
                  }}
                />
              </div>
            </div>

            <div className="self-center row-5">
              <h5>Gender</h5>
              <Select
                instanceId="gender"
                className=" w-1/3 h-11 rounded-lg border-grey border-2"
                name="gender"
                required
                options={gender}
                styles={style}
                placeholder="Choose gender for this position"
                onChange={handleDropDownChange}
                value={{ value: formData.gender, label: formData.gender }}
              />
            </div>
          </div>
        </div>

        <div className="bg-lightgrey px-4 lg:px-48 w-full py-10">
          <h1 className="text-dark font-semibold py-4"> Offered Salary ($)</h1>

          <div className="grid grid-cols-3">
            <div className="self-center col-1 ">
              <h5 className="pl-2">From</h5>
              <input
                className=" w-full h-10 rounded-lg border-grey border-2 pl-2"
                type="number"
                name="salary_from"
                placeholder="From"
                onChange={handleFormChange}
                value={formData.salary_from}
              />
            </div>

            <div className="self-center col-2 ">
              <h5 className="pl-2">To</h5>
              <input
                className=" w-full h-10 rounded-lg border-grey border-2 pl-2"
                type="number"
                name="salary_to"
                placeholder="To"
                onChange={handleFormChange}
                value={formData.salary_to}
              />
            </div>

            <div className="self-center col-3 border-l-4 ml-6 pl-6  border-dark text-footer">
              Tip
              <ul className="list-disc ml-6 ">
                <li>
                  If the salary increases over time fill in the fields (from &
                  to) accordingly
                </li>
                <li>If the salary is fixed then leave the “to” field empty</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-body px-4 lg:px-48 w-full">
          <h1 className="text-dark font-semibold py-6"> Description</h1>
          <div className="grid grid-rows-3 ">
            <div className="row-1 grid grid-cols-3">
              <div className="self-center col-1 col-span-2">
                <h5>Description</h5>
                <textarea
                  className="w-full h-52 mt-2 border-grey border-2"
                  onChange={handleFormChange}
                  name="description"
                  value={formData.description}
                />
              </div>
            </div>

            <div className="row-2 grid grid-cols-3">
              <div className="self-center col-1 col-span-2">
                <h5>Job Responsibilities</h5>
                <textarea
                  className="w-full h-52 mt-2 border-grey border-2"
                  onChange={handleFormChange}
                  name="responsibilities"
                  value={formData.responsibilities}
                />
              </div>
            </div>

            <div className="row-3 grid grid-cols-3">
              <div className="self-center col-1 col-span-2">
                <h5>Background and Experience</h5>
                <textarea
                  className="w-full h-52 mt-2 border-grey border-2"
                  onChange={handleFormChange}
                  name="experience"
                  value={formData.experience}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row-reverse">
            <div className=" my-10">
              <button
                className="text-base rounded-full p-1 px-6 text-white font-semibold bg-accent"
                type="submit"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="text-base rounded-full p-1 px-6 ml-6 text-dark  font-semibold bg-lightgrey"
                type="button"
                onClick={() => router.back()}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    );
}
