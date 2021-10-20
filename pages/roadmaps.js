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
const RoadMap = () => {
  return (
    <main>
      <Header
        title="Developer Roadmaps"
        subtitle="Follow these roadmaps "
        subtitle2="become a hero in any path you choose!"
        img={Img}
      />
      <div className="bg-body p-24 space-y-14 px-4 lg:px-48 w-full">
        <h1 className="text-dark font-semibold text-4xl">Web Development</h1>
        <span className="flex justify-between  ">
          <RoadMapCard
            link={"https://roadmap.sh/frontend"}
            icon={<AiFillHtml5 />}
            title="Frontend"
          />
          <RoadMapCard
            link={"https://roadmap.sh/backend"}
            icon={<FaCog />}
            title="Backend"
          />
          <RoadMapCard
            link={
              "https://www.crampete.com/blogs/road-map-to-full-stack-web-development/"
            }
            icon={<FaCogs />}
            title="Fullstack"
          />
        </span>

        <h1 className="text-dark font-semibold text-4xl ">Design</h1>
        <span className="flex justify-between  ">
          <RoadMapCard
            link={
              "https://bootcamp.uxdesign.cc/the-self-taught-ui-ux-designer-roadmap-in-2021-aa0f5b62cecb"
            }
            icon={<FaDraftingCompass />}
            title="UI/UX"
          />
          <RoadMapCard
            link={"http://www.cadlearner.com/graphic-design-roadmap-for-2021/"}
            icon={<FaPalette />}
            title="Graphic"
          />
          <RoadMapCard
            link={
              "https://www.behance.net/gallery/93233577/Logo-design-Roadmap"
            }
            icon={<FaSplotch />}
            title="Logo"
          />
        </span>

        <h1 className="text-dark font-semibold text-4xl ">
          Network & Security
        </h1>
        <span className="flex justify-between  ">
          <RoadMapCard
            link={
              "https://www.itpro.com/business-strategy/careers-training/357384/your-roadmap-to-becoming-a-computer-network-architect"
            }
            icon={<FaCodeBranch />}
            title="Network"
          />
          <RoadMapCard
            link={
              "https://www.comptia.org/content/it-careers-path-roadmap/cybersecurity-specialist"
            }
            icon={<FaShieldAlt />}
            title="Security"
          />
          <RoadMapCard
            link={
              "https://novacontext.com/roadmap-to-cloud-computing-the-planning-phase/index.html"
            }
            icon={<FaCloudUploadAlt />}
            title="Cloud"
          />
        </span>
      </div>
    </main>
  );
};

export default RoadMap;
