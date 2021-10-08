import logo from "../public/logo.svg";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <div className="text-white grid justify-items-center bg-footer lg:h-80 sm:h-auto  w-full  ">
        <div className="lg:w-9/12 sm:w-12/12 grid justify-items-center m-auto lg:grid-cols-2 sm:grid-cols-1">
          <div className="lg:col-span-1   mt-3">
            <Image src={logo} alt="Logo" />
            <h1 className="w-96 mt-3">
              Realm of the galaxies across the centuries the carbon in our apple
              pies vanquish the impossible another world venture. Dream of the
              minds eye muse about home.
            </h1>
          </div>
          <div className="grid grid-cols-3  mt-12">
            <div className="">
              <div className="mb-3 text-xl ">
                <h3>Pages</h3>
              </div>
              <div>
                <a>Home</a>
              </div>
              <div>
                <a>About</a>
              </div>
              <div>
                <a>RoadMaps</a>
              </div>
              <div>
                <a>Jobs</a>
              </div>
              <div>
                <a>Contact</a>
              </div>
              <div>
                <a>Search</a>
              </div>
            </div>
            <div className="">
              <div className="mb-3 text-xl ">
                <h3>Most cetegories</h3>
              </div>
              <div>
                <a>Web Developer</a>
              </div>
              <div>
                <a>Graphic Designer</a>
              </div>
              <div>
                <a>Translator</a>
              </div>
              <div>
                <a>Teacher</a>
              </div>
            </div>
            <div className="mr-8">
              <div className="mb-3 text-xl  ">
                <h3>Our Services</h3>
              </div>
              <div>
                <a>search for job</a>
              </div>
              <div>
                <a>contact the company</a>
              </div>
              <div>
                <a>send proposal</a>
              </div>
              <div>
                <a>build your Resume</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white grid justify-items-center bg-darkFooter h-20 w-full ">
        <div className="grid justify-items-center grid-cols-2  w-full m-auto ">
          <div className="grid justify-items-center grid-cols-4 sm:w-96 lg:w-96 ">
            <div className="grid justify-items-center h-10 w-10 border-2 rounded-full hover:border-gray-400 ">
              <FaFacebookF className="text-3xl m-auto hover:text-gray-400" />
            </div>
            <div className="grid justify-items-center h-10 w-10 border-2 rounded-full hover:border-gray-400 ">
              <AiOutlineInstagram className="text-3xl m-auto hover:text-gray-400" />
            </div>
            <div className="grid justify-items-center h-10 w-10 border-2 rounded-full hover:border-gray-400 ">
              <AiOutlineTwitter className="text-3xl m-auto hover:text-gray-400" />
            </div>
            <div className="grid justify-items-center h-10 w-10 border-2 rounded-full hover:border-gray-400 ">
              <AiOutlineBehance className="text-3xl m-auto hover:text-gray-400" />
            </div>
          </div>
          <div>&copy; {new Date().getFullYear()} JOBIE</div>
        </div>
      </div>
    </>
  );
}
