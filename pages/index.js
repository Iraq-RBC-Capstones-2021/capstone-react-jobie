import Image from "next/image";
import pic from "../public/contact us.png";
export default function Home() {
  return (
    <div
      className="pt-6 pr-6 pl-6 pb-6"
      style={{ backgroundColor: "#F8F8F8", color: "#34495E" }}
    >
      <div className="pb-6">
        <Image alt="no image" src={pic} layout="responsive" />
      </div>

      <div className="grid grid-cols-2 ">
        <div className="col-1">
          <h1 className="font-medium text-5xl text-center pb-8">
            {" "}
            Get in Touch
          </h1>

          <form action="" className="form my-6 relative pl-28">
            <div className="flex space-x-5 mt-3">
              <input
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="border p-2  w-1/2 focus:border-blue-500"
                style={{ borderColor: "#34495E" }}
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Last Name"
                className="border p-2 w-1/2"
                style={{ borderColor: "#34495E" }}
              />
            </div>

            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="border p-2 w-full mt-3"
              style={{ borderColor: "#34495E" }}
            />
            <textarea
              name=""
              id=""
              cols="10"
              rows="3"
              placeholder="How can we help?"
              className="border p-2 mt-3 w-full"
              style={{ borderColor: "#34495E" }}
            ></textarea>
            <p className="font-bold text-sm mt-3">GDPR Agreement *</p>

            <div className="flex items-baseline space-x-2 mt-2">
              <input type="checkbox" name="" id="" className="inline-block" />
              <p className=" text-sm">
                I consent to having this website store my submitted information
                so they can respond to my inquiry.
              </p>
            </div>

            <input
              type="submit"
              value="Submit"
              className="rounded-full w-full mt-6  text-white font-semibold p-3"
              style={{ backgroundColor: "#EC7063" }}
            />
          </form>
        </div>

        <div className="col-2">
          <h1
            className="font-medium text-5xl text-center pb-8"
            style={{ color: "#34495E" }}
          >
            Contact Us
          </h1>

          <div
            className="mt-6 ml-32 mr-10"
            style={{ backgroundColor: "#EBEDEF" }}
          >
            hello
          </div>
        </div>
      </div>
    </div>
  );
}
