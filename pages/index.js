import Head from "next/head";
import HeaderImage from "../assets/img_Home.png";
import Avatar from "../public/img_avatar.png";

import Header from "../components/Header";
import JobTypeCard from "../components/Home/JobTypeCard";
import SearchButton from "../components/Home/SearchButton";
import Categories from "../components/Home/Categories";
import HomeTable from "../components/Home/HomeTable";
import CustomerCard from "../components/Home/CustomerCard";
import Partners from "../components/Partners";

import { FaDraftingCompass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { ImArrowRight } from "react-icons/im";

import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../store/jobs/jobsSlice";
import { wrapper } from "../store";

import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;

  const jobs = useSelector((state) => state.jobs.jobs);

  const Color1 = "borderColor1";
  const Color2 = "borderColor2";
  const Color3 = "borderColor3";
  return (
    <div className=" ">
      <Head>
        <title>{t.title}</title>
        <link rel="icon" href="/icon_Logo.ico" />
      </Head>
      <Header
        title={t.headerJobs}
        title2={t.AreListedHere}
        subtitle={t.Findyourdreamjobnow}
        light={false}
        img={HeaderImage}
      >
        <SearchButton />
      </Header>
      <div className="bg-body px-4 lg:px-48 w-full">
        <div className="flex  gap-x-10 justify-center py-16">
          <JobTypeCard
            title={t.FullTimeJobs}
            text={t.FirstJobCard}
            borderColor={Color1}
          />
          <JobTypeCard
            title={t.PartTime}
            text={t.PartTimeJobs}
            borderColor={Color2}
          />
          <JobTypeCard
            title={t.remote}
            text={t.remoteParagraph}
            borderColor={Color3}
          />
        </div>
        <div className="py-16">
          <h1 className="text-primary font-semibold text-lg lg:text-2xl xl:text-4xl">
            {" "}
            {t.explor}
          </h1>
          <div className="grid grid-rows-2 gap-10 py-16">
            <div className="flex  justify-around">
              <Categories
                Logo={FaDraftingCompass}
                title={t.design}
                subtitle={t.designNumbers}
                link=""
              />
              <Categories
                Logo={FaHtml5}
                title={t.fronEnd}
                subtitle={t.frontNumber}
                link=""
              />
              <Categories
                Logo={FaCog}
                title={t.backend}
                subtitle={t.backendNumber}
                link=""
              />
              <Categories
                Logo={FaCogs}
                title={t.webDev}
                subtitle={t.webDevNumber}
                link=""
              />
            </div>
            <div className="flex  justify-around">
              <Categories
                Logo={FaUserCog}
                title={t.network}
                subtitle={t.networkNumber}
                link=""
              />
              <Categories
                Logo={FaProjectDiagram}
                title={t.PM}
                subtitle={t.PMnumber}
                link=""
              />
              <Categories
                Logo={FaChartLine}
                title={t.data}
                subtitle={t.dataNumber}
                link=""
              />
              <a
                className="w-full h-full flex justify-center items-center flex-col "
                href=""
              >
                <h1 className="font-medium text-dark text-base lg:text-xl xl:text-2xl flex flex-row ">
                  {t.viewCatg}
                  <ImArrowRight className="mt-2 ml-2" />
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light px-4 lg:px-48 w-full py-16">
        <h1 className="text-primary font-semibold  pb-8 text-lg lg:text-2xl xl:text-4xl">
          {" "}
          {t.latestJobs}
        </h1>
        {jobs.length !== 0 ? <HomeTable jobs={jobs} /> : <p>{t.NoJobsFound}</p>}
      </div>

      <div className="bg-body px-4 lg:px-48 w-full py-20">
        <h1 className="text-primary font-semibold text-lg lg:text-2xl xl:text-4xl">
          {" "}
          {t.customers}
        </h1>
        <h2 className="text-primary font-semibold py-8 text-base lg:text-xl xl:text-2xl">
          {" "}
          {t.helped}
        </h2>
        <div className="flex flex-row gap-8 pb-12">
          <CustomerCard
            img={Avatar}
            name={t.aya}
            position={t.ayaPosition}
            feedback={t.feedback}
          />
          <CustomerCard
            img={Avatar}
            name={t.rebaz}
            position={t.ayaPosition}
            feedback={t.feedback}
          />
          <CustomerCard
            img={Avatar}
            name={t.zahraa}
            position={t.ayaPosition}
            feedback={t.feedback}
          />
        </div>
        <div className=" py-12">
          <h2 className="text-primary font-semibold py-12 text-base lg:text-xl xl:text-2xl">
            {" "}
            {t.companiesUsing}
          </h2>
          <Partners />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchJobs());
  }
);
