import pic from "../assets/img_notfound.png";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex  px-4 lg:px-48 py-10  w-full mx-auto items-center">
      <div className="w-3/6 mt-12  inline-block ">
        <h1 className="text-5xl text-primary pb-11">Oops!</h1>
        <p className="text-3xl  text-dark pb-12">
          We can’t seem to find the page you’re looking for.
        </p>
        <Link href="/">
          <a className="text-2xl rounded-full bg-accent py-2 px-11 text-white">
            Back to Home
          </a>
        </Link>
      </div>

      <div className="w-3/6 ">
        <img alt="404cat" src={pic.src} className="w-max" />
      </div>
    </div>
  );
}
