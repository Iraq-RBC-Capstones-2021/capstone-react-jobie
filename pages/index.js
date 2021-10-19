import Head from "next/head";
import Header from "../components/Header";
import HeaderImage from "../assets/img_Home.png";
import Jobs from "../components/Home/Jobs";
import SearchButton from "../components/Home/SearchButton";
import Categories from "../components/Home/Categories";
import { FaDraftingCompass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import HomeTable from "../components/Home/HomeTable";

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  function bot() {}
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
        <div className="py-16">
          <Jobs title="Full-Time Jobs" />
        </div>
        <div>
          <h1 className="text-primary font-semibold pt-16 text-lg lg:text-2xl xl:text-4xl">
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
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light">
        <h1>hello</h1>
        <HomeTable />
      </div>
    </div>
  );
}
