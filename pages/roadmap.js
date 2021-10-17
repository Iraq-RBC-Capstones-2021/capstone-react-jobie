import Image from "next/image";
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
      <div className=" w-screen bg-light flex">
        <span className="w-1/2 p-28 ">
          <h1 className="font-bold text-dark text-5xl">Delveloper Roadmaps</h1>
          <p className="font-medium text-dark">
            Follow these roadmaps and become a hero in any path you choose!
          </p>
        </span>
        <span className="w-1/2   ">
          <Image
            src="/On the way-amico 1.png"
            alt="roadmap"
            width={500}
            height={500}
          />
        </span>
      </div>
      <div className="p-24 space-y-14 ">
        <h1 className="text-dark font-semi text-4xl">Web Development</h1>
        <span className="flex space-x-8  ">
          <RoadMapCard
            link={
              "https://www.figma.com/file/mSkq4oU6rdiiUcJxGauixk/Jobie?node-id=0%3A1"
            }
            icon={<AiFillHtml5 />}
            title="Frontend"
          />
          <RoadMapCard
            link={
              "https://www.figma.com/file/mSkq4oU6rdiiUcJxGauixk/Jobie?node-id=0%3A1"
            }
            icon={<FaCog />}
            title="Backend"
          />
          <RoadMapCard
            link={
              "https://www.figma.com/file/mSkq4oU6rdiiUcJxGauixk/Jobie?node-id=0%3A1"
            }
            icon={<FaCogs />}
            title="Fullstack"
          />
        </span>
        <h1 className="text-dark font-semi text-4xl ">Design</h1>
        <span className="flex space-x-8  ">
          <RoadMapCard
            link={
              "https://www.figma.com/file/mSkq4oU6rdiiUcJxGauixk/Jobie?node-id=0%3A1"
            }
            icon={<FaDraftingCompass />}
            title="UI/UX"
          />
          <RoadMapCard
            link={
              "https://www.figma.com/file/mSkq4oU6rdiiUcJxGauixk/Jobie?node-id=0%3A1"
            }
            icon={<FaPalette />}
            title="Graphic"
          />
          <RoadMapCard
            link={
              "https://www.figma.com/file/mSkq4oU6rdiiUcJxGauixk/Jobie?node-id=0%3A1"
            }
            icon={<FaSplotch />}
            title="Logo"
          />
        </span>
        <h1 className="text-dark font-semi text-4xl ">Network & Security</h1>
        <span className="flex space-x-8  ">
          <RoadMapCard
            link={
              "https://www.figma.com/file/mSkq4oU6rdiiUcJxGauixk/Jobie?node-id=0%3A1"
            }
            icon={<FaCodeBranch />}
            title="Network"
          />
          <RoadMapCard
            link={
              "https://www.figma.com/file/mSkq4oU6rdiiUcJxGauixk/Jobie?node-id=0%3A1"
            }
            icon={<FaShieldAlt />}
            title="Security"
          />
          <RoadMapCard
            link={
              "https://www.figma.com/file/mSkq4oU6rdiiUcJxGauixk/Jobie?node-id=0%3A1"
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
