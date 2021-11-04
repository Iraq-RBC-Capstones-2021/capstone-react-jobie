import JobListing from "../components/JobListing";
import FilterSidebar from "../components/Filter/FilterSidebar";
import SearchButton from "../components/Home/SearchButton";
import Loading from "../components/Loading";

import { fetchJobs } from "../store/jobs/jobsSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompany } from "../store/tempStorage/tempStorageSlice";
import { useEffect } from "react";

function JobFinder() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const companies = useSelector((state) => state.tempStorage.company);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchCompany());
  }, [dispatch]);

  if (!jobs || !companies) return <Loading />;

  return (
    <div>
      <div className="bg-light">
        <div className="px-4 lg:px-48 w-full py-20 ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-primary text-4xl mb-1">Job Finder</h1>
            <h2 className="text-secondary">Find the best job for you here</h2>
            <div className="mt-5">
              <SearchButton />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="bg-lightgrey px-5 lg:pl-48 w-full py-10 pr-8">
          <FilterSidebar />
        </div>

        <div className="bg-body col-span-2">
          <div className="pl-8 lg:pr-48 w-full py-10 ">
            {" "}
            <div className="flex justify-between mb-5">
              <p>Total {jobs.length} Results</p>
              <p>Sort by: Newest</p>
            </div>
            {jobs.map((jobsData, index) => {
              // console.log(jobsData);
              const company = companies.filter(
                (item) => item.id === jobsData.company_id
              );

              return (
                <div key={index}>
                  <JobListing job={jobsData} company={company[0]} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobFinder;
