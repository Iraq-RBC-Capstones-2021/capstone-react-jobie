import Header from "../components/Header";
import Img from "../assets/img_roads.png";
import {
  FaCog,
  FaCogs,
  FaDraftingCompass,
  FaPalette,
  FaSplotch,
  FaCodeBranch,
  FaShieldAlt,
  FaCloudUploadAlt,
} from "react-icons/fa";

import RoadMapCard from "../components/RoadMapCard.js";
import { AiFillHtml5 } from "react-icons/ai";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
const RoadMap = () => {
  const Router = useRouter();
  const { locale } = Router;
  const t = locale === "ar" ? ar : en;

  return (
    <main>
      <Header
        title={t.roadmap.Htitle}
        subtitle={t.roadmap.HSubTitle}
        subtitle2=""
        img={Img}
        align=""
      />
      <div className="bg-body p-24 space-y-14 px-4 lg:px-48 w-full">
        <h1 className="text-dark font-semibold text-4xl">
          {t.roadmap.WebDevelopment}
        </h1>
        <span className="flex justify-between  ">
          <RoadMapCard
            link={"https://roadmap.sh/frontend"}
            icon={<AiFillHtml5 />}
            title={t.roadmap.Frontend}
          />
          <RoadMapCard
            link={"https://roadmap.sh/backend"}
            icon={<FaCog />}
            title={t.roadmap.Backend}
          />
          <RoadMapCard
            link={
              "https://www.crampete.com/blogs/road-map-to-full-stack-web-development/"
            }
            icon={<FaCogs />}
            title={t.roadmap.FullStack}
          />
        </span>

        <h1 className="text-dark font-semibold text-4xl ">
          {t.roadmap.Design}
        </h1>
        <span className="flex justify-between  ">
          <RoadMapCard
            link={
              "https://bootcamp.uxdesign.cc/the-self-taught-ui-ux-designer-roadmap-in-2021-aa0f5b62cecb"
            }
            icon={<FaDraftingCompass />}
            title={t.roadmap.UIUX}
          />
          <RoadMapCard
            link={"http://www.cadlearner.com/graphic-design-roadmap-for-2021/"}
            icon={<FaPalette />}
            title={t.roadmap.Graphic}
          />
          <RoadMapCard
            link={
              "https://www.behance.net/gallery/93233577/Logo-design-Roadmap"
            }
            icon={<FaSplotch />}
            title={t.roadmap.Logo}
          />
        </span>

        <h1 className="text-dark font-semibold text-4xl ">
          {t.roadmap.NetworkSecurity}
        </h1>
        <span className="flex justify-between  ">
          <RoadMapCard
            link={
              "https://www.itpro.com/business-strategy/careers-training/357384/your-roadmap-to-becoming-a-computer-network-architect"
            }
            icon={<FaCodeBranch />}
            title={t.roadmap.Network}
          />
          <RoadMapCard
            link={
              "https://www.comptia.org/content/it-careers-path-roadmap/cybersecurity-specialist"
            }
            icon={<FaShieldAlt />}
            title={t.roadmap.Security}
          />
          <RoadMapCard
            link={
              "https://novacontext.com/roadmap-to-cloud-computing-the-planning-phase/index.html"
            }
            icon={<FaCloudUploadAlt />}
            title={t.roadmap.Cloud}
          />
        </span>
      </div>
    </main>
  );
};

export default RoadMap;
