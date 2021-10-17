import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

const data = {
  id: "1",
  name: "Bruse Lee",
  skill: "Frontend Developer",
  img: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
  contact: {
    hireLink: "",
    downloadCvBtn: "",
  },

  social: {
    linkedin: "linkedin/bruse-lee",
    github: "bruse-lee",
    facebook: "bruse-lee",
  },
};

export default function ProfileHeader() {
  return (
    <div className="bg-light w-full">
      <div className="flex flex-col mx-auto px-4 lg:px-48 w-full pt-10 pb-8">
        <div className="flex ">
          <div className="h-32 w-32 sm:mb-0 mb-3 bg-lightblue rounded-2xl flex items-center justify-center">
            {data.img ? (
              <img
                alt="Profile Image"
                src={data.img}
                className="w-28 h-28 object-cover rounded-2xl"
              />
            ) : (
              <div className="h-full border-primary bg-primary-light text-primary w-full rounded-full inline-flex items-center align-middle justify-center font-bold text-8xl">
                <span>{data.name.charAt(0)}</span>
              </div>
            )}
          </div>

          <div className="flex-auto sm:ml-5 justify-evenly">
            <h1 className="text-3xl font-bold text-primary mt-2">
              {" "}
              {data.name}
            </h1>
            <h2 className="text-lg text-secondary font-medium">{data.skill}</h2>

            <div className=" flex-auto mt-4">
              <button className="bg-dark text-white rounded-full p-0.5 px-6 mr-2 font-medium border-2 border-dark w-36">
                Hire
              </button>

              <button className="border-dark text-dark font-medium rounded-full p-0.5 px-6 mr-2 border-2 ">
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="justify-between flex mt-8">
          <div className="justify-between flex items-center text-primary">
            <AiFillLinkedin size={30} /> &nbsp;
            {data.social.linkedin}
          </div>

          <div className="justify-between flex items-center text-primary ">
            <AiFillGithub size={30} /> &nbsp;
            {data.social.github}
          </div>

          <div className="justify-between flex items-center text-primary">
            <AiFillFacebook size={30} /> &nbsp;
            {data.social.facebook}
          </div>
        </div>
      </div>
    </div>
  );
}
