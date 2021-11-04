import Link from "next/link";
export default function TableRow({ Position, Salary, timestamp, id }) {
  return (
    <tr>
      <td className="p-4 font-semibold ">
        <Link href={`/job/${id}`}>
          <a className="hover:underline">{Position}</a>
        </Link>
      </td>
      <td>{`$${Salary.salary_from} - $${Salary.salary_to}`}</td>
      <td>{new Date(timestamp).toLocaleDateString("en-GB")}</td>
      <td className="p-4 pl-0">
        <button className=" rounded-full bg-transparent border-2 w-24 h-8  border-accent text-accent text-lg hover:bg-accent hover:text-gray-100 focus:border-4 ">
          Apply
        </button>
      </td>
    </tr>
  );
}
