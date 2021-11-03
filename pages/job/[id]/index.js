import { useState, useEffect } from "react";
import { sendUserData } from "../../../config/emailConfig";
import PositionHeader from "../../../components/PositionHeader";
import PositionSummary from "../../../components/PositionSummary";
import JobListing from "../../../components/JobListing";
import ProposalsCard from "../../../components/ProposalsCard";
import { VscArrowRight } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../../../store/jobs/jobsSlice";
import { fetchCompany } from "../../../store/tempStorage/tempStorageSlice";
import { useRouter } from "next/router";
import Loading from "../../../components/Loading";

// when applying the following data needs to be saved and passed down to sendUserData
const data = {
  username: "john",
  useremail: "sahrayarub@yahoo.de",
  userlink: "link",
  companyemail: "rebaz415@gmail.com",
  companyname: "google",
};

function Job() {
  //fetch data
  const jobs = useSelector((state) => state.jobs.jobs);
  const companies = useSelector((state) => state.tempStorage.company);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchCompany());
  }, [dispatch]);

  const jobData = jobs
    ? jobs.filter((item) => item?.id === router.query.id)
    : [];
  const job = jobData[0];
  const company = companies.filter((item) => item?.id === job?.company_id);
  const similarJobs = jobs.filter(
    (item) => item?.category === job?.category && item?.id !== router.query.id
  );

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
    <>
      {job && company && auth ? (
        <div>
          <PositionHeader job={job} company={company[0]} />
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
                  {auth.currentUser === company[0]?.id && (
                    <li
                      className={`px-8 text-xl text-primary font-semibold py-2 rounded-t  ${
                        activeTab === "proposals" && "bg-body"
                      }`}
                    >
                      <a id="proposals" href="#proposals" onClick={handleTabs}>
                        Proposals
                      </a>
                    </li>
                  )}
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
                        <p className="text-justify">{job.description}</p>
                      </div>

                      <div>
                        <h1 className="text-primary font-bold mb-5">
                          Responsibilities Include:
                        </h1>
                        <p className="text-justify">{job.responsibilities}</p>
                      </div>

                      <div>
                        <h1 className="text-primary font-bold mb-5">
                          Background & Experience:
                        </h1>
                        <p className="text-justify">{job.experience}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-end">
                        <PositionSummary job={job} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <button
                      className=" bg-accent hover:bg-secondary text-white rounded-full text-lg inline-flex py-1 px-10 self-end items-center my-auto space-x-2"
                      onClick={(e) => sendUserData(e, data)}
                    >
                      <span>Apply Now</span> <VscArrowRight />
                    </button>
                  </div>

                  {/* Similar Jobs */}
                  <div className="mt-20">
                    <h1 className="text-primary font-bold mb-5">
                      Similar Jobs
                    </h1>
                    <div className="space-y-3 ">
                      {similarJobs.map((item, index) => {
                        return <JobListing key={job.id} job={item} />;
                      })}
                    </div>
                  </div>
                </div>

                {/* Proposals Tab */}
                {auth.currentUser === company[0]?.id && (
                  <div
                    id="proposals"
                    className={` ${activeTab !== "proposals" && "hidden"}`}
                  >
                    <h1 className="text-primary font-bold mb-5">Proposals</h1>
                    <ProposalsCard />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Job;
