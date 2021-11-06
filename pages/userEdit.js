import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { addUserProfile, fetchProfile } from "../store/profiles/profileSlice";
import { useState, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience";
import { cities } from "../selectData";
import { nanoid } from "@reduxjs/toolkit";
import { useRouter } from "next/router";
import useIsLoggedIn from "../config/useIsLoggedIn";
import Loading from "../components/Loading";

import en from "../locales/en";
import ar from "../locales/ar";

export default function Edit() {
  const Router = useRouter();
  const { locale } = Router;
  const t = locale === "ar" ? ar : en;

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useIsLoggedIn().then((value) => {
    setLoading(value);
  });
  const userProfile = useSelector((state) => state.profile.profile);
  const [profileData, setProfileData] = useState(userProfile);
  const [imgPreview, setImgPreview] = useState(profileData.img);
  const [cvPreview, setCvPreview] = useState();

  const imagePreviewRef = useRef();
  const dispatch = useDispatch();

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWorkAdd = (e) => {
    const workItem = {
      id: nanoid(),
      company: "",
      location: "",
      position: "",
      date: "",
      employment_type: "",
    };
    const workItems = [...profileData.workExperience, workItem];
    setProfileData({
      ...profileData,
      workExperience: workItems,
    });
  };

  const handleWorkRemove = (id) => {
    const workItems = profileData.workExperience.filter(
      (item) => item.id !== id
    );
    setProfileData({ ...profileData, workExperience: workItems });
  };

  const handleWorkChange = (e, id) => {
    const workItem = profileData.workExperience.filter(
      (item) => item.id === id
    );

    const newItem = { ...workItem[0], [e.target.name]: e.target.value };
    const newExp = profileData.workExperience.map((work) =>
      work.id === id ? newItem : work
    );

    setProfileData({ ...profileData, workExperience: newExp });
  };

  const handleEducationAdd = (e) => {
    // console.log("click");
    const eduItem = { id: nanoid(), school: "", major: "", date: "" };
    const eduItems = [...profileData.education, eduItem];

    setProfileData({
      ...profileData,
      education: eduItems,
    });
  };

  const handleEducationChange = (e, id) => {
    const eduItem = profileData.education.filter((item) => item.id === id);

    const newItem = { ...eduItem[0], [e.target.name]: e.target.value };
    const newExp = profileData.education.map((work) =>
      work.id === id ? newItem : work
    );

    setProfileData({ ...profileData, education: newExp });
  };

  const handleEducationRemove = (id) => {
    const eduItems = profileData.education.filter((item) => item.id !== id);
    setProfileData({ ...profileData, education: eduItems });
  };

  const handleDropDownChange = (e, id, action) => {
    const workItem = profileData.workExperience.filter(
      (item) => item.id === id
    );
    const newItem = { ...workItem[0], [action]: e.value };
    const newExp = profileData.workExperience.map((work) =>
      work.id === id ? newItem : work
    );

    setProfileData({ ...profileData, workExperience: newExp });
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
      cvFile: e.target.files[0],
    });
    setCvPreview(e.target.files[0]);
    // console.log("preview", cvPreview);
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
    dispatch(addUserProfile(profileData));
  };

  if (!userProfile || loading) return <Loading />;
  else
    return (
      <>
        <form className="form">
          <div className="bg-body px-4 lg:px-48 w-full pt-10">
            <div className="border-b-2 grid grid-cols-3">
              <div className="col-1 col-span-2">
                <h1 className="text-dark font-semibold text-4xl">
                  {profileData.firstName !== ""
                    ? `${profileData.firstName} ${profileData.lastName}`
                    : `${profileData.name}`}{" "}
                  {t.ProfileEdit.EditProfile}
                </h1>
                <h4 className="mb-10">{t.ProfileEdit.SetUp}</h4>
              </div>
              <div className="col-start-3 my-10 flex justify-end">
                <button
                  className="text-base rounded-full p-1 px-6   text-white font-semibold  bg-accent"
                  type="submit"
                  onClick={addData}
                >
                  {t.ProfileEdit.Save}
                </button>
                <button
                  className="text-base rounded-full p-1 px-6 ml-6  text-dark  font-semibold  bg-lightgrey"
                  type="button"
                  onClick={() => router.back()}
                >
                  {t.ProfileEdit.Cancel}
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
                                  {t.ProfileEdit.UploadPhoto}
                                </h1>{" "}
                                <input
                                  type="file"
                                  accept="image/*"
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
                            {t.ProfileEdit.Delete}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-6 text-footer">{t.ProfileEdit.ImageDesc}</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="mb-10 text-3xl text-primary">
                {t.ProfileEdit.ResumeFile}
              </h1>
              <div className="pb-20 mt-10">
                <div className="self-center col-1 col-span-2">
                  <div className="w-full h-20 rounded-md bg-white border-2  flex items-center">
                    <label>
                      <div className="flex">
                        <h1 className="text-base rounded-full p-1 px-10  ml-10 text-white font-semibold cursor-pointer bg-dark">
                          {t.ProfileEdit.Choose}
                        </h1>
                        <p className="text-darkgrey mt-1 ml-4">
                          {cvPreview?.name
                            ? cvPreview.name
                            : t.ProfileEdit.NoFileSelected}
                        </p>
                      </div>
                      <input
                        onChange={handleUploadCV}
                        name="resumeFile"
                        type="file"
                        accept="application/pdf"
                        className="w-full h-20 mt-2 border-grey border-2 bg-dark"
                        style={{ display: "none" }}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h1 className="mb-10 text-3xl text-primary">
                {t.ProfileEdit.BasicInfo}
              </h1>
              <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">{t.ProfileEdit.FirstName}</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="firstName"
                    placeholder="First name"
                    onChange={handleChange}
                    value={profileData.firstName}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">{t.ProfileEdit.LastName}</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="lastName"
                    placeholder="Last name"
                    onChange={handleChange}
                    value={profileData.lastName}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2"> {t.ProfileEdit.Title}</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="title"
                    placeholder=""
                    onChange={handleChange}
                    value={profileData.title}
                  />
                </div>
              </div>
              <div className="pb-20 mt-10">
                <div className="self-center col-1 col-span-2">
                  <h5 className="mb-2">{t.ProfileEdit.Biography}</h5>
                  <textarea
                    className="w-full h-40 mt-2 border-grey border-2"
                    name="biography"
                    onChange={handleChange}
                    value={profileData.biography}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-lightgrey flex flex-col items-center justify-center w-full ">
            <div className="px-4 lg:px-48 w-full pt-10 pb-14 ">
              <h1 className="mb-10 text-3xl text-primary">
                {t.ProfileEdit.Contact}
              </h1>
              <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">{t.ProfileEdit.Location}</h5>

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
                        ["location"]: e.value,
                      });
                    }}
                    value={{
                      value: profileData.location,
                      label: profileData.location,
                    }}
                  />
                </div>

                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">{t.ProfileEdit.Email}</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="email"
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                    defaultValue={profileData.email}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">{t.ProfileEdit.Phone}</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="phone"
                    placeholder="+96477055555"
                    onChange={handleChange}
                    defaultValue={profileData.phone}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  flex flex-col items-center justify-center bg-body">
            <div className="px-4 lg:px-48 w-full pt-10 pb-14">
              <h1 className="mb-10 text-3xl text-primary">
                {t.ProfileEdit.Social}
              </h1>
              <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">Linkedin</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="linkedin"
                    placeholder="Linkedin"
                    onChange={handleChange}
                    defaultValue={profileData.linkedIn}
                  />
                </div>

                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Github</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="github"
                    placeholder="Github"
                    onChange={handleChange}
                    defaultValue={profileData.github}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Facebook</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="facebook"
                    placeholder="Facebook"
                    onChange={handleChange}
                    defaultValue={profileData.facebook}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-lightgrey flex flex-col items-center justify-center ">
            <div className="px-4 lg:px-48 w-full pt-10 pb-14">
              <div className="">
                <h1 className="text-3xl text-primary mb-5">
                  {t.ProfileEdit.Skills}
                </h1>
                <p>{t.ProfileEdit.SkillsDesc}</p>
              </div>
              <div className=" mt-10">
                <div className="self-center col-1 col-span-2">
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    type="text"
                    name="skills"
                    placeholder="react,tailwind,node js"
                    onChange={handleChange}
                    value={profileData.skills}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  flex flex-col items-center justify-center bg-body">
            <div className="px-4 lg:px-48 w-full pt-10 pb-14">
              <h1 className=" text-3xl text-primary mt-4">
                {t.ProfileEdit.WorkExperience}
              </h1>
              <div className="mt-5 ">
                <button
                  className="flex justify-center rounded-full border-2 bg-secondary  px-6 py-1 text-white font-medium"
                  onClick={handleWorkAdd}
                  type="button"
                >
                  <FaPlus className="mt-1 mr-1" />
                  {t.ProfileEdit.AddItem}
                </button>
              </div>
              {profileData?.workExperience
                ? profileData.workExperience.map((work) => {
                    return (
                      <WorkExperience
                        key={work.id}
                        work={work}
                        handleWorkRemove={handleWorkRemove}
                        handleWorkChange={handleWorkChange}
                        handleDropDownChange={handleDropDownChange}
                      />
                    );
                  })
                : "No work experience added yet."}
            </div>
          </div>
          <div className="w-full  flex flex-col items-center justify-center bg-lightgrey">
            <div className="px-4 lg:px-48 w-full pt-10 pb-14">
              <h1 className=" text-3xl text-primary mt-4">
                {t.ProfileEdit.Education}
              </h1>
              <div className="mt-5 ">
                <button
                  className="flex justify-center rounded-full border-2 bg-secondary  px-6 py-1 text-white font-medium"
                  onClick={handleEducationAdd}
                  type="button"
                >
                  <FaPlus className="mt-1 mr-1" />
                  {t.ProfileEdit.AddItem}
                </button>

                {profileData?.education
                  ? profileData.education.map((edu) => {
                      return (
                        <Education
                          key={edu.id}
                          edu={edu}
                          handleEducationRemove={handleEducationRemove}
                          handleEducationChange={handleEducationChange}
                          handleDropDownChange={handleDropDownChange}
                        />
                      );
                    })
                  : "No education added yet."}
              </div>

              <div className="w-full pt-12 mb-20">
                <div className="col-start-3 my-10 flex justify-end ">
                  <button
                    className="text-base rounded-full p-1 px-6   text-white font-semibold  bg-accent"
                    type="submit"
                    onClick={addData}
                  >
                    {t.ProfileEdit.Save}
                  </button>
                  <button
                    className="text-base rounded-full p-1 px-6 ml-6  text-dark  font-semibold  bg-lightblue"
                    type="button"
                    onClick={() => router.back()}
                  >
                    {t.ProfileEdit.Cancel}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
}
