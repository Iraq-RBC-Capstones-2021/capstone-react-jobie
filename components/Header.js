export default function Header({
  title,
  title2,
  subtitle,
  subtitle2,
  children,
  img,
  align,
  light = true,
}) {
  return (
    <div className={`${light ? "text-dark bg-light" : "text-white bg-dark"}`}>
      <div className="flex  justify-around py-32 items-center px-4 lg:px-48 w-full ">
        <div>
          <h1
            className={
              align === "ar"
                ? "text-5xl font-bold py-3 text-right "
                : "text-5xl font-bold py-3"
            }
          >
            {title}
          </h1>
          <h1 className="text-5xl font-bold pb-3">{title2}</h1>
          <h1 className="pb-6">{subtitle}</h1>
          <h1> {subtitle2}</h1>
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
