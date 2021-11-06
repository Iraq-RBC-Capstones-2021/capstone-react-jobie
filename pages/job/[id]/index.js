import { useState, useEffect } from "react";
import { sendUserData } from "../../../config/emailConfig";
import PositionHeader from "../../../components/PositionHeader";
import PositionSummary from "../../../components/PositionSummary";
import JobListing from "../../../components/JobListing";
import ProposalsCard from "../../../components/ProposalsCard";
import { VscArrowRight } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../../../store/jobs/jobsSlice";
import {
  fetchCompany,
  fetchAppliedProfiles,
} from "../../../store/tempStorage/tempStorageSlice";
import { useRouter } from "next/router";
import Loading from "../../../components/Loading";
import { notifyError } from "../../../store/notification/notificationSlice";
import { applyJob } from "../../../store/profiles/profileSlice";
import en from "../../../locales/en";
import ar from "../../../locales/ar";

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
  const profiles = useSelector((state) => state.tempStorage.applied_profiles);
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();
  const router = useRouter();
  let applied = false;
  let belongsToCompany = false;
  const Router = useRouter;
  const { locale } = Router;
  const t = locale === "ar" ? ar : en;

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchCompany());
    dispatch(fetchAppliedProfiles());
  }, [dispatch]);

  const jobData = jobs
    ? jobs.filter((item) => item?.id === router.query.id)
    : [];
  const job = jobData[0];
  const company = companies.filter((item) => item?.id === job?.company_id);
  const similarJobs = jobs.filter(
    (item) => item?.category === job?.category && item?.id !== router.query.id
  );

  const appliedProfiles = profiles
    ? profiles.filter(
        (item) =>
          item?.applied_jobs && item?.applied_jobs.includes(router.query.id)
      )
    : [];

  // check if user applied for this job
  if (auth?.currentUser && profile.hasOwnProperty("applied_jobs")) {
    if (profile.applied_jobs.includes(router.query.id)) {
      applied = true;
    } else {
      applied = false;
    }
  }

  // check if job belongs to company
  if (auth?.currentUser === job?.company_id) {
    belongsToCompany = true;
  }

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

  const handleApplyJob = (e) => {
    if (auth?.currentUser) {
      const data = {
        profile: profile,
        jobId: job.id,
        company_name: company[0].name,
        company_email: company[0].email,
      };
      dispatch(applyJob(data));
    } else {
      dispatch(
        notifyError({
          text: "Please log in to apply to a job.",
          action: "Cancel",
        })
      );
    }
  };

  if (!job || !company || !auth || !profile) return <Loading />;
  else
    return (
      <div>
        <PositionHeader
          job={job}
          company={company[0]}
          handleApplyJob={handleApplyJob}
          applied={applied}
          belongsToCompany={belongsToCompany}
          currentUser={auth?.currentUser}
          is_company={profile?.is_company}
          ApplyNow={t.JobView.ApplyNow}
          ViewAllJobs={t.JobView.ViewAllJobs}
        />
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
                    {t.JobView.Details}
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
                        {t.JobView.JobDescription}
                      </h1>
                      <p className="text-justify">{job.description}</p>
                    </div>

                    <div>
                      <h1 className="text-primary font-bold mb-5">
                        {t.JobView.Responsibilities}
                      </h1>
                      <p className="text-justify">{job.responsibilities}</p>
                    </div>

                    <div>
                      <h1 className="text-primary font-bold mb-5">
                        {t.JobView.Background}
                      </h1>
                      <p className="text-justify">{job.experience}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-end">
                      <PositionSummary
                        job={job}
                        offeredSalary={t.JobView.OfferedSalary}
                        gender={t.JobView.Gender}
                        experience={t.JobView.Experience}
                        workLevel={t.JobView.WorkLevel}
                        cetegory={t.JobView.Category}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  {/* check if logged in */}
                  {auth?.currentUser && profile?.is_company === true ? (
                    belongsToCompany ? (
                      <button
                        className=" bg-accent hover:bg-secondary  text-white rounded-full text-lg inline-flex py-1 px-10 self-end items-center my-auto space-x-2"
                        disabled
                      >
                        <span>{t.JobView.edit}</span>
                      </button>
                    ) : (
                      ""
                    )
                  ) : applied ? (
                    <button
                      className=" bg-gray-500 text-white rounded-full text-lg inline-flex py-1 px-10 self-end items-center my-auto space-x-2"
                      disabled
                    >
                      <span>{t.JobView.AlreadyAplly}</span>
                    </button>
                  ) : (
                    <button
                      className=" bg-accent hover:bg-secondary text-white rounded-full text-lg inline-flex py-1 px-10 self-end items-center my-auto space-x-2"
                      onClick={handleApplyJob}
                    >
                      <span>{t.JobView.ApplyNow}</span> <VscArrowRight />
                    </button>
                  )}
                </div>

                {/* Similar Jobs */}
                <div className="mt-20">
                  <h1 className="text-primary font-bold mb-5">
                    {t.JobView.SimilarJobs}
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
                  {appliedProfiles &&
                    appliedProfiles.map((profile) => {
                      return (
                        <ProposalsCard key={profile.id} profile={profile} />
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Job;
