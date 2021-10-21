import { IoIosQuote } from "react-icons/io";

export default function CustomerCard({ img, name, position, feedback }) {
  return (
    <div className="bg-white text-cyan_blue 	rounded-xl p-4 shadow-lg lg:p-4 2xl:p-8">
      <div className="flex items-center border-b-4 border-gray-50 mb-5 p-2">
        <img
          className="mr-4 2xl:mr-8 w-16 rounded-full"
          src={img.src}
          alt="Picture of the author"
        />

        <div className="leading-5 ">
          <h4 className="md:text-base text-sm xl:text-xl 2xl:text-4xl text-black font-semibold ">
            {name}
          </h4>
          <h6 className="xl:text-base 2xl:text-xl">{position}</h6>
        </div>
      </div>

      <div className="text-justify 2xl:text-xl">{feedback}</div>

      <div className="flex justify-end ">
        <IoIosQuote className="text-5xl" />
      </div>
    </div>
  );
}
