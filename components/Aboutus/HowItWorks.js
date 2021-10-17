export default function HowItWorks({ Logo, title, desc }) {
  return (
    <div>
      <Logo className="h-16 w-16 rounded-full bg-lightblue py-4" />
      <h1 className="font-medium text-dark my-2">{title}</h1>
      <h3 className="text-footer text-justify">{desc}</h3>
    </div>
  );
}
