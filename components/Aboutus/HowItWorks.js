import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

export default function HowItWorks({ logo, title, desc }) {
  return (
    <div>
      <div style={{ width: "350px", height: "250px" }}>
        <BsFillFileEarmarkTextFill className="h-16 w-16 rounded-full bg-lightblue py-4" />
        <h1 className="font-medium text-dark my-2">create your resume</h1>
        <h3 className="text-footer">
          Ship of the imagination star stuff harvesting star light descended
          from astronomers finite but
        </h3>
      </div>

      <div style={{ width: "350px", height: "250px" }}>
        <BsFillPencilFill className="h-16 w-16 rounded-full bg-lightblue py-4" />
        <h1 className="font-medium text-dark my-2">create your resume</h1>
        <h3 className="text-footer">
          Ship of the imagination star stuff harvesting star light descended
          from astronomers finite but
        </h3>
      </div>

      <div style={{ width: "350px", height: "250px" }}>
        <FaHandshake className="h-16 w-16 rounded-full bg-lightblue py-4" />
        <h1 className="font-medium text-dark my-2">create your resume</h1>
        <h3 className="text-footer">
          Ship of the imagination star stuff harvesting star light descended
          from astronomers finite but
        </h3>
      </div>
    </div>
  );
}
