import { FaPenNib } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaFileUpload } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <div className="bg-dark flex flex-row gap-2 p-10">
      <div
        className="bg-white flex flex-row p-10 rounded-xl"
        style={{ width: "300px", height: "150px" }}
      >
        <FaPenNib className="h-16 w-16 rounded-full bg-lightblue py-4" />
        <div className="ml-4">
          <h2 className="text-footer">15K+ vacancies</h2>
          <h1 className="text-dark">Posted</h1>
        </div>
      </div>

      <div
        className="bg-white flex flex-row p-10 rounded-xl"
        style={{ width: "300px", height: "150px" }}
      >
        <FaBookmark className="h-16 w-16 rounded-full bg-lightblue py-4" />
        <div className="ml-4">
          <h2 className="text-footer">15K+ vacancies</h2>
          <h1 className="text-dark">Posted</h1>
        </div>
      </div>

      <div
        className="bg-white flex flex-row p-10 rounded-xl"
        style={{ width: "300px", height: "150px" }}
      >
        <FaFileUpload className="h-16 w-16 rounded-full bg-lightblue py-4" />
        <div className="ml-4">
          <h2 className="text-footer">15K+ vacancies</h2>
          <h1 className="text-dark">Posted</h1>
        </div>
      </div>

      <div
        className="bg-white flex flex-row p-10 rounded-xl"
        style={{ width: "300px", height: "150px" }}
      >
        <FaCheckDouble className="h-16 w-16 rounded-full bg-lightblue py-4" />
        <div className="ml-4">
          <h2 className="text-footer">15K+ vacancies</h2>
          <h1 className="text-dark">Posted</h1>
        </div>
      </div>
    </div>
  );
}
