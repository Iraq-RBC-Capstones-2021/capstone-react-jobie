import btnGoogle from "../assets/btnGoogle.png";
import logo from "../assets/img_logo.png";
import signInWithGoogle from "../assets/Signup wit Google.png";
export default function LoginPopup() {
  return (
    <div className="border border-4 rounded-md shadow-md p-2  m-12 w-2/4">
      <div className="flex flex-col items-center ">
        <div className="mt-8 text-center w-48">
          <img
            src={logo.src}
            alt="no Image"
            className="object-center w-full h-full "
          />
        </div>
        <div className="my-15">
          <img className="w-full" src={signInWithGoogle.src} alt="noImage" />
        </div>
      </div>
    </div>
  );
}
