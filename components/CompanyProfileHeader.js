import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function CompanyProfileHeader({ companyProfile }) {
  return (
    <div className="w-full bg-light">
      <div className="flex flex-col mx-auto px-4 lg:px-48 w-full">
        <div className="pt-10 pb-8">
          <div className="flex-none sm:flex">
            <div className="h-32 w-32 sm:mb-0 mb-3 bg-lightblue rounded-2xl flex items-center justify-center">
              {companyProfile.logo ? (
                <img
                  src={companyProfile.logo}
                  alt={companyProfile.name}
                  className="w-28 h-28 object-cover rounded-2xl"
                />
              ) : (
                <div className="h-full border-primary bg-primary-light text-primary w-full rounded-full inline-flex items-center align-middle justify-center font-bold text-8xl">
                  <span>
                    {companyProfile.name ? companyProfile.name.charAt(0) : "C"}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-auto sm:ml-5 justify-evenly">
              <div className="flex items-center justify-between sm:mt-2">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="w-full flex-none text-3xl text-primary font-bold">
                      {companyProfile.name ? companyProfile.name : "Company"}
                    </div>
                    <div className="w-full flex-none text-lg text-secondary font-medium">
                      {companyProfile.category}
                    </div>
                    <div className="flex-auto text-gray-500 mt-4">
                      <button className="rounded-full bg-secondary px-6 py-1 text-white font-medium mr-3">
                        See all jobs
                      </button>

                      <a
                        href={companyProfile.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border-2 border-secondary px-6 py-1 text-secondary font-medium "
                      >
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-8  text-base text-gray-600">
            <div className="flex-1 inline-flex items-center text-primary">
              <FaLinkedin size={30} />
              <p className=" ml-2 hover:underline">
                <a
                  href={companyProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div className="flex-1 inline-flex items-center text-primary">
              <FaGithub size={30} />
              <p className="ml-2 hover:underline">
                <a
                  href={companyProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div className="flex-no-shrink inline-flex items-center text-primary">
              <FaFacebook size={30} />
              <p className="ml-2 hover:underline">
                <a
                  href={companyProfile.facebook}
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
    </div>
  );
}

export default CompanyProfileHeader;
