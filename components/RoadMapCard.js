function RoadMapCard({ title, link, children }) {
  return (
    <a
      className="shadow-lg rounded-xl px-16 py-10 bg-white"
      href={link}
      style={{}}
    >
      <div className="w-full h-full flex justify-center items-center flex-col ">
        <div className="font-medium text-5xl mb-2 text-accent">{children}</div>
        <div className="font-medium text-3xl text-secondary">{title}</div>
      </div>
    </a>
  );
}

export default RoadMapCard;
