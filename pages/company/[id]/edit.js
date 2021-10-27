import Select from "react-select";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
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
  return (
    <>
      {" "}
      <form className="form">
        <div className="bg-body px-4 lg:px-48 w-full pt-10">
          <div className="border-b-2 grid grid-cols-3">
            <div className="col-1 col-span-2">
              <h1 className="text-dark font-semibold text-4xl">
                Google / Edit Profile
              </h1>
              <h4 className="mb-10"> Set up your company’s profile page</h4>
            </div>
            <div className="col-start-3 my-10 flex justify-end">
              <button
                className="text-base rounded-full p-1 px-6   text-white font-semibold  bg-accent"
                type="submit"
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
                      <div className="flex-auto text-gray-500 mt-4">
                        <button className="rounded-full bg-secondary px-6 py-1 text-white font-medium mr-3">
                          Upload photo
                        </button>

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
                  name="Company Name"
                  placeholder="Google"
                />
              </div>
              <div className="self-center col-1 ml-4">
                <h5 className="mb-2">Company Centegory</h5>
                <Select
                  className=" w-full h-11 rounded-lg border-grey border-2"
                  name="location"
                  required
                  options={category}
                  isMulti
                  placeholder="Select the cetegories that applies"
                />
              </div>
              <div className="self-center col-2 ml-4">
                <h5 className="mb-2">WebSite URL</h5>
                <input
                  className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                  name="address"
                  placeholder="https://www.google.com/"
                />
              </div>
            </div>
            <div className="pb-20 mt-10">
              <div className="self-center col-1 col-span-2">
                <h5 className="mb-2">About the company</h5>
                <textarea className="w-full h-40 mt-2 border-grey border-2" />
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
                  name="address"
                  placeholder="as sulaymaniyah, Iraq"
                />
              </div>

              <div className="self-center col-2 ml-4">
                <h5 className="mb-2">Email</h5>
                <input
                  className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                  name="address"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="self-center col-2 ml-4">
                <h5 className="mb-2">Phone</h5>
                <input
                  className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                  name="address"
                  placeholder="+96477055555"
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
                />
              </div>

              <div className="self-center col-2 ml-4">
                <h5 className="mb-2">Github</h5>
                <input
                  className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                  name="address"
                  placeholder="Github"
                />
              </div>
              <div className="self-center col-2 ml-4">
                <h5 className="mb-2">Facebook</h5>
                <input
                  className="h-11 w-full rounded-lg border-grey border-2 pl-2"
                  name="address"
                  placeholder="Facebook"
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
    </>
  );
}

export default Edit;
