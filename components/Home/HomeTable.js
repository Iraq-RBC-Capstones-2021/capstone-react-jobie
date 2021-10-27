import TableRow from "./TableRow";
export default function HomeTable({
  Position = "UI/UX Designer",
  Salary = "5000$",
  Date = "3 hours ago",
}) {
  return (
    <>
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
        <thead className="bg-lightgrey  h-12   ">
          <tr className="rounded-xl">
            <th className=" text-dark w-1/2 text-left pl-6 ">Position</th>
            <th className="w-1/4 text-left text-dark">Salary</th>
            <th className="w-1/4 text-left text-dark ">Date</th>
            <th className="w-1/4 text-left text-dark">Apply</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <TableRow Position={Position} Salary={Salary} Date={Date} Link={""} />
          <TableRow Position={Position} Salary={Salary} Date={Date} Link={""} />
          <TableRow Position={Position} Salary={Salary} Date={Date} Link={""} />
          <TableRow Position={Position} Salary={Salary} Date={Date} Link={""} />
          <TableRow Position={Position} Salary={Salary} Date={Date} Link={""} />
          <TableRow Position={Position} Salary={Salary} Date={Date} Link={""} />
          <TableRow Position={Position} Salary={Salary} Date={Date} Link={""} />
        </tbody>
      </table>
    </>
  );
}
