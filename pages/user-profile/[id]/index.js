import { FaBriefcase } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import ProfileHeader from "../../../components/HeaderProfile";

const data = {
  id: "1",
  name: "Bruse Lee",
  skill: "Frontend Developer",
  img: "/../public/img_avatar.png",
  contact: {
    hireLink: "",
    downloadCvBtn: "",
  },

  social: {
    linkedin: "linkedin/bruse-lee",
    github: "bruse-lee",
    facebook: "bruse-lee",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",

  contacts: {
    email: "bruseLee@gmail.com",
    location: "sulaimnay",
    phone: "07704554678",
  },
  skills: ["html", "css"],
  experience: [
    {
      name: "Senior front-end developer",
      company: "apple",
      location: "loss angles",
      job_type: "Full Time",
      date: "April 20, 2020 - July 12, 2021",
    },
    {
      name: "Full Stack web developer",
      company: "avesta",
      location: "sulaimany",
      job_type: "Part Time",
      date: "20/march/2020",
    },
    {
      name: "Full Stack web developer",
      company: "avesta",
      location: "sulaimany",
      job_type: "Part Time",
      date: "20/march/2020",
    },
  ],
  education: [
    {
      name: "Master In Software Enginerring",
      inistitute: "Massechustes Institute of Technology",
      date: "20/march/2020",
    },
    {
      name: "Master In Software Enginerring",
      inistitute: "Massechustes Institute of Technology",
      date: "20/march/2020",
    },
    {
      name: "Master In Software Enginerring",
      inistitute: "Massechustes Institute of Technology",
      date: "20/march/2020",
    },
    {
      name: "Master In Software Enginerring",
      inistitute: "Massechustes Institute of Technology",
      date: "20/march/2020",
    },
  ],
};

export default function UserProfile(props) {
  return (
    <div>
      <ProfileHeader data={data} />
      <div className="bg-body">
        <div className="mx-auto px-4 lg:px-48 w-full py-10">
          <p className=" text-lg text-dark">{data.description}</p>
          <div className="grid grid-cols-3 gap-4 pt-12">
            <div className="space-y-3">
              <h1 className="text-dark mb-3 font-semibold">Contact</h1>
              <div className=" flex items-center">
                <div className="mr-2">
                  <FaMapMarkerAlt className=" text-dark" />
                </div>
                <div>
                  <h4 className="text-dark ">{data.contacts.location}</h4>
                </div>
              </div>
              <div className=" flex items-center">
                <div className="mr-2">
                  <FaEnvelope className=" text-dark" />
                </div>
                <div>
                  <h4 className="text-dark">{data.contacts.email}</h4>
                </div>
              </div>
              <div className=" flex items-center">
                <div className="mr-2">
                  <FaPhoneAlt className=" text-dark" />
                </div>
                <div>
                  <h4 className="text-dark">{data.contacts.phone}</h4>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              {" "}
              <h1 className="text-dark mb-3 font-semibold">Skills</h1>
              <div className="flex flex-wrap flex-row space-x-3 ">
                {data.skills.map((skill, index) => {
                  return (
                    <div
                      className="bg-lightblue text-dark rounded-lg py-0.5 px-3 "
                      key={index}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lightgrey">
        <div className="mx-auto px-4 lg:px-48 w-full py-10">
          <h1 className=" mb-6 font-bold text-3xl text-secondary">
            Work Experience
          </h1>
          {data.experience.map((experience, index) => {
            return (
              <div key={index}>
                <div className="grid grid-cols-4 gap-y-4 ">
                  <div className="col-span-3">
                    <h3 className="text-secondary">{experience.name}</h3>
                    <div className="flex space-x-5 mt-2 ">
                      <p className="flex text-darkgrey">
                        <FaBriefcase className="mr-2 mt-1" />
                        {experience.company}
                      </p>
                      <p className="flex text-darkgrey">
                        <FaMapMarkerAlt className="mr-2 mt-1" />
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center flex-col">
                    <h3 className="text-accent">{experience.job_type}</h3>
                    <p className="text-darkgrey">{experience.date}</p>
                  </div>
                </div>

                {index === data.experience.length - 1 ? (
                  ""
                ) : (
                  <div className="flex justify-center my-5 ">
                    <hr className="w-full border-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto px-4 lg:px-48 w-full py-10">
        <h1 className="  mb-6 font-bold text-3xl text-secondary">Education</h1>
        {data.education.map((education, index) => {
          return (
            <div key={index}>
              <div className="grid grid-cols-4 gap-y-4 ">
                <div className="col-span-3">
                  <h3 className="text-secondary">{education.name}</h3>
                  <div className="mt-2">
                    <p className="flex text-darkgrey">
                      <FaBriefcase className="mr-2 mt-1" />
                      {education.inistitute}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-darkgrey">{education.date}</p>
                </div>
              </div>
              {index === data.education.length - 1 ? (
                ""
              ) : (
                <div className="flex justify-center my-5 ">
                  <hr className="w-full border-gray-300" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
