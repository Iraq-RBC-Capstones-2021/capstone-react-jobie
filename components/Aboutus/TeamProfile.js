export default function TeamProfile({ pic, role, name }) {
  return (
    <div className="">
      <img
        className="rounded-full bg-dark w-28 h-28 md:h-40 md:w-40 xl:w-52 xl:h-52  "
        alt="user"
        src={pic.src}
      />
      <h1 className=" text-accent lg:text-4xl font-bold text-center py-4">
        {name}
      </h1>
      <h2 className=" lg:text-2xl text-center">{role}</h2>
    </div>
  );
}
