import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";
import Loading from "./Loading";

export default function ProfileHeader({ profile }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;
  if (!profile) return <Loading />;
  else
    return (
      <div className="bg-light w-full">
        <div className="flex flex-col mx-auto px-4 lg:px-48 w-full pt-10 pb-8">
          <div className="flex ">
            <div className="h-32 w-32 sm:mb-0 mb-3 bg-lightblue rounded-2xl flex items-center justify-center">
              {profile?.img ? (
                <img
                  alt={profile.name}
                  src={profile.img}
                  className="w-28 h-28 object-cover rounded-2xl"
                />
              ) : (
                <div className="h-full border-primary bg-primary-light text-primary w-full rounded-full inline-flex items-center align-middle justify-center font-bold text-8xl">
                  <span>{profile.name ? profile.name.charAt(0) : "P"}</span>
                </div>
              )}
            </div>

            <div className="flex-auto sm:ml-5 justify-evenly">
              <h1 className="text-3xl font-bold text-primary mt-2">
                {profile?.firstName
                  ? `${profile.firstName} ${profile?.lastName}`
                  : profile.name}{" "}
              </h1>
              <h2 className="text-lg text-secondary font-medium">
                {profile?.title}
              </h2>

              <div className=" flex-auto mt-4">
                <button className="bg-dark text-white rounded-full p-0.5 px-6 mr-2 font-medium border-2 border-dark w-36">
                  {t.ProfileView.Hire}
                </button>

                <a
                  href={profile?.cvFile}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="border-dark text-dark font-medium rounded-full p-0.5 px-6 mr-2 border-2 "
                >
                  {t.ProfileView.DownloadCV}
                </a>
              </div>
            </div>
          </div>

          <div className="justify-between flex mt-8">
            <div className="justify-between flex items-center text-primary">
              <AiFillLinkedin size={30} />
              <p className=" ml-2 hover:underline">
                <a
                  href={profile?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>

            <div className="justify-between flex items-center text-primary ">
              <AiFillGithub size={30} />
              <p className=" ml-2 hover:underline">
                <a
                  href={profile?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>

            <div className="justify-between flex items-center text-primary">
              <AiFillFacebook size={30} />
              <p className=" ml-2 hover:underline">
                <a
                  href={profile?.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
