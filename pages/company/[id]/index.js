import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import CompanyProfileHeader from "../../../components/CompanyProfileHeader";
import JobListing from "../../../components/JobListing";

import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProfile } from "../../../store/tempStorage/tempStorageSlice";
import { fetchJobs } from "../../../store/jobs/jobsSlice";
import Loading from "../../../components/Loading";

function Company() {
  const company = useSelector((state) => state.tempStorage.profile);
  const jobs = useSelector((state) => state.jobs.jobs);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProfile(router.query.id));
    dispatch(fetchJobs());
  }, [dispatch, router.query.id]);

  if (!company || !jobs) return <Loading />;

  const companyJobs = jobs.filter((job) => job.company_id === company.id);

  return (
    <div>
      <CompanyProfileHeader companyProfile={company} />
      <div className="mx-auto px-4 lg:px-48 w-full">
        <div className="pt-10">
          <p>
            {company.about
              ? company.about
              : "This company has not added an about text yet."}
          </p>
        </div>

        <div className="flex flex-row pt-12 gap-x-32">
          <div className="flex flex-col ">
            <h1 className="mb-4 font-semibold text-secondary">Contact</h1>
            <div className="inline-flex items-center mb-3 text-dark">
              {" "}
              <FaMapMarkerAlt />
              <p className="ml-2">{company.location}</p>
            </div>
            <div className="inline-flex items-center mb-3 text-dark">
              {" "}
              <FaEnvelope />
              <p className="ml-2">{company.email}</p>
            </div>
            <div className="inline-flex items-center mb-3 text-dark">
              {" "}
              <FaPhoneAlt />
              <p className="ml-2">{company.phone}</p>
            </div>
          </div>
          <div>
            <h1 className="mb-4 font-semibold text-secondary">Specialities</h1>
            <div className="flex gap-3 text-dark flex-wrap">
              {typeof company.specialities === "undefined"
                ? "No specialities were added"
                : company.specialities.split(",").map((item, key) => {
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
            Offered Jobs:{" "}
            <span className="text-accent">{companyJobs.length}</span>
          </h1>
          <div className="space-y-3 pb-20">
            {companyJobs.map((job) => {
              return <JobListing key={job.id} job={job} company={company} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
