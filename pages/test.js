import Header from "../components/Header";
import roads from "../assets/img_roads.png";

export default function Test(props) {
  return (
    <div style={{ width: 850 }} className="mx-auto">
      <Header
        light={false}
        title="10,254 Jobs Are Listed Here!"
        subtitle="Find your dream job now"
        img={jobs}
      >
        <form className="my-5 h-8 flex">
          <input
            type="search"
            className="h-full w-full md:w-20 max-w-min flex-grow rounded-2xl pl-4 pr-10 outline-none text-dark"
            placeholder="keyword"
          />
          <button
            type="submit"
            className="bg-accent text-white px-4 h-full rounded-2xl -ml-8"
          >
            Search
          </button>
        </form>
      </Header>

      <Header
        title="Developer Roadmaps"
        subtitle="Follow these roadmaps and become a hero in any path you choose!"
        img={roads}
      ></Header>
    </div>
  );
}
