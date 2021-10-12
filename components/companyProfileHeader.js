const data = {
  id: "1",
  name: "Google",
  category: "Internet",
  website: "https://www.google.com/",
  logo: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
  img: "",
  about:
    "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
  contact: [
    {
      location: [
        {
          country: "United States",
          city: " Mountain View, California",
        },
      ],
      email: "contact@google.com",
      phone: "650 253-0000",
    },
  ],
  specialties: ["search", "mobile", "technology", "hardware", "software"],
  social: {
    linkedin: "linkedin/google",
    github: "google",
    facebook: "google",
  },
};

function CompanyProfileHeader() {
  return (
    <div className=" w-full bg-blue-50">
      <div className="flex flex-col container mx-auto ">
        <div className="pt-10 pb-8 ">
          <div className="flex-none sm:flex">
            <div className="  h-32 w-32   sm:mb-0 mb-3 bg-blue-200 rounded-2xl ">
              {data.logo ? (
                <img
                  src={data.logo}
                  alt={data.name}
                  className=" w-32 h-32 object-cover rounded-2xl"
                />
              ) : (
                <div className=" h-full border-primary bg-primary-light text-primary w-full  rounded-full inline-flex items-center align-middle justify-center font-bold text-8xl text-blue-600">
                  <span>{data.name.charAt(0)}</span>
                </div>
              )}
            </div>
            <div className="flex-auto sm:ml-5 justify-evenly">
              <div className="flex items-center justify-between sm:mt-2">
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="w-full flex-none text-3xl text-primary font-bold">
                      {data.name}
                    </div>
                    <div className="w-full flex-none text-lg text-secondary font-medium">
                      {data.category}
                    </div>
                    <div className="flex-auto text-gray-500 mt-4">
                      <button className="rounded-full bg-secondary px-6 py-1 text-white font-medium mr-3">
                        See all jobs
                      </button>

                      <a
                        href={data.website}
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
            <div className="flex-1 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
              </svg>
              <p className=" ml-2 hover:underline">
                <a
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div className="flex-1 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <p className="ml-2 hover:underline">
                <a
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div className="flex-no-shrink inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
              </svg>
              <p className="ml-2 hover:underline">
                <a
                  href={data.social.facebook}
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
