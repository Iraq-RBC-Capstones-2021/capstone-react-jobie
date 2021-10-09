import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

const data = {
  id: "1",
  name: "Bruse Lee",
  skill: "Frontend Developer",
  img: "/../public/avatar.png",
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
    <div className="w-full bg-gray-300">
      <div className="container  p-12">
        <div className="flex item-center">
          <div className="mr-4">
            <Image
              alt="No Image"
              src={data.img}
              width={180}
              height={180}
              className="rounded-2xl"
            />
          </div>

          <div className="leading-5  w-screen">
            <h4 className="text-xl font-semibold mb-4">Bruse Lee</h4>
            <h5 className="">Frontend Developer</h5>

            <div className="  justify-start flex mt-8">
              <button className="bg-gray-500 w-40 text-white rounded-full py-1 px-6 m-2">
                Hire
              </button>
              <button className="bg-gray-200 w-40  text-gray rounded-full py-1 px-6 m-2 border-2 border-gray-500 hover:text-white hover:bg-gray-500 ">
                Downoad CV
              </button>
            </div>
          </div>
        </div>
        <div className="justify-between flex mt-10">
          <div className="justify-between flex">
            <AiFillLinkedin size={25} />
            <span>{data.social.linkedin}</span>
          </div>
          <div className="justify-between flex  ">
            <AiFillGithub size={25} /> <span>{data.social.github}</span>
          </div>
          <div className="justify-between flex">
            <AiFillFacebook size={25} /> <span>{data.social.facebook}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
