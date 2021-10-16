import { FaBriefcase } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
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
      date: "20/march/2020",
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
    <div className="mx-auto">
      <ProfileHeader data={data} />
      <div className="grid justify-items-center bg-gray-50">
        <p className="w-8/12 m-6 text-lg text-dark">{data.description}</p>
        <div className="flex  flex-row justify-around  mb-20 mt-10  w-5/6">
          <div className="flex flex-col space-y-2">
            <h1 className="text-dark mb-3 font-bold">Contacts</h1>
            <div className=" flex  ">
              <div className="mr-1">
                <AiOutlineMail className=" text-2xl text-dark" />
              </div>
              <div>
                <h4 className="text-dark">{data.contacts.email}</h4>
              </div>
            </div>
            <div className=" flex ">
              <div className="mr-1">
                <GoLocation className=" text-2xl text-dark" />
              </div>
              <div>
                <h4 className="text-dark">{data.contacts.location}</h4>
              </div>
            </div>
            <div className=" flex ">
              <div className="mr-1">
                <AiFillPhone className=" text-2xl text-dark" />
              </div>
              <div>
                <h4 className="text-dark">{data.contacts.phone}</h4>
              </div>
            </div>
          </div>
          <div className="col-span-2 w-96">
            <h1 className="text-dark mb-3 font-bold">Skills</h1>
            <div className="flex flex-wrap flex-row space-x-3 ">
              {data.skills.map((skill, index) => {
                return (
                  <div
                    className="bg-light text-dark rounded-lg  p-1 mb-2"
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
      <div className="bg-lightgrey">
        <h1 className="ml-48 pt-16 mb-6 font-bold text-3xl text-secondary">
          Work Experience
        </h1>
        {data.experience.map((experience, index) => {
          return (
            <div className="pb-10" key={index}>
              <div className="flex justify-around gap-x-72  w-11/12">
                <div>
                  <h3 className="text-secondary">{experience.name}</h3>
                  <div className="flex justify-between mt-2">
                    <p className="flex text-darkgrey">
                      <FaBriefcase className="mr-2 mt-1" />
                      {experience.company}
                    </p>
                    <p className="flex text-darkgrey">
                      <GoLocation className="mr-2 mt-1" />
                      {experience.location}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-accent">{experience.job_type}</h3>

                  <p className="text-darkgrey">{experience.date}</p>
                </div>
              </div>
              {index === data.experience.length - 1 ? (
                ""
              ) : (
                <div className="flex justify-center mt-10 ">
                  <hr className="w-3/4 border-darkgrey" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="">
        <h1 className="ml-48 pt-16 mb-6 font-bold text-3xl text-secondary">
          Education
        </h1>
        {data.education.map((education, index) => {
          return (
            <div className="pb-10" key={index}>
              <div className="flex justify-around gap-x-60  w-11/12 ">
                <div>
                  <h3 className="text-secondary">{education.name}</h3>
                  <div className="mt-2">
                    <p className="flex text-darkgrey">
                      <FaBriefcase className="mr-2 mt-1" />
                      {education.inistitute}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-accent">During</h3>

                  <p className="text-darkgrey">{education.date}</p>
                </div>
              </div>
              {index === data.education.length - 1 ? (
                ""
              ) : (
                <div className="flex justify-center mt-10 ">
                  <hr className="w-3/4 border-darkgrey" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
