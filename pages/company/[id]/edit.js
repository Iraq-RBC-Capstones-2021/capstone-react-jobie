import Select from "react-select";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addprofile,
  fetchprofiles,
} from "../../../store/profiles/profileSlice";
import { wrapper } from "../../../store";
import { useRouter } from "next/router";
import { onSnapshot, collection, addDoc, firebase } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { storage } from "../../../config/dbConfig";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;
  const profiles = useSelector((state) => state.profiles);
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
  const [formdata, setFormData] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleupload = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const dispatch = useDispatch();
  const addData = (e) => {
    e.preventDefault();
    if (file) {
      const uploadtask = storage.ref(`files/${file.name}`).put(file);
      uploadtask.on(
        "state_changed",
        (snapshot) => {
          console.log("load");
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("/files")
            .child(file.name)
            .getDownloadURL()
            .then((url) => {
              setFormData({
                ...formdata,
                ["image"]: url,
              });
              console.log(url);
              dispatch(addprofile(formdata));
            });
        }
      );
    }
  };

  useEffect(() => {
    dispatch(fetchprofiles(id));
  }, [dispatch, id]);

  if (profiles.profiles[0]) {
    const company_info = profiles.profiles[0].newProfile;
    return (
      <>
        {" "}
        <div>
          <form className="form">
            <div className="bg-body px-4 lg:px-48 w-full pt-10">
              <div className="border-b-2 grid grid-cols-3">
                <div className="col-1 col-span-2">
                  <h1 className="text-dark font-semibold text-4xl">
                    {company_info.company_name} / Edit Profile
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
                    <img
                      src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                      alt="logo"
                    />
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
                                    </h1>{" "}
                                    <input
                                      type="file"
                                      className="w-full h-20 mt-2 border-grey border-2 bg-dark"
                                      style={{ display: "none" }}
                                      onChange={handleupload}
                                    />
                                  </div>
                                </label>
                              </div>
                            </div>
                            <div>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border-2 border-secondary px-6 py-1 text-secondary font-medium "
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
              <div className="w-full">
                <h1 className="mb-10 text-3xl text-primary">basic info</h1>
                <div className=" row-2 grid grid-cols-3">
                  <div className="self-center col-2 ">
                    <h5 className="mb-2">Company Name</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="company_name"
                      placeholder="test"
                      onChange={handleChange}
                      value={company_info.company_name}
                    />
                  </div>
                  <div className="self-center col-1 ml-4">
                    <h5 className="mb-2">Company Centegory</h5>
                    <Select
                      className=" w-full h-11 rounded-lg border-grey border-2"
                      name="category"
                      required
                      options={category}
                      isMulti
                      instanceId="name"
                      placeholder="Choose all that applies"
                      onChange={(e) => {
                        setFormData({
                          ...formdata,
                          ["cetegories"]: e,
                        });
                      }}
                      value={company_info.cetegories}
                    />
                  </div>
                  <div className="self-center col-2 ml-4">
                    <h5 className="mb-2">WebSite URL</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="website_url"
                      onChange={handleChange}
                      value={company_info.website_url}
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
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="location"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="self-center col-2 ml-4">
                    <h5 className="mb-2">Email</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="self-center col-2 ml-4">
                    <h5 className="mb-2">Phone</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="phone"
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </div>

                  <div className="self-center col-2 ml-4">
                    <h5 className="mb-2">Github</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="github"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="self-center col-2 ml-4">
                    <h5 className="mb-2">Facebook</h5>
                    <input
                      className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                      name="facebook"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-lightgrey flex flex-col items-center justify-center h-96">
              <div className="w-3/4 mt-20">
                <h1 className="mb-10 text-3xl text-primary">Specialities</h1>
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
        </div>
      </>
    );
  }
  return <>loading</>;
}

/*export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchprofiles("Iw6Df6nY6VtShhrhD3iY"));
  }
);*/
