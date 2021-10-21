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

export default function Home() {
  const Color1 = "borderColor1";
  const Color2 = "borderColor2";
  const Color3 = "borderColor3";
  return (
    <div className=" ">
      <Head>
        <title>Jobie</title>
        <link rel="icon" href="/icon_Logo.ico" />
      </Head>
      <Header
        title="10,254 Jobs"
        title2="Are Listed Here!"
        subtitle="Find your dream job now"
        light={false}
        img={HeaderImage}
      >
        <SearchButton />
      </Header>
      <div className="bg-body px-4 lg:px-48 w-full">
        <div className="flex  gap-x-10 justify-center py-16">
          <JobTypeCard
            title="Full-Time Jobs"
            text="if you're set on you're career and want to work full time, then a full time job is just the one for you, clicking here will show you all the current full time jobs in our platform"
            borderColor={Color1}
          />
          <JobTypeCard
            title="Part Time Jobs"
            text="if you're a student or can't spend to much time on work, then a part time job is what you're looking for. click here and we'll show you all the part-time job offers"
            borderColor={Color2}
          />
          <JobTypeCard
            title="Remote Jobs"
            text="if you prefer working from home, with no constraints to a specific place then a remote job is a perfect fit and we've got plenty of that, click and let us show you all the available positions"
            borderColor={Color3}
          />
        </div>
        <div className="py-16">
          <h1 className="text-primary font-semibold text-lg lg:text-2xl xl:text-4xl">
            {" "}
            Explore by categories
          </h1>
          <div className="grid grid-rows-2 gap-10 py-16">
            <div className="flex  justify-around">
              <Categories
                Logo={FaDraftingCompass}
                title="Design"
                subtitle="67 Job Vacancy"
                link=""
              />
              <Categories
                Logo={FaHtml5}
                title="Frontend"
                subtitle="180 Job Vacancy"
                link=""
              />
              <Categories
                Logo={FaCog}
                title="Backend"
                subtitle="78 Job Vacancy"
                link=""
              />
              <Categories
                Logo={FaCogs}
                title="Web Developer"
                subtitle="233 Job Vacancy"
                link=""
              />
            </div>
            <div className="flex  justify-around">
              <Categories
                Logo={FaUserCog}
                title="Network"
                subtitle="53 Job Vacancy"
                link=""
              />
              <Categories
                Logo={FaProjectDiagram}
                title="Project Manager"
                subtitle="137 Job Vacancy"
                link=""
              />
              <Categories
                Logo={FaChartLine}
                title="Data"
                subtitle="164 Job Vacancy"
                link=""
              />
              <a
                className="w-full h-full flex justify-center items-center flex-col "
                href=""
              >
                <h1 className="font-medium text-dark text-base lg:text-xl xl:text-2xl flex flex-row ">
                  View all Categories <ImArrowRight className="mt-2 ml-2" />
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light px-4 lg:px-48 w-full py-16">
        <h1 className="text-primary font-semibold  pb-8 text-lg lg:text-2xl xl:text-4xl">
          {" "}
          Latest Jobs
        </h1>
        <HomeTable />
      </div>

      <div className="bg-body px-4 lg:px-48 w-full py-20">
        <h1 className="text-primary font-semibold text-lg lg:text-2xl xl:text-4xl">
          {" "}
          Our Customers
        </h1>
        <h2 className="text-primary font-semibold py-8 text-base lg:text-xl xl:text-2xl">
          {" "}
          We’ve helped 2,568 users to find their dream job.
        </h2>
        <div className="flex justify-between pb-12">
          <CustomerCard
            img={Avatar}
            name="Aya S."
            position="CEO Co-Founder, Jobie"
            feedback="Jobie is always true to its internal mission statement: Putting the job seeker first. The mission does not waiver, and all decisions are made to create a better world with job seekers who feel that they can make good decisions for their future."
          />
          <CustomerCard
            img={Avatar}
            name="Rebaz Farid"
            position="CEO Co-Founder, Jobie"
            feedback="Jobie is always true to its internal mission statement: Putting the job seeker first. The mission does not waiver, and all decisions are made to create a better world with job seekers who feel that they can make good decisions for their future."
          />
          <CustomerCard
            img={Avatar}
            name="Zahraa YH"
            position="CEO Co-Founder, Jobie"
            feedback="Jobie is always true to its internal mission statement: Putting the job seeker first. The mission does not waiver, and all decisions are made to create a better world with job seekers who feel that they can make good decisions for their future."
          />
        </div>
        <div className=" py-12">
          <h2 className="text-primary font-semibold py-12 text-base lg:text-xl xl:text-2xl">
            {" "}
            More than 20,000 companies are using our service to hire their
            employees.
          </h2>
          <Partners />
        </div>
      </div>
    </div>
  );
}
