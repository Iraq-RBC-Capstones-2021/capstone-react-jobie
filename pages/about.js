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

export default function aboutus() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;

  const Sec1 = [
    {
      title: t.title1,
      desc: t.title2,
      logo: BsFillFileEarmarkTextFill,
    },
    {
      title: t.title3,
      desc: t.title4,
      logo: BsFillPencilFill,
    },
    {
      title: t.title5,
      desc: t.title6,
      logo: FaHandshake,
    },
  ];

  const Sec2 = [
    { title: t.posted, subtitle: t.vaccine, logo: FaPenNib },
    { title: t.saved, subtitle: t.vaccine2, logo: FaBookmark },
    { title: t.submitted, subtitle: t.cv, logo: FaFileUpload },
    { title: t.hired, subtitle: t.noHired, logo: FaCheckDouble },
  ];

  return (
    <div className="bg-body">
      <Header title={t.aboutHeader} subtitle={t.aboutSub} img={HeadPic} />
      <div className=" px-4 lg:px-48 w-full py-10">
        <div className="grid grid-cols-3 w-full py-10">
          <div className="col-1">
            <img src={SectionPic.src} alt="section image" className="" />
          </div>

          <div className="col-2 col-span-2 px-6">
            <h1 className="text-4xl xl:text-6xl font-semibold mb-6">
              {" "}
              <span className="text-accent"> {t.about}</span>{" "}
              <span className="text-dark"> {t.us}</span>{" "}
            </h1>
            <h2 className="text-justify">{t.mission}</h2>
          </div>
        </div>

        <h1 className="text-4xl xl:text-6xl font-semibold text-primary pt-20 pb-10">
          {" "}
          {t.howWork}
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
          <span className="text-primary">{t.choose}</span>{" "}
          <span className="text-accent">{t.us}</span>
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
          <span className="text-primary"> {t.meet} </span>{" "}
          <span className="text-accent">{t.team}</span>
        </h1>
        <div className="flex justify-between pb-20">
          <TeamProfile name={t.zahraa} pic={Zahraa} role={t.webDev} />
          <TeamProfile name={t.rebaz} pic={Rebaz} role={t.webDev} />
          <TeamProfile name={t.lara} pic={Lara} role={t.webDev} />
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <TeamProfile name={t.aya} pic={Aya} role={t.webDev} />
          <TeamProfile name={t.banar} pic={Bnar} role={t.webDev} />
        </div>

        <h1 className="text-4xl xl:text-6xl font-semibold text-center pt-20 pb-16 ">
          {" "}
          <span className="text-primary">{t.our} </span>{" "}
          <span className="text-accent">{t.Collaborators}</span>
        </h1>
        <Partners className="flex justify-around" />
      </div>
    </div>
  );
}
