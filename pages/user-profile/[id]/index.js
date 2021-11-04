import { useEffect } from "react";
import { FaBriefcase } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import ProfileHeader from "../../../components/HeaderProfile";

import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProfile } from "../../../store/tempStorage/tempStorageSlice";
import { useRouter } from "next/router";
import Loading from "../../../components/Loading";

export default function UserProfile() {
  const profile = useSelector((state) => state.tempStorage.profile);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id;
    dispatch(fetchSingleProfile(id));
  }, [router.query.id, dispatch]);

  if (!profile) return <Loading />;

  return (
    <div>
      <ProfileHeader profile={profile} />
      <div className="bg-body">
        <div className="mx-auto px-4 lg:px-48 w-full py-10">
          <p className=" text-lg text-dark">
            {profile?.biography ? profile.biography : "No biography added yet"}
          </p>
          <div className="grid grid-cols-3 gap-4 pt-12">
            <div className="space-y-3">
              <h1 className="text-dark mb-3 font-semibold">Contact</h1>
              <div className=" flex items-center">
                <div className="mr-2">
                  <FaMapMarkerAlt className=" text-dark" />
                </div>
                <div>
                  <h4 className="text-dark ">{profile?.location}</h4>
                </div>
              </div>
              <div className=" flex items-center">
                <div className="mr-2">
                  <FaEnvelope className=" text-dark" />
                </div>
                <div>
                  <h4 className="text-dark">{profile.email}</h4>
                </div>
              </div>
              <div className=" flex items-center">
                <div className="mr-2">
                  <FaPhoneAlt className=" text-dark" />
                </div>
                <div>
                  <h4 className="text-dark">{profile?.phone}</h4>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              {" "}
              <h1 className="text-dark mb-3 font-semibold">Skills</h1>
              <div className="flex flex-wrap flex-row space-x-3 ">
                {profile?.skills
                  ? profile?.skills.split(",").map((skill, index) => {
                      return (
                        <div
                          className="bg-lightblue text-dark rounded-lg py-0.5 px-3 "
                          key={index}
                        >
                          {" "}
                          {skill}
                        </div>
                      );
                    })
                  : "No skills added."}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lightgrey">
        <div className="mx-auto px-4 lg:px-48 w-full py-10">
          <h1 className=" mb-6 font-bold text-3xl text-secondary">
            Work Experience
          </h1>
          {profile?.workExperience.map((experience, index) => {
            return (
              <div key={experience.id}>
                <div className="grid grid-cols-4 gap-y-4 ">
                  <div className="col-span-3">
                    <h3 className="text-secondary">{experience.position}</h3>
                    <div className="flex space-x-5 mt-2 ">
                      <p className="flex text-darkgrey">
                        <FaBriefcase className="mr-2 mt-1" />
                        {experience.company}
                      </p>
                      <p className="flex text-darkgrey">
                        <FaMapMarkerAlt className="mr-2 mt-1" />
                        {experience.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center flex-col">
                    <h3 className="text-accent">
                      {experience.employment_type}
                    </h3>
                    <p className="text-darkgrey">{experience.date}</p>
                  </div>
                </div>

                {index === profile?.workExperience.length - 1 ? (
                  ""
                ) : (
                  <div className="flex justify-center my-5 ">
                    <hr className="w-full border-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto px-4 lg:px-48 w-full py-10">
        <h1 className="  mb-6 font-bold text-3xl text-secondary">Education</h1>
        {profile?.education.map((education, index) => {
          return (
            <div key={education.id}>
              <div className="grid grid-cols-4 gap-y-4 ">
                <div className="col-span-3">
                  <h3 className="text-secondary">{education.major}</h3>
                  <div className="mt-2">
                    <p className="flex text-darkgrey">
                      <FaBriefcase className="mr-2 mt-1" />
                      {education.school}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-darkgrey">{education.date}</p>
                </div>
              </div>
              {index === profile?.education.length - 1 ? (
                ""
              ) : (
                <div className="flex justify-center my-5 ">
                  <hr className="w-full border-gray-300" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
