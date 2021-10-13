import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

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
};

export default function ProfileHeader() {
  return (
    <div className="bg-light grid justify-items-center">
      <div className="p-8 " style={{ width: "1080px" }}>
        <div className="flex item-center">
          <div className="mr-4">
            <Image
              alt="Profile Image"
              src={data.img}
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>

          <div className="leading-5  w-screen">
            <h1 className="text-4xl font-semibold mb-2"> {data.name}</h1>
            <h2 className="">{data.skill}</h2>

            <div className="  justify-start flex mt-2">
              <button className="bg-dark w-40 text-white rounded-full py-1 px-6 m-2">
                Hire
              </button>

              <button className="border-dark w-40 text-dark font-semibold rounded-full py-1 px-6 m-2 border-2">
                Download CV
              </button>
            </div>
          </div>
        </div>

        <div className="justify-between flex mt-10">
          <div className="justify-between flex items-center">
            <AiFillLinkedin size={30} /> &nbsp;
            {data.social.linkedin}
          </div>

          <div className="justify-between flex items-center  ">
            <AiFillGithub size={30} /> &nbsp;
            {data.social.github}
          </div>

          <div className="justify-between flex items-center">
            <AiFillFacebook size={30} /> &nbsp;
            {data.social.facebook}
          </div>
        </div>
      </div>
    </div>
  );
}
