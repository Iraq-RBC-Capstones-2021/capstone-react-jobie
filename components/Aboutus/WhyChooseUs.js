export default function WhyChooseUs({ title, subtitle, Logo }) {
  return (
    <div className="bg-white shadow-md flex flex-row lg:p-4 md:p-2 rounded-xl place-content-center">
      <Logo className="w-8 h-8 lg:h-16 lg:w-16 md:h-12 md:w-12 rounded-full bg-lightblue lg:py-4 md:py-2" />
      <div className="ml-4">
        <h2 className="text-footer text-xs lg:text-base">{subtitle}</h2>
        <h1 className="text-dark text-sm lg:text-lg font-semibold">{title}</h1>
      </div>
    </div>
  );
}
