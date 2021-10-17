export default function Header({
  title,
  subtitle,
  children,
  img,
  light = true,
}) {
  return (
    <div
      className={`px-4 lg:px-48 w-full flex flex-wrap md:flex-nowrap justify-between p-4 md:p-8 items-center ${
        light ? "text-dark bg-light" : "text-white bg-dark"
      }`}
      style={{ height: 400 }}
    >
      <div>
        <h1 className="text-4xl font-semibold mb-3">{title}</h1>
        <h3>{subtitle}</h3>
        {children}
      </div>
      <div className="p-3 h-full w-5/6">
        <img src={img.src} alt="section image" className="ml-auto h-full" />
      </div>
    </div>
  );
}
