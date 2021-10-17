const HomeTable = ({
  Position = "UI/UX Designer",
  Salary = "5000$",
  Date = "3 hours ago",
}) => {
  return (
    <div className=" w-screen h-auto lg:px-48 py-4  ">
      <div className=" text-right space-x-6 ">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Full Time</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Part Time</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Remote</span>
        </label>
      </div>
      <table className="table-fixed shadow-lg  ">
        <thead className="bg-light  h-12   ">
          <tr className="rounded-xl">
            <th className=" text-dark w-1/2 text-left pl-6 ">Position</th>
            <th className="w-1/4 text-left text-dark">Salary</th>
            <th className="w-1/4 text-left text-dark ">Date</th>
            <th className="w-1/4 text-left text-dark">Apply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4">{Position}</td>
            <td>{Salary}</td>
            <td>{Date}</td>
            <td className="p-4">
              <button className=" rounded-full bg-transparent border-2 w-24 h-8  border-accent text-accent text-lg hover:bg-accent hover:text-gray-100 focus:border-4 ">
                Apply
              </button>
            </td>
          </tr>
          <tr>
            <td className="p-4">{Position}</td>
            <td>{Salary}</td>
            <td>{Date}</td>
            <td className="p-4">
              <button className=" rounded-full bg-transparent border-2 w-24 h-8  border-accent text-accent text-lg hover:bg-accent hover:text-gray-100 focus:border-4 ">
                Apply
              </button>
            </td>
          </tr>
          <tr>
            <td className="p-4">{Position}</td>
            <td>{Salary}</td>
            <td>{Date}</td>
            <td className="p-4">
              <button className=" rounded-full bg-transparent border-2 w-24 h-8  border-accent text-accent text-lg hover:bg-accent hover:text-gray-100 focus:border-4 ">
                Apply
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomeTable;
