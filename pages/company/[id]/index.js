import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import CompanyProfileHeader from "../../../components/CompanyProfileHeader";
import JobListing from "../../../components/JobListing";
import jobsData from "../../../data.json";

const data = {
  id: 1,
  name: "Google",
  category: "Internet",
  website: "https://www.google.com/",
  logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
  img: "",
  about:
    "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
  contact: {
    location: {
      country: "United States",
      city: " Mountain View, California",
    },
    email: "contact@google.com",
    phone: "650 253-0000",
  },
  specialties: ["search", "mobile", "technology", "hardware", "software"],
  social: {
    linkedin: "linkedin/google",
    github: "google",
    facebook: "google",
  },
};

function Company() {
  const [jobs, setJobs] = useState([]);
  const router = useRouter();
  const { companyId } = router.query;

  useEffect(() => {
    setJobs(jobsData.Posts.filter((e) => e.company_id === data.id));
  }, []);

  return (
    <div>
      <CompanyProfileHeader />
      <div className="mx-auto px-4 lg:px-48 w-full">
        <div className="pt-10">
          <p>{data.about}</p>
        </div>

        <div className="flex flex-row pt-12 gap-x-32">
          <div className="flex flex-col ">
            <h1 className="mb-4 font-semibold text-secondary">Contact</h1>
            <div className="inline-flex items-center mb-3 text-dark">
              {" "}
              <FaMapMarkerAlt />
              <p className="ml-2">
                {data.contact.location.country},{data.contact.location.city}
              </p>
            </div>
            <div className="inline-flex items-center mb-3 text-dark">
              {" "}
              <FaEnvelope />
              <p className="ml-2">{data.contact.email}</p>
            </div>
            <div className="inline-flex items-center mb-3 text-dark">
              {" "}
              <FaPhoneAlt />
              <p className="ml-2">{data.contact.phone}</p>
            </div>
          </div>
          <div>
            <h1 className="mb-4 font-semibold text-secondary">Specialities</h1>
            <div className="flex gap-3 text-dark flex-wrap">
              {data.specialties.map((item, key) => {
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
