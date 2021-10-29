import logo from "../assets/img_logo.png";
import { FcGoogle } from "react-icons/fc";
export default function LoginPopup() {
  return (
    <div className="border border-4 rounded-md shadow-md p-6  m-12 w-1/4">
      <div className="flex flex-col items-center ">
        <div className="text-center w-32 py-8">
          <img
            src={logo.src}
            alt="no Image"
            className="object-center w-full h-full "
          />
        </div>
        <div className="my-15 bg-googleBtnBlue rounded-sm flex items-center justify-between w-52 py-0.25 px-0.25 mb-9 ">
          <span className="bg-white p-2 m-1 border border-4 rounded-sm ">
            <FcGoogle size={27} />
          </span>

          <span className="text-white px-2 ">Sign in with Google</span>
        </div>
      </div>
    </div>
  );
}
