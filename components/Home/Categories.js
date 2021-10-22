export default function Categories({ Logo, title, subtitle, link }) {
  return (
    <a
      className="w-full h-full flex justify-center items-center flex-col"
      href={link}
    >
      <Logo className="h-10 w-10 rounded-full bg-lightblue py-2 lg:h-16 lg:w-16 lg:py-4 xl:w-20 xl:h-20 xl:py-5" />
      <h1 className="font-medium text-dark text-base lg:text-xl xl:text-2xl">
        {title}
      </h1>
      <h3 className="text-footer text-justify text-sm lg:text-base xl:text-lg">
        {subtitle}
      </h3>
    </a>
  );
}
