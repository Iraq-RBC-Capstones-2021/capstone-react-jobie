import JobListing from "../components/JobListing";
import FilterSidebar from "../components/Filter/FilterSidebar";
import jobData from "../data.json";
import SearchButton from "../components/Home/SearchButton";

import { wrapper } from "../store";

import { fetchJobs } from "../store/jobs/jobsSlice";

import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, fetchProfilebyid } from "../store/profiles/profileSlice";
import { fetchCompany } from "../store/tempStorage/tempStorageSlice";
import { useEffect } from "react";

function jobFinder() {
  const jobs = useSelector((state) => state.jobs.jobs);

  /* const companyProfile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  console.log(companyProfile.profile.length);
  if (companyProfile.profile.length > 0) {
    console.log(companyProfile);
  }
  useEffect(() => {
    dispatch(fetchProfilebyid("Ggqi8qPhtGQrgMd3ormioYfhWyC2"));
  }, [dispatch]);*/

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
              return (
                <div key={index}>
                  <JobListing jobs={jobsData} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(fetchJobs());
});

export default jobFinder;
