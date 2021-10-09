import Image from "next/image";
import { IoIosQuote } from "react-icons/io";

export default function CustomerCard() {
  const data = {
    id: "1",
    imgSrc: "/../public/avatar.png",
    name: "Sammy Lawson",
    position: "Creative Director, Amazon",
    feedback:
      "White dwarf a still more glorious dawn awaits tingling of the spine   emerged into consciousness Vangelis shores of the cosmic ocean. Tendrils of gossamer clouds kindling the energy hidden in matter   concept of the number one permanence.",
  };

  return (
    <div>
      <div className="bg-white text-gray-500 	rounded-xl p-8 shadow-lg m-4">
        <div className="flex items-center   border-b-4 border-gray-50 mb-5 p-8  ">
          <Image
            className="mr-8 w-20 rounded-full"
            src={data.imgSrc}
            alt="Picture of the author"
            width={100}
            height={100}
          />

          <div className="leading-5 ml-4">
            <h4 className="text-xl font-semibold">{data.name}</h4>
            <h5>{data.position}</h5>
          </div>
        </div>

        <div>{data.feedback}</div>
        <div className="flex justify-end w-full ">
          {" "}
          <IoIosQuote className="text-7xl  font-semibold text-right m-8" />{" "}
        </div>
      </div>
    </div>
  );
}
