import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { addProfile, fetchProfile } from "../store/profiles/profileSlice";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { storage } from "../config/dbConfig";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Img from "./../assets/TeamPic/Lara.jpg";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
const userProfile = {
  is_company: false,
  // img: "",
  img: Img.src,
  resumeFile: "",
  basicInfo: {
    firstName: "Lara",
    lastName: "Raoof",
    title: "Frontend Developer",
    biography:
      "I have no time⏳ to HATE PPL W HATE ME Cuz I'm busy LOVING PPL W L ME😊",
  },
  contact: {
    location: "Kirkuk",
    email: "larawf0019@gmail.com",
    phone: "07730000000",
  },
  social: {
    linkedIn: "https://www.linkedin.com/in/geshben",
    github: "https://github.com/Ge6ben",
    facebook: "https://www.facebook.com/geshben",
  },
  skills: ["React", "Node js ", "MySql", "Express", "Tailwind", "jQuery"],
  workExperience: [
    {
      id: 1,
      company: "HiTech",
      location: "Erbil",
      typeOfEmploy: "Fulltime",
      position: "intern",
      date: "2021/9/1",
    },
    {
      id: 2,
      company: "HiTech",
      location: "Erbil",
      typeOfEmploy: "Fulltime",
      position: "intern",
      date: "2021/9/1",
    },
  ],
  education: [
    { id: 1, university: "TCK", major: "B.S", date: "2016-2020" },
    { id: 2, university: "TCK", major: "B.S", date: "2016-2020" },
  ],
};

// const [profileData, setProfileData] = useState(userProfile);

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const imagePreviewRef = useRef();

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

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };

  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState(userProfile);
  const [imgPreview, setImgPreview] = useState(profileData.img);
  const [cvPreview, setCvPreview] = useState("");
  // console.log(profileData.workExperience);
  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    setProfileData({
      ...profileData,
      img: e.target.files[0],
    });
    setImgPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleUploadCV = (e) => {
    e.preventDefault();

    setProfileData({
      ...profileData,
      resumeFile: e.target.files[0],
    });
    // setCvPreview(URL.createObjectURL(e.target.files[0]));
    console.log(cvPreview);
  };

  const handleImgDelete = (e) => {
    e.preventDefault();
    setProfileData({
      ...profileData,
      img: "",
    });
    imagePreviewRef.current.value = "";
    setImgPreview("");
  };

  const addData = (e) => {
    e.preventDefault();
    dispatch(addProfile(profileData));
  };

  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [dispatch, id]);
  const educationData = profileData.education;
  if (userProfile) {
    return (
      <>
        {" "}
        <form className="form">
          <div className="bg-body px-4 lg:px-48 w-full pt-10">
            <div className="border-b-2 grid grid-cols-3">
              <div className="col-1 col-span-2">
                <h1 className="text-dark font-semibold text-4xl">
                  {profileData.basicInfo.firstName}{" "}
                  {profileData.basicInfo.lastName} / Edit Profile
                </h1>
                <h4 className="mb-10">Set up your personal resume page</h4>
              </div>
              <div className="col-start-3 my-10 flex justify-end">
                <button
                  className="text-base rounded-full p-1 px-6   text-white font-semibold  bg-accent"
                  type="submit"
                  onClick={addData}
                >
                  Save
                </button>
                <button className="text-base rounded-full p-1 px-6 ml-6  text-dark  font-semibold  bg-lightgrey">
                  Cancel
                </button>
              </div>
            </div>
            <div className="mt-16 pb-16">
              <div className="flex-none sm:flex">
                <div className="h-32 w-32 sm:mb-0 mb-3 bg-lightblue rounded-2xl flex items-center justify-center">
                  {imgPreview ? (
                    <img
                      src={imgPreview}
                      alt={profileData.name}
                      className="w-28 h-28 object-cover rounded-2xl"
                    />
                  ) : (
                    <div className="h-full border-primary bg-primary-light text-primary w-full rounded-full inline-flex items-center align-middle justify-center font-bold text-8xl">
                      <span>
                        {profileData.name ? profileData.name.charAt(0) : "P"}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-auto sm:ml-5 justify-evenly pl-5">
                  <div className="flex items-center justify-between sm:mt-2">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <div className="flex-auto text-gray-500 mt-2">
                          <div className="mb-2">
                            <label>
                              <div className="flex">
                                <h1 className="text-base rounded-full p-1 px-6 mr-2 text-white font-semibold border-2 border-secondary bg-secondary cursor-pointer w-40">
                                  Upload photo
                                </h1>{" "}
                                <input
                                  type="file"
                                  className="w-full h-20 mt-2 border-grey border-2 bg-dark hidden"
                                  onChange={handleUpload}
                                  ref={imagePreviewRef}
                                />
                              </div>
                            </label>
                          </div>
                          <button
                            className="rounded-full border-2 border-secondary px-6 py-1 text-secondary font-medium w-40"
                            onClick={handleImgDelete}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-footer">
                    Image should be at least 400 x 400px as a png or jpeg file
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="mb-10 text-3xl text-primary">Resume File</h1>
              <div className="pb-20 mt-10">
                <div className="self-center col-1 col-span-2">
                  <div className="w-full h-20 rounded-md bg-white border-2  flex items-center">
                    <label>
                      <div className="flex">
                        <h1 className="text-base rounded-full p-1 px-10  ml-10 text-white font-semibold  bg-dark">
                          Choose
                        </h1>
                        <p className="text-darkgrey mt-1 ml-4">
                          {cvPreview === "" ? "No File Chosen" : cvPreview}
                        </p>
                      </div>
                      <input
                        onChange={handleUploadCV}
                        name="resumeFile"
                        type="file"
                        className="w-full h-20 mt-2 border-grey border-2 bg-dark"
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="mb-10 text-3xl text-primary">basic info</h1>
              <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">First Name</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="firstName"
                    placeholder="First name"
                    onChange={handleChange}
                    defaultValue={profileData.basicInfo.firstName}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">last Name</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="lastName"
                    placeholder="Last name"
                    onChange={handleChange}
                    defaultValue={profileData.basicInfo.lastName}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2"> Title</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="title"
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={profileData.basicInfo.title}
                  />
                </div>
              </div>
              <div className="pb-20 mt-10">
                <div className="self-center col-1 col-span-2">
                  <h5 className="mb-2">Biography</h5>
                  <textarea
                    className="w-full h-40 mt-2 border-grey border-2"
                    name="biography"
                    onChange={handleChange}
                    defaultValue={profileData.basicInfo.biography}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Start */}

          <div className="w-full bg-lightgrey flex flex-col items-center justify-center h-64">
            <div className="w-3/4 ">
              <h1 className="mb-10 text-3xl text-primary">Contact</h1>
              <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">Location</h5>

                  <Select
                    instanceId="location"
                    className=" w-full h-11 rounded-lg border-grey border-2"
                    name="location"
                    required
                    options={cities}
                    styles={style}
                    placeholder="Select the Location that applies"
                    onChange={(e) => {
                      setProfileData({
                        ...profileData,
                        ["location"]: e,
                      });
                    }}
                    value={{
                      value: profileData.contact.location,
                      label: profileData.contact.location,
                    }}
                  />
                </div>

                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Email</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="email"
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                    defaultValue={profileData.contact.email}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Phone</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="phone"
                    placeholder="+96477055555"
                    onChange={handleChange}
                    defaultValue={profileData.contact.phone}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  flex flex-col items-center justify-center h-64">
            <div className="w-3/4 ">
              <h1 className="mb-10 text-3xl text-primary">Social</h1>
              <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">Linkedin</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="linkedin"
                    placeholder="Linkedin"
                    onChange={handleChange}
                    defaultValue={profileData.social.linkedIn}
                  />
                </div>

                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Github</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="github"
                    placeholder="Github"
                    onChange={handleChange}
                    defaultValue={profileData.social.github}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Facebook</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="facebook"
                    placeholder="Facebook"
                    onChange={handleChange}
                    defaultValue={profileData.social.facebook}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Test */}
          <div className="w-full bg-lightgrey flex flex-col items-center justify-center ">
            <div className="px-4 lg:px-48 w-full pt-10 pb-14">
              <div className="mb-10 ">
                <h1 className="text-3xl text-primary mb-5">Skills</h1>
                <p>Separate Skills by commas</p>
              </div>
              <div className="pb-20 mt-10">
                <div className="self-center col-1 col-span-2">
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    type="text"
                    name="skills"
                    placeholder="react,tailwind,node js"
                    onChange={(e) => {
                      setProfileData({
                        ...profileData,
                        skills: e.target.value.split(),
                      });
                    }}
                    defaultValue={profileData.skills.join()}
                  />
                </div>
              </div>

              <div className="w-full  mb-20">
                <div className="col-start-3 my-10 flex justify-end ">
                  <button
                    className="text-base rounded-full p-1 px-6   text-white font-semibold  bg-accent"
                    type="submit"
                    onClick={addData}
                  >
                    Save
                  </button>
                  <button className="text-base rounded-full p-1 px-6 ml-6  text-dark  font-semibold  bg-lightgrey">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  flex flex-col items-center justify-center  mb-20">
            <div className="w-3/4 border-b-2">
              <h1 className=" text-3xl text-primary mt-4">Work Experience</h1>

              {profileData.workExperience.map((work) => {
                console.log("Test ", work);
                return (
                  <WorkExperience
                    key={work.id}
                    handleChange={handleChange}
                    work={work}
                  />
                );
              })}

              {/* <WorkExperience
                handleChange={handleChange}
                workExperience={profileData.workExperience}
              /> */}

              {/* <div className="flex mt-4">
                <h1 className="mb-10 mt-4 text-xl text-primary">
                  Experience item
                </h1>
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
                    defaultValue={profileData.workExperience.company}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Location</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={profileData.workExperience.location}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Type of employee</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={profileData.workExperience.typeOfEmploy}
                  />
                </div>{" "}
                <div className="self-center col-2 mt-6 mb-4">
                  <h5 className="mb-2">Position</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={profileData.workExperience.position}
                  />
                </div>{" "}
                <div className="self-center col-2 ml-4 mt-6 mb-4">
                  <h5 className="mb-2">Date</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="date"
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={profileData.workExperience.date}
                  />
                </div>
              </div> */}
            </div>

            <div className="w-3/4 ">
              <div className="flex mt-4">
                {/* <h1 className="mb-10 mt-4 text-xl text-primary">
                  Experience item
                </h1> */}
                <div className="mt-2 ml-6">
                  <button className="flex justify-center rounded-full border-2 bg-secondary  px-6 py-1 text-white font-medium ml-3 mt-1">
                    <FaPlus className="mt-1 mr-1" />
                    Add item
                  </button>
                </div>
              </div>
              {/* <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">Company</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="company"
                    placeholder=""
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Location</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Type of employee</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="typeOfEmploy"
                    placeholder=""
                  />
                </div>{" "}
                <div className="self-center col-2 mt-6 mb-4">
                  <h5 className="mb-2">Position</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="position"
                    placeholder=""
                  />
                </div>{" "}
                <div className="self-center col-2 ml-4 mt-6 mb-4">
                  <h5 className="mb-2">Date</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="date"
                    placeholder=""
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div
            className="w-full
          
          bg-lightgrey flex flex-col items-center justify-center"
          >
            <div className="w-3/4 border-b-2 border-darkgrey">
              <h1 className=" text-3xl text-primary mt-4">Education</h1>
              {/* <div className="flex mt-4">
                <h1 className="mb-10 mt-4 text-xl text-primary">
                  Education Item
                </h1>
                <div className="mt-2 ml-6">
                  <button className="flex justify-center rounded-full border-2 border-secondary text-secondary px-6 py-1 text-white font-medium ml-3 mt-1">
                    <FaMinus className="mt-1 mr-1" />
                    Remove
                  </button>
                </div>
              </div> */}
              {/* {educationData.map((edu) => {
                <Education handleChange={handleChange} educationData={edu} />;
              })} */}
              <Education
                handleChange={handleChange}
                educationData={profileData.workExperience}
              />
              <div className="mt-2 ml-6">
                <button className="flex justify-center rounded-full border-2 bg-secondary  px-6 py-1 text-white font-medium ml-3 mt-1">
                  <FaPlus className="mt-1 mr-1" />
                  Add item
                </button>
              </div>
              {/* <div className=" row-2 grid grid-cols-3 mb-4">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">University / School</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={profileData.education.university}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Major</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="major"
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={profileData.education.major}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Date</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="date"
                    placeholder=""
                    onChange={handleChange}
                    defaultValue={profileData.education.date}
                  />
                </div>

              </div> 
            </div>
            <div className="w-3/4 ">
              <div className="flex mt-4">
                <h1 className="mb-10 mt-4 text-xl text-primary">
                  Education item
                </h1>
                <div className="mt-2 ml-6">
                  <button className="flex justify-center rounded-full border-2 bg-secondary  px-6 py-1 text-white font-medium ml-3 mt-1">
                    <FaPlus className="mt-1 mr-1" />
                    Add item
                  </button>
                </div>
              </div>
              {/* <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">University / School</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="university"
                    placeholder=""
                    // onChange={handleChange}
                    // value={profileData.education.university}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Major</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    // onChange={handleChange}
                    // value={profileData.education.major}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Date</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="date"
                    placeholder=""
                    // onChange={handleChange}
                    // value={profileData.education.date}
                  />
                </div>
              </div> */}{" "}
              <div className="w-full pt-12 mb-20">
                <div className="col-start-3 my-10 flex justify-end ">
                  <button
                    className="text-base rounded-full p-1 px-6   text-white font-semibold  bg-accent"
                    type="submit"
                    onChange={addData}
                  >
                    Save
                  </button>
                  <button className="text-base rounded-full p-1 px-6 ml-6  text-dark  font-semibold  bg-lightblue">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
  return <>loading</>;
}
