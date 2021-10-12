export default function Header({
  title,
  subtitle,
  children,
  img,
  light = true,
}) {
  return (
    <div
      className={`flex flex-wrap md:flex-nowrap justify-between p-4 md:p-8 items-center ${
        light ? "text-dark bg-light" : "text-white bg-dark"
      }`}
      style={{ height: 400 }}
    >
      <div>
        <h1 className="font-semibold mb-3">{title}</h1>
        <h4>{subtitle}</h4>
        {children}
      </div>
      <div className="p-3 h-full w-5/6">
        <img src={img.src} alt="section image" className="ml-auto h-full" />
      </div>
    </div>
  );
}
