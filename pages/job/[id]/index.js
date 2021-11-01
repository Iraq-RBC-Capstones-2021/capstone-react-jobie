import { useState } from "react";
import {sendUserData} from "../../../config/emailConfig"
import PositionHeader from "../../../components/PositionHeader";
import PositionSummary from "../../../components/PositionSummary";
import JobListing from "../../../components/JobListing";
import ProposalsCard from "../../../components/ProposalsCard";
import { VscArrowRight } from "react-icons/vsc";

import allJobs from "../../../data.json";

// when applying the following data needs to be saved and passed down to sendUserData
const data = {
  username: "john",
  useremail: "sahrayarub@yahoo.de",
  userlink: "link",
  companyemail: "rebaz415@gmail.com",
  companyname: "google"
};

const job = {
  id: 1,
  company_id: 1,
  Title: "Web Developer",
  Location: {
    Country: "iraq",
    City: "sulaimany",
    street: "salim Street",
  },
  Type: "Full Time ",
  Category: "Developer",
  "Work-Level": "advance",
  Experience: "3 years",
  Gender: "female",
  Salary: {
    From: 1500,
    To: 2000,
  },
  Info: {
    Description:
      "We are looking for a highly skilled Full-Stack Web Developer who is comfortable with both front and back-end programming.",
    Responsibilities:
      "Responsible for developing and designing front end web architecture, ensuring the responsiveness of applications The developers will be required to see out a project from conception to the final product, requiring good organizational skills and attention to detail.",
    background: "",
  },
  Date: {
    start: "2021-1-11",
    End: "2023-1-4",
  },
};

const similarJobs = allJobs.Posts.filter(
  (item) => item.Category === job.Category
);

function Job() {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabs = (e) => {
    if (activeTab !== e.target.id) {
      if (activeTab === "details") {
        setActiveTab("proposals");
      } else {
        setActiveTab("details");
      }
    }
  };

  return (
    <div>
      <PositionHeader />
      <div className="bg-light">
        <div className="px-4 lg:px-48 w-full">
          <div className="rounded mx-auto">
            <ul className="inline-flex w-full ">
              <li
                className={`px-8 text-xl text-primary font-semibold py-2 rounded-t  ${
                  activeTab === "details" && "bg-body"
                }`}
              >
                <a id="details" href="#details" onClick={handleTabs}>
                  Details
                </a>
              </li>
              <li
                className={`px-8 text-xl text-primary font-semibold py-2 rounded-t  ${
                  activeTab === "proposals" && "bg-body"
                }`}
              >
                <a id="proposals" href="#proposals" onClick={handleTabs}>
                  Proposals
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-body">
        <div className="lg:px-48 w-full">
          <div id="tab-contents" className="py-10">
            <div
              id="details"
              className={`${activeTab !== "details" && "hidden"}`}
            >
              <div className="grid  gap-x-10 grid-flow-col auto-cols-auto">
                <div className=" space-y-10">
                  <div>
                    <h1 className="text-primary font-bold mb-5">
                      Job Description
                    </h1>
                    <p className="text-justify">{job.Info.Description}</p>
                  </div>

                  <div>
                    <h1 className="text-primary font-bold mb-5">
                      Responsibilities Include:
                    </h1>
                    <p className="text-justify">{job.Info.Responsibilities}</p>
                  </div>

                  <div>
                    <h1 className="text-primary font-bold mb-5">
                      Background & Experience:
                    </h1>
                    <p className="text-justify">{job.Info.Responsibilities}</p>
                  </div>
                </div>
                <div>
                  <div className="flex bg-primary justify-end">
                    <PositionSummary />
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button 
                  className=" bg-accent hover:bg-secondary text-white rounded-full text-lg inline-flex py-1 px-10 self-end items-center my-auto space-x-2"
                  onClick={(e) => sendUserData(e,data)}
                >
                  <span>Apply Now</span> <VscArrowRight />
                </button>
              </div>

              {/* Similar Jobs */}
              <div className="mt-20">
                <h1 className="text-primary font-bold mb-5">Similar Jobs</h1>
                <div className="space-y-3 ">
                  {similarJobs.map((item, index) => {
                    return <JobListing key={index} />;
                  })}
                </div>
              </div>
            </div>

            {/* Proposals Tab */}
            <div
              id="proposals"
              className={` ${activeTab !== "proposals" && "hidden"}`}
            >
              <h1 className="text-primary font-bold mb-5">Proposals</h1>
              <ProposalsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
