function RoadMapCard({ title, link, icon }) {
  return (
    <a className="shadow-lg rounded-xl px-16 py-10 w-52 bg-white" href={link}>
      <div className="w-full h-full flex justify-center items-center flex-col ">
        <div className="font-medium text-4xl mb-2 text-accent">{icon}</div>
        <div className="font-sm text-2xl text-secondary">{title}</div>
      </div>
    </a>
  );
}

export default RoadMapCard;
