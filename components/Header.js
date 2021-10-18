export default function Header({
  title,
  subtitle,
  subtitle2,
  children,
  img,
  light = true,
}) {
  return (
    <div className={`${light ? "text-dark bg-light" : "text-white bg-dark"}`}>
      <div className="flex  justify-around p-4 md:p-8 items-center px-4 lg:px-48 w-full ">
        <div>
          <h1 className="text-5xl font-bold pb-3">{title}</h1>
          <h2>{subtitle}</h2>
          <h2> {subtitle2}</h2>
          {children}
        </div>

        <div className="p-3 ">
          <img
            src={img.src}
            alt="section image"
            className=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
