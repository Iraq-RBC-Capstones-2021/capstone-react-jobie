import Image from "next/image";
// if we wanted to render home page header these data will be passed pic = "/../public/home.png", buttons = "true",
// if we wanted to render roadmaps header these data will be passed pic = "/../public/Roadmaps.png", light = "true", text = "true"

export default function Header({
  text = true,
  buttons,
  light = true,
  pic = "/../public/Roadmaps.png",
}) {
  return (
    <div
      className="grid grid-cols-2 gap-5 text-white   pl-6 pr-6 pt-6 pb-6    lg:pl-16 lg:pr-16 lg:pt-16 lg:pb-16   md:pl-12 md:pr-12 md:pt-12 md:pb-12"
      style={{ background: light ? "#E7ECF2" : "#34495E" }}
    >
      <div className="col-1      xl:pt-20   lg:pt-8 lg:pl-6   md:pt-8   ">
        <h1 className="font-extrabold     text-base pb-1       lg:text-5xl lg:pb-6     md:text-3xl md:pb-2   ">
          {text ? (
            <h1 style={{ color: "#34495E" }}>
              Developer <br /> Roadmap
            </h1>
          ) : (
            <h1>
              10,254 Jobs <br />
              Are Listed Here!
            </h1>
          )}
        </h1>

        <h2 className="text-sm pb-2 lg:text-3xl lg:pb-6    md:text-xl md:pb-2  ">
          {text ? (
            <h1 style={{ color: "#34495E" }}>
              Follow these roadmaps and become a hero in any path you choose!
            </h1>
          ) : (
            <h1>Find your dream job now</h1>
          )}
        </h2>

        {buttons ? (
          <div className="relative  ">
            <input
              type="text"
              className="rounded-full text-black    h-6 w-36 pl-2 text-xs    lg:h-12 lg:w-80 lg:pl-7 lg:pr-20    md:h-8 md:w-60 md:pl-4 "
              placeholder="Type to Search..."
            />

            <button
              className="text-white rounded-full absolute     h-6 w-12 text-xs left-24 bottom-0     lg:h-12 lg:w-24 lg:left-56    md:h-8 md:w-20 md:left-40"
              style={{ background: "#EC7063" }}
            >
              Search
            </button>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className=" col-2  ">
        <Image src={pic} height="511px" width="795px" alt="not found" />
      </div>
    </div>
  );
}
