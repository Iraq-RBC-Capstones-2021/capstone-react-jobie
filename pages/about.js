import HowItWorks from "../components/Aboutus/HowItWorks";
import TeamProfile from "../components/Aboutus/TeamProfile";
import WhyChooseUs from "../components/Aboutus/WhyChooseUs";
import Header from "../components/Header";

import Rebaz from "../assets/TeamPic/Rebaz.jpg";
import Aya from "../assets/TeamPic/aya.jpg";
import Zahraa from "../assets/TeamPic/zahraa.jpg";
import Bnar from "../assets/TeamPic/bnar.jpg";
import Lara from "../assets/TeamPic/Lara.jpg";

import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

import { FaPenNib } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";

import HeadPic from "../assets/img_about.png";
import SectionPic from "../assets/img_about2.png";

const Sec1 = [
  {
    title: "Create your resume",
    desc: "creating your resume helps you apply faster and showcase your experience and skills to employers",
    logo: BsFillFileEarmarkTextFill,
  },
  {
    title: "Apply for a Job",
    desc: "Through our website you can find different kind of jobs from different tech categories and applying is made easy once you set up your resume",
    logo: BsFillPencilFill,
  },
  {
    title: "Get hired now",
    desc: "Once you apply for a job the employer will be able to see your resume and the position you applied for, which makes hiring easy",
    logo: FaHandshake,
  },
];

const Sec2 = [
  { title: "Posted", subtitle: "15k Vacancies", logo: FaPenNib },
  { title: "Saved", subtitle: "5k Vacancies", logo: FaBookmark },
  { title: "Submitted", subtitle: "12k CV", logo: FaFileUpload },
  { title: "Hired", subtitle: "8k Employees", logo: FaCheckDouble },
];

export default function aboutus() {
  return (
    <div className="bg-body">
      <Header title="Find Your Job" subtitle="Live Your Dream " img={HeadPic} />
      <div className=" px-4 lg:px-48 w-full py-10">
        <div className="grid grid-cols-3 w-full py-10">
          <div className="col-1">
            <img src={SectionPic.src} alt="section image" className="" />
          </div>

          <div className="col-2 col-span-2 px-6">
            <h1 className="text-4xl font-semibold mb-6">
              {" "}
              <span className="text-accent"> About</span>{" "}
              <span className="text-dark"> Us</span>{" "}
            </h1>
            <h2 className="text-justify">
              Our Mission is to build a bridge between professionals and
              employers those who need a job and the ones who needs someone to
              do the job for them this platform makes connections easier and
              faster, in a community where the tech sector is growing rapidly
              the demand for tech professionals is growing as well We strives to
              put job seekers first, giving them free access to search for jobs,
              post resumes, and research companies. Every day, we connect
              millions of people to new opportunities. but of course this also
              allows companies find the right candidate faster putting
              themselves out there and allowing job seekers to see their open
              positions.
            </h2>
          </div>
        </div>

        <h1 className="text-4xl font-semibold text-primary pt-20 pb-10">
          {" "}
          How it works
        </h1>
        <div className="grid grid-cols-3 py-6 gap-12 pb-20">
          <HowItWorks
            title={Sec1[0].title}
            desc={Sec1[0].desc}
            Logo={Sec1[0].logo}
          />
          <HowItWorks
            title={Sec1[1].title}
            desc={Sec1[1].desc}
            Logo={Sec1[1].logo}
          />
          <HowItWorks
            title={Sec1[2].title}
            desc={Sec1[2].desc}
            Logo={Sec1[2].logo}
          />
        </div>

        <h1 className="text-4xl font-semibold text-center pt-20 pb-16 ">
          {" "}
          <span className="text-primary">Why Choose </span>{" "}
          <span className="text-accent">Us?</span>
        </h1>
        <div className="grid grid-cols-4 gap-4 pb-20 ">
          <WhyChooseUs
            title={Sec2[0].title}
            subtitle={Sec2[0].subtitle}
            Logo={Sec2[0].logo}
          />
          <WhyChooseUs
            title={Sec2[1].title}
            subtitle={Sec2[1].subtitle}
            Logo={Sec2[1].logo}
          />
          <WhyChooseUs
            title={Sec2[2].title}
            subtitle={Sec2[2].subtitle}
            Logo={Sec2[2].logo}
          />
          <WhyChooseUs
            title={Sec2[3].title}
            subtitle={Sec2[3].subtitle}
            Logo={Sec2[3].logo}
          />
        </div>

        <h1 className="text-4xl font-semibold text-center pt-20 pb-10">
          {" "}
          <span className="text-primary"> Meet Our </span>{" "}
          <span className="text-accent">Team</span>
        </h1>
        <div className="flex justify-between pb-20">
          <TeamProfile name="Zahraa YH" pic={Zahraa} role="Web Developer" />
          <TeamProfile name="Rebaz Farid" pic={Rebaz} role="Web Developer" />
          <TeamProfile name="Lara Raoof " pic={Lara} role="Web Developer" />
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <TeamProfile name="Aya Abdulsalm " pic={Aya} role="Web Developer" />
          <TeamProfile name="Bnar Kamal" pic={Bnar} role="Web Developer" />
        </div>
      </div>
    </div>
  );
}
