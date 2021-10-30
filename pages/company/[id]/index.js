import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import CompanyProfileHeader from "../../../components/CompanyProfileHeader";
import JobListing from "../../../components/JobListing";
import jobsData from "../../../data.json";

import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../../../store/profiles/profileSlice";

function Company() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [companyProfile, setCompanyProfile] = useState([]);
  const router = useRouter();

  const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   if (state.auth.currentUser === router.query) {
  //     const profile = state.profile.profile;
  //     setCompanyProfile({ ...companyProfile, profile });
  //   } else {
  //     dispatch(fetchProfile(router.query));
  //     const profile = state.profile.visitedProfile;
  //     setCompanyProfile({ ...companyProfile, profile });
  //   }

  //   setJobs(jobsData.Posts.filter((e) => e.company_id === companyProfile.id));
  // }, [companyProfile.id, router.query, companyProfile, dispatch]);

  return (
    <div>
      <CompanyProfileHeader companyProfile={companyProfile} />
      <div className="mx-auto px-4 lg:px-48 w-full">
        <div className="pt-10">
          <p>
            {companyProfile.about
              ? companyProfile.about
              : "This company has not added an about text yet."}
          </p>
        </div>

        <div className="flex flex-row pt-12 gap-x-32">
          <div className="flex flex-col ">
            <h1 className="mb-4 font-semibold text-secondary">Contact</h1>
            <div className="inline-flex items-center mb-3 text-dark">
              {" "}
              <FaMapMarkerAlt />
              <p className="ml-2">{companyProfile.location}</p>
            </div>
            <div className="inline-flex items-center mb-3 text-dark">
              {" "}
              <FaEnvelope />
              <p className="ml-2">{companyProfile.email}</p>
            </div>
            <div className="inline-flex items-center mb-3 text-dark">
              {" "}
              <FaPhoneAlt />
              <p className="ml-2">{companyProfile.phone}</p>
            </div>
          </div>
          <div>
            <h1 className="mb-4 font-semibold text-secondary">Specialities</h1>
            <div className="flex gap-3 text-dark flex-wrap">
              {typeof companyProfile.specialties === "undefined"
                ? "No specialities were added"
                : companyProfile.specialties.map((item, key) => {
                    return (
                      <div
                        key={key}
                        className="inline-flex bg-lightblue py-0.5 px-3 rounded-lg"
                      >
                        {item}
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>

        <div className="pt-12">
          <h1 className="mb-4 font-semibold text-secondary">
            Offered Jobs: <span className="text-accent">{jobs.length}</span>
          </h1>
          <div className="space-y-3 pb-20">
            {jobs.map((job) => {
              return <JobListing key={job.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
