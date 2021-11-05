import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { addProfile } from "../store/profiles/profileSlice";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";
import useIsLoggedIn from "../config/useIsLoggedIn";
import Loading from "../components/Loading";

export default function Edit() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useIsLoggedIn().then((value) => {
    setLoading(value);
  });
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

  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const imagePreviewRef = useRef();

  const [profileData, setProfileData] = useState(profile);
  const [logoPreview, setLogoPreview] = useState(profileData.logo);

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
      logo: e.target.files[0],
    });
    setLogoPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleLogoDelete = (e) => {
    e.preventDefault();
    setProfileData({
      ...profileData,
      logo: "",
    });
    imagePreviewRef.current.value = "";
    setLogoPreview("");
  };

  const addData = (e) => {
    e.preventDefault();

    dispatch(addProfile(profileData));
  };

  if (!profile || loading) return <Loading />;
  else
    return (
      <>
        {" "}
        <div>
          <form className="form">
            <div className="bg-body px-4 lg:px-48 w-full pt-10">
              <div className="border-b-2 grid grid-cols-3">
                <div className="col-1 col-span-2">
                  <h1 className="text-dark font-semibold text-4xl">
                    {profileData.name} / Edit Profile
                  </h1>
                  <h4 className="mb-10"> Set up your company’s profile page</h4>
                </div>
                <div className="col-start-3 my-10 flex justify-end">
                  <button
                    className="text-base rounded-full p-1 px-6   text-white font-semibold  bg-accent"
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
                    {logoPreview ? (
                      <img
                        src={logoPreview}
                        alt={profileData.name}
                        className="w-28 h-28 object-cover rounded-2xl"
                      />
                    ) : (
                      <div className="h-full border-primary bg-primary-light text-primary w-full rounded-full inline-flex items-center align-middle justify-center font-bold text-8xl">
                        <span>
                          {profileData.name ? profileData.name.charAt(0) : "C"}
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
                              onClick={handleLogoDelete}
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
              <div className="w-full">
                <h1 className="mb-10 text-3xl text-primary">Basic Info</h1>
                <div className=" row-2 grid grid-cols-3">
                  <div className="self-center col-2 ">
                    <h5 className="mb-2">Company Name</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="name"
                      onChange={handleChange}
                      value={profileData.name}
                      required
                    />
                  </div>
                  <div className="self-center col-1 ml-4">
                    <h5 className="mb-2">Category</h5>
                    <Select
                      className=" w-full h-11 rounded-lg border-2"
                      name="category"
                      required
                      styles={style}
                      options={category}
                      instanceId="category"
                      onChange={(e) => {
                        setProfileData({
                          ...profileData,
                          ["category"]: e.value,
                        });
                      }}
                      value={{
                        value: profileData.category,
                        label: profileData.category,
                      }}
                    />
                  </div>
                  <div className="self-center col-2 ml-4">
                    <h5 className="mb-2">Website URL</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="website"
                      onChange={handleChange}
                      value={profileData.website}
                    />
                  </div>
                </div>
                <div className="pb-20 mt-10">
                  <div className="self-center col-1 col-span-2">
                    <h5 className="mb-2">About the company</h5>
                    <textarea
                      className="w-full h-40 mt-2 border-grey border-2"
                      name="about"
                      onChange={handleChange}
                      value={profileData.about}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-lightgrey flex flex-col items-center justify-center w-full ">
              <div className="px-4 lg:px-48 w-full pt-10 pb-14">
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
                    <h5 className="mb-2">Email</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="email"
                      onChange={handleChange}
                      value={profileData.email}
                      required
                    />
                  </div>
                  <div className="self-center col-2 ml-4">
                    <h5 className="mb-2">Phone</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="phone"
                      onChange={handleChange}
                      value={profileData.phone}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full  flex flex-col items-center justify-center bg-body">
              <div className="px-4 lg:px-48 w-full pt-10 pb-14">
                <h1 className="mb-10 text-3xl text-primary">Social</h1>
                <div className=" row-2 grid grid-cols-3">
                  <div className="self-center col-2 ">
                    <h5 className="mb-2">Linkedin</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="linkedin"
                      onChange={handleChange}
                      value={profileData.linkedin}
                    />
                  </div>

                  <div className="self-center col-2 ml-4">
                    <h5 className="mb-2">Github</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="github"
                      onChange={handleChange}
                      value={profileData.github}
                    />
                  </div>
                  <div className="self-center col-2 ml-4">
                    <h5 className="mb-2">Facebook</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="facebook"
                      onChange={handleChange}
                      value={profileData.facebook}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-lightgrey flex flex-col items-center justify-center ">
              <div className="px-4 lg:px-48 w-full pt-10 pb-14">
                <div className="mb-10 ">
                  <h1 className="text-3xl text-primary mb-5">Specialities</h1>
                  <p>Add specialities as comma seperated values.</p>
                </div>
                <div className="pb-20 mt-10">
                  <div className="self-center col-1 col-span-2">
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      type="text"
                      name="specialities"
                      placeholder="web,network,internet"
                      onChange={handleChange}
                      value={profileData.specialities}
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
          </form>
        </div>
      </>
    );
}
