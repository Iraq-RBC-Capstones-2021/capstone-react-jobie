import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function TableRow({ Position, Salary, Date, Link }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;
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
          {t.Apply}
        </button>
      </td>
    </tr>
  );
}
