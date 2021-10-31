import Select from "react-select";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { dispatch } from "jest-circus/build/state";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { storage } from "../../../config/dbConfig";
import { addProfile, fetchProfile } from "../../../store/profiles/profileSlice";

function Edit() {
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

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };

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
  const userProfile = {
    is_user: true,
    img: "",
    resumeFile: "",
    basicInfo: {
      firstName: "",
      lastName: "",
      title: "",
      biography: "",
    },
    contact: {
      location: "",
      email: "",
      phone: "",
    },
    social: { linkedIn: "", github: "", facebook: "" },
    skills: {
      skill_1: "",
      skill_2: "",
      skill_3: "",
      skill_4: "",
      skill_5: "",
      skill_6: "",
    },
    workExperience: {
      company: "",
      location: "",
      typeOfEmploy: "",
      position: "",
      date: "",
    },
    education: { university: "", major: "", date: "" },
  };

  const [profileData, setProfileData] = useState(userProfile);
  const dispatch = useDispatch();

  const addData = (e) => {
    e.preventDefault();
    dispatch(addProfile(profileData));
  };

  const [logoPreview, setLogoPreview] = useState(profileData.logo);

  const handleUpload = (e) => {
    e.preventDefault();
    setProfileData({
      ...profileData,
      img: e.target.files[0], //Why
    });
    setLogoPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleLogoDelete = (e) => {
    e.preventDefault();
    setProfileData({
      ...profileData,
      logo: "",
    });
    setLogoPreview("");
  };
  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  // Why
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    dispatch(fetchProfile(id));
  }, [dispatch, id]);

  if (companyProfile) {
    return (
      <>
        {" "}
        <form className="form">
          <div className="bg-body px-4 lg:px-48 w-full pt-10">
            <div className="border-b-2 grid grid-cols-3">
              <div className="col-1 col-span-2">
                <h1 className="text-dark font-semibold text-4xl">
                  {userProfile.firstName} {userProfile.lastName} / Edit Profile
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
                  {logoPreview ? (
                    <img
                      src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                      alt="logo"
                    />
                  ) : (
                    <div className="h-full border-primary bg-primary-light text-primary w-full rounded-full inline-flex items-center align-middle justify-center font-bold text-8xl">
                      <span>{profileData.firstName.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="flex-auto sm:ml-5 justify-evenly pl-10">
                  <div className="flex items-center justify-between sm:mt-2">
                    <div className="flex items-center">
                      <div className="flex flex-col">
                        <div className="flex text-gray-500 mt-4">
                          <div>
                            <div>
                              <label>
                                <div className="flex">
                                  <h1 className="text-base rounded-full p-1 px-6  -mt-1 mr-2 text-white font-semibold  bg-secondary">
                                    Upload photo
                                  </h1>
                                </div>
                                <input
                                  type="file"
                                  className="w-full h-20 mt-2 border-grey border-2 bg-dark"
                                  style={{ display: "none" }}
                                  onChange={handleUpload}
                                />
                              </label>
                            </div>
                          </div>
                          <div>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-full border-2 border-secondary px-6 py-1 text-secondary font-medium "
                              onClick={handleLogoDelete}
                            >
                              Delete
                            </a>
                          </div>
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
                          No File Choosen
                        </p>
                      </div>
                      <input
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
                    name="first Name"
                    placeholder="first name"
                    onChange={handleChange}
                    value={profileData.firstName}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">last Name</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="last Name"
                    placeholder="last name"
                    onChange={handleChange}
                    value={profileData.lastName}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2"> Title</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    value={profileData.title}
                  />
                </div>
              </div>
              <div className="pb-20 mt-10">
                <div className="self-center col-1 col-span-2">
                  <h5 className="mb-2">Biography</h5>
                  <textarea
                    className="w-full h-40 mt-2 border-grey border-2"
                    onChange={handleChange}
                    value={profileData.biography}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-lightgrey flex flex-col items-center justify-center h-64">
            <div className="w-3/4 ">
              <h1 className="mb-10 text-3xl text-primary">Contact</h1>
              <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">Location</h5>
                  {/* <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder="as sulaymaniyah, Iraq"
                    onChange={handleChange}
                    value={profileData.contact.location}
                  /> */}

                  <Select
                    instanceId="location"
                    className=" w-full h-11 rounded-lg border-grey border-2"
                    name="location"
                    required
                    options={cities}
                    styles={style}
                    placeholder="Select the Location that applies"
                    onChange={(e) => {
                      setFormData({
                        ///where is it
                        ...formdata,
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
                    name="address"
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                    value={profileData.contact.email}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Phone</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder="+96477055555"
                    onChange={handleChange}
                    value={profileData.contact.phone}
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
                    name="address"
                    placeholder="Linkedin"
                    onChange={handleChange}
                    value={profileData.contact.linkedIn}
                  />
                </div>

                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Github</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder="Github"
                    onChange={handleChange}
                    value={profileData.contact.github}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Facebook</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder="Facebook"
                    onChange={handleChange}
                    value={profileData.contact.facebook}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-lightgrey flex flex-col items-center justify-center h-96">
            <div className="w-3/4 mt-20">
              <h1 className="mb-10 text-3xl text-primary">Skills</h1>
              <div className=" row-2 grid grid-cols-5">
                <div className="self-center col-2 ml-4">
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                  />
                </div>{" "}
                <div className="self-center col-2 ml-4">
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                  />
                </div>
                <div className="">
                  <button className="flex justify-center rounded-full border-2 border-secondary text-secondary px-6 py-1 text-white font-medium ml-3 mt-1">
                    <FaMinus className="mt-1 mr-1" />
                    Remove
                  </button>
                </div>
              </div>
              <div className=" row-2 grid grid-cols-5 mt-5">
                <div className="self-center col-2 ml-4">
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                  />
                </div>{" "}
                <div className="self-center col-2 ml-4">
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                  />
                </div>
                <div className="">
                  <button className="flex justify-center rounded-full bg-secondary  px-6 py-1 text-white font-medium ml-3 mt-1">
                    <FaPlus className="mt-1 mr-1" />
                    Add
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>{" "}
          <div className="w-full  flex flex-col items-center justify-center  mb-20">
            <div className="w-3/4 border-b-2">
              <h1 className=" text-3xl text-primary mt-4">Work Experience</h1>
              <div className="flex mt-4">
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
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    value={profileData.workExperience.company}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Location</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    value={profileData.workExperience.location}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">type of employee</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    value={profileData.workExperience.typeOfEmploy}
                  />
                </div>{" "}
                <div className="self-center col-2 mt-6 mb-4">
                  <h5 className="mb-2">position</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    value={profileData.workExperience.position}
                  />
                </div>{" "}
                <div className="self-center col-2 ml-4 mt-6 mb-4">
                  <h5 className="mb-2">Date</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    value={profileData.workExperience.date}
                  />
                </div>
              </div>
            </div>
            <div className="w-3/4 ">
              <div className="flex mt-4">
                <h1 className="mb-10 mt-4 text-xl text-primary">
                  Experience item
                </h1>
                <div className="mt-2 ml-6">
                  <button className="flex justify-center rounded-full border-2 bg-secondary  px-6 py-1 text-white font-medium ml-3 mt-1">
                    <FaPlus className="mt-1 mr-1" />
                    Add item
                  </button>
                </div>
              </div>
              <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">Company</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
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
                  <h5 className="mb-2">type of employee</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                  />
                </div>{" "}
                <div className="self-center col-2 mt-6 mb-4">
                  <h5 className="mb-2">position</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                  />
                </div>{" "}
                <div className="self-center col-2 ml-4 mt-6 mb-4">
                  <h5 className="mb-2">Date</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-lightgrey flex flex-col items-center justify-center">
            <div className="w-3/4 border-b-2 border-darkgrey">
              <h1 className=" text-3xl text-primary mt-4">Education</h1>
              <div className="flex mt-4">
                <h1 className="mb-10 mt-4 text-xl text-primary">
                  Education Item
                </h1>
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
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Major</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Date</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
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
              <div className=" row-2 grid grid-cols-3">
                <div className="self-center col-2 ">
                  <h5 className="mb-2">University / School</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    value={profileData.education.university}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Major</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    value={profileData.education.major}
                  />
                </div>
                <div className="self-center col-2 ml-4">
                  <h5 className="mb-2">Date</h5>
                  <input
                    className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                    name="address"
                    placeholder=""
                    onChange={handleChange}
                    value={profileData.education.date}
                  />
                </div>
              </div>{" "}
              <div className="w-full pt-12 mb-20">
                <div className="col-start-3 my-10 flex justify-end ">
                  <button
                    className="text-base rounded-full p-1 px-6   text-white font-semibold  bg-accent"
                    type="submit"
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
}

export default Edit;
