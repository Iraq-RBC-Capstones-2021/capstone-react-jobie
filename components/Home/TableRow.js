export default function TableRow({ Position, Salary, Date, Link }) {
  return (
    <tr>
      <td className="p-4 font-semibold">{Position}</td>
      <td>{Salary}</td>
      <td>{Date}</td>
      <td className="p-4 pl-0">
        <button
          className=" rounded-full bg-transparent border-2 w-24 h-8  border-accent text-accent text-lg hover:bg-accent hover:text-gray-100 focus:border-4 "
          link={Link}
        >
          Apply
        </button>
      </td>
    </tr>
  );
}
