import Select from "react-select";
export default function createjob() {
  const cities = [
    { value: "Anbar", label: "Anbar" },
    { value: "Babylon", label: "Babylon" },
    { value: "Baghdad", label: "Baghdad" },
    { value: "Basrah", label: "Basrah" },
    { value: "Dahuk", label: "Dahuk" },
    { value: "Diyala", label: "Diyala" },
    { value: "Erbil", label: "Erbil" },
    { value: "Kerbala", label: "Kerbala" },
    { value: "Missan", label: "Missan" },
    { value: "Muthanna", label: "Muthanna" },
    { value: "Najaf", label: "Najaf" },
    { value: "Ninewa", label: "Ninewa" },
    { value: "Qadissiya", label: "Qadissiya" },
    { value: "Salah al-Din", label: "Salah al-Din" },
    { value: "Sulaymaniyah", label: "Sulaymaniyah" },
    { value: "Tameem", label: "Tameem" },
    { value: "Thi-Qar", label: "Thi-Qar" },
    { value: "Wassit", label: "Wassit" },
  ];

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };

  return (
    <div className="">
      <form className="form">
        <div className="bg-body">
          <div className="flex justify-center">
            <div className="relative mt-10  " style={{ width: "1080px" }}>
              <div className="border-b">
                <h1 className="text-dark font-semibold"> Create a Job </h1>
                <h4 className="mb-10"> Create a new job offer here</h4>
                <div className="absolute top-2 right-0 mb-10">
                  <button className="text-base rounded-full p-1 pr-6 pl-6  text-white font-semibold  bg-accent">
                    Save
                  </button>
                  <button className="text-base rounded-full p-1 pr-6 pl-6  text-dark  font-semibold  bg-lightgrey">
                    Cancel
                  </button>
                </div>
              </div>

              <div className="grid gap-4 grid-rows-5 ">
                <div className="row-1 grid grid-cols-3">
                  <div className="col-1 col-span-2 ">
                    <h1 className="text-dark font-semibold mt-6 mb-4">
                      {" "}
                      Job Detail
                    </h1>

                    <h5>Title</h5>
                    <input className="mt-2 w-full h-10 rounded-lg border-grey border-2" />
                  </div>

                  <div className="col-3 border-l-4 mt-10 ml-6 pl-6  border-dark text-footer">
                    Some job title examples:
                    <ul className="list-disc ml-6 ">
                      <li>React Developer</li>
                      <li>Team Lead</li>
                      <li>Front-end Developer</li>
                    </ul>
                  </div>
                </div>

                <div className="row-2 ">
                  <div className="col-1">
                    <h5>Location</h5>
                    <Select
                      className=" w-1/3 h-11 rounded-lg border-grey border-2"
                      name="location"
                      required
                      options={cities}
                      styles={style}
                    >
                      <option
                        className="rounded-lg border-grey border-2"
                        value=""
                        selected
                        disabled
                        hidden
                      >
                        Select Location
                      </option>
                    </Select>
                  </div>

                  <div className="col-2">
                    <h5>Title</h5>
                    <input className="mt-2 w-full h-10 rounded-lg border-grey border-2" />
                  </div>
                </div>

                <div className="col-3">hello</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-lightgrey">
          <div className="flex justify-center">
            <div style={{ width: "1080px" }}>Hello</div>
          </div>
        </div>

        <div className="bg-body">
          <div className="flex justify-center">
            <div style={{ width: "1080px" }}>Hello</div>
          </div>
        </div>
      </form>
    </div>
  );
}
