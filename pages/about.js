import HowItWorks from "../components/Aboutus/HowItWorks";
import TeamProfile from "../components/Aboutus/TeamProfile";
import WhyChooseUs from "../components/Aboutus/WhyChooseUs";
import Header from "../components/Header";
import Partners from "../components/Partners";

import Rebaz from "../assets/TeamPic/Rebaz.jpg";
import Aya from "../assets/TeamPic/aya.jpg";
import Zahraa from "../assets/TeamPic/zahraa.jpg";
import Bnar from "../assets/TeamPic/bnar.jpg";
import Lara from "../assets/TeamPic/Lara.jpg";
import Wisam from "../assets/TeamPic/Wisam.jpg";

import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

import { FaPenNib } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";

import HeadPic from "../assets/img_about.png";
import SectionPic from "../assets/img_about2.png";

import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";

export default function Aboutus() {
  const Router = useRouter();
  const { locale } = Router;
  const t = locale === "ar" ? ar : en;

  const Sec1 = [
    {
      title: t.about.CreateResume,
      desc: t.about.CreateResumeDescription,
      logo: BsFillFileEarmarkTextFill,
    },
    {
      title: t.about.ApplyForJobs,
      desc: t.about.ApplyForJobsDescription,
      logo: BsFillPencilFill,
    },
    {
      title: t.about.GetHired,
      desc: t.about.GetHiredDescription,
      logo: FaHandshake,
    },
  ];

  const Sec2 = [
    {
      title: t.about.Posted,
      subtitle: t.about.PostedDescription,
      logo: FaPenNib,
    },
    {
      title: t.about.Saved,
      subtitle: t.about.SavedDescription,
      logo: FaBookmark,
    },
    {
      title: t.about.Submitted,
      subtitle: t.about.SubmittedDescription,
      logo: FaFileUpload,
    },
    {
      title: t.about.Hired,
      subtitle: t.about.HiredDescription,
      logo: FaCheckDouble,
    },
  ];

  return (
    <div className="bg-body">
      <Header
        title={t.about.HTitle}
        subtitle={t.about.HSubTitle}
        img={HeadPic}
      />
      <div className=" px-4 lg:px-48 w-full py-10">
        <div className="grid grid-cols-3 w-full py-10">
          <div className="col-1">
            <img src={SectionPic.src} alt="section image" className="" />
          </div>

          <div className="col-2 col-span-2 px-6">
            <h1 className="text-4xl xl:text-6xl font-semibold mb-6">
              {" "}
              <span className="text-accent"> {t.about.AboutUs1}</span>{" "}
              <span className="text-dark"> {t.about.AboutUs2}</span>{" "}
            </h1>
            <h2 className="text-justify">{t.about.AboutUsDescription}</h2>
          </div>
        </div>

        <h1 className="text-4xl xl:text-6xl font-semibold text-primary pt-20 pb-10">
          {" "}
          {t.about.HowItWorks}
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

        <h1 className="text-4xl xl:text-6xl font-semibold text-center pt-20 pb-16 ">
          {" "}
          <span className="text-primary">{t.about.WhyChooseUs1}</span>{" "}
          <span className="text-accent">{t.about.WhyChooseUs2}</span>
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

        <h1 className="text-4xl xl:text-6xl font-semibold text-center pt-20 pb-10">
          {" "}
          <span className="text-primary"> {t.about.MeetOurTeam1} </span>{" "}
          <span className="text-accent">{t.about.MeetOurTeam2}</span>
        </h1>
        <div className="flex justify-between pb-20">
          <TeamProfile
            name={t.about.Zahraa}
            pic={Zahraa}
            role={t.about.ZahraRole}
          />
          <TeamProfile
            name={t.about.Wisam}
            pic={Wisam}
            role={t.about.WisamRole}
          />
          <TeamProfile
            name={t.about.Rebaz}
            pic={Rebaz}
            role={t.about.RebazRole}
          />
        </div>
        <div className="grid grid-cols-3 place-items-center">
          <TeamProfile name={t.about.Aya} pic={Aya} role={t.about.AyaRole} />
          <TeamProfile name={t.about.Bnar} pic={Bnar} role={t.about.BnarRole} />
          <TeamProfile name={t.about.Lara} pic={Lara} role={t.about.LaraRole} />
        </div>

        <h1 className="text-4xl xl:text-6xl font-semibold text-center pt-20 pb-16 ">
          {" "}
          <span className="text-primary">
            {t.about.OurCollaborators1}{" "}
          </span>{" "}
          <span className="text-accent">{t.about.OurCollaborators2}</span>
        </h1>
        <Partners className="flex justify-around" />
      </div>
    </div>
  );
}
