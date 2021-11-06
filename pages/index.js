import { useEffect } from "react";
import Head from "next/head";
import HeaderImage from "../assets/img_Home.png";
import Avatar from "../public/img_avatar.png";
import AvatarMale from "../public/AvatarMale.jpg";

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
import Loading from "../components/Loading";

import { useSelector, useDispatch } from "react-redux";
import { fetchJobs } from "../store/jobs/jobsSlice";

import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;

  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const Color1 = "borderColor1";
  const Color2 = "borderColor2";
  const Color3 = "borderColor3";

  if (!jobs) return <Loading />;
  else
    return (
      <div className=" ">
        <Head>
          <title>{t.title}</title>
          <link rel="icon" href="/icon_Logo.ico" />
        </Head>
        <Header
          title={t.home.HTitle1}
          title2={t.home.HTitle2}
          subtitle={t.home.HSubTitle}
          light={false}
          img={HeaderImage}
        >
          <SearchButton />
        </Header>
        <div className="bg-body px-4 lg:px-48 w-full">
          <div className="flex  gap-x-10 justify-center py-16">
            <JobTypeCard
              title={t.home.FullTimeJobs}
              text={t.home.FullTimeJobsDescription}
              borderColor={Color1}
            />
            <JobTypeCard
              title={t.home.PartTimeJobs}
              text={t.home.PartTimeJobsDescription}
              borderColor={Color2}
            />
            <JobTypeCard
              title={t.home.RemotesJobs}
              text={t.home.RemotesJobsDescription}
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
                  title={t.home.Design}
                  subtitle={t.home.DesignNumbers}
                  link=""
                />
                <Categories
                  Logo={FaHtml5}
                  title={t.home.Frontend}
                  subtitle={t.home.FrontendNumbers}
                  link=""
                />
                <Categories
                  Logo={FaCog}
                  title={t.home.Backend}
                  subtitle={t.home.BackendNumbers}
                  link=""
                />
                <Categories
                  Logo={FaCogs}
                  title={t.home.WebDeveloper}
                  subtitle={t.home.WebDeveloperNumbers}
                  link=""
                />
              </div>
              <div className="flex  justify-around">
                <Categories
                  Logo={FaUserCog}
                  title={t.home.Network}
                  subtitle={t.home.NetworkNumbers}
                  link=""
                />
                <Categories
                  Logo={FaProjectDiagram}
                  title={t.home.ProjectManager}
                  subtitle={t.home.ProjectManagerNumbers}
                  link=""
                />
                <Categories
                  Logo={FaChartLine}
                  title={t.home.DataAnalyzer}
                  subtitle={t.home.DataAnalyzerNumbers}
                  link=""
                />
                <a
                  className="w-full h-full flex justify-center items-center flex-col "
                  href=""
                >
                  <h1 className="font-medium text-dark text-base lg:text-xl xl:text-2xl flex flex-row ">
                    {t.home.ViewAllCategories}
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
            {t.home.LatestJobs}
          </h1>
          {jobs.length !== 0 ? <HomeTable jobs={jobs} /> : <p>No jobs found</p>}
        </div>

        <div className="bg-body px-4 lg:px-48 w-full py-20">
          <h1 className="text-primary font-semibold text-lg lg:text-2xl xl:text-4xl">
            {" "}
            {t.home.OurCustomers}
          </h1>
          <h2 className="text-primary font-semibold py-8 text-base lg:text-xl xl:text-2xl">
            {" "}
            {t.home.OurCustomersDescription}
          </h2>
          <div className="flex flex-row gap-8 pb-12">
            <CustomerCard
              img={Avatar}
              name={t.home.Lara}
              position={t.home.LaraRole}
              feedback={t.home.LaraFeedback}
            />
            <CustomerCard
              img={AvatarMale}
              name={t.home.Rebaz}
              position={t.home.RebazRole}
              feedback={t.home.RebazFeedback}
            />
            <CustomerCard
              img={Avatar}
              name={t.home.Zahraa}
              position={t.home.ZahraRole}
              feedback={t.home.ZahraFeedback}
            />
          </div>
          <div className=" py-12">
            <h2 className="text-primary font-semibold py-12 text-base lg:text-xl xl:text-2xl">
              {" "}
              {t.home.UsingOurServices}
            </h2>
            <Partners />
          </div>
        </div>
      </div>
    );
}
