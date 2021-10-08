import { FaListUl } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";

export default function PositionSummary() {
  return (
    <div className=" bg-light h-auto w-80">
      <div className="ml-5 grid grid-cols-2 w-54 mt-5 mb-6">
        <div className="">
          <BsCurrencyDollar className="text-4xl text-accent" />
        </div>
        <div className="-ml-20">
          <h1 className="text-xl text-secondary font-bold">offered salary</h1>
          <h1 className="text-base">$45K-$180K</h1>
        </div>
      </div>
      <div className="ml-5 grid grid-cols-2 w-54 mt-5 mb-6">
        <div className="">
          <FaUserAlt className="text-4xl text-accent" />
        </div>
        <div className="-ml-20">
          <h1 className="text-xl text-secondary font-bold">Gender</h1>
          <h1 className="text-base">Any</h1>
        </div>
      </div>
      <div className="ml-5 grid grid-cols-2 w-54 mt-5 mb-6">
        <div className="">
          <FaLightbulb className="text-4xl text-accent" />
        </div>
        <div className="-ml-20">
          <h1 className="text-xl text-secondary font-bold">Experience</h1>
          <h1 className="text-base">+2 Years</h1>
        </div>
      </div>
      <div className="ml-5 grid grid-cols-2 w-54 mt-5 mb-6">
        <div className="">
          <FaLayerGroup className="text-4xl text-accent" />
        </div>
        <div className="-ml-20">
          <h1 className="text-xl text-secondary font-bold">Work Level </h1>
          <h1 className="text-base"> senior</h1>
        </div>
      </div>
      <div className="ml-5 grid grid-cols-2 w-54 mt-5 mb-6">
        <div className="">
          <FaListUl className="text-4xl text-accent" />
        </div>
        <div className="-ml-20">
          <h1 className="text-xl text-secondary font-bold">Category</h1>
          <h1 className="text-base">Web development</h1>
        </div>
      </div>
    </div>
  );
}
