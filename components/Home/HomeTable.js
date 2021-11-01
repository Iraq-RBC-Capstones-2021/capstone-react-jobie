import TableRow from "./TableRow";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
export default function HomeTable({
  Position = "UI/UX Designer",
  Salary = "5000$",
  Date = "3 hours ago",
}) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;
  return (
    <>
      <div className=" text-right space-x-6 ">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">{t.fullTimeTable}</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">{t.partTimeTable}</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">{t.remoteTable}</span>
        </label>
      </div>
      <table className="table-fixed shadow-lg  ">
        <thead className="bg-lightgrey  h-12   ">
          <tr className="rounded-xl">
            <th className=" text-dark w-1/2 text-left pl-6 ">{t.PositionTH}</th>
            <th className="w-1/4 text-left text-dark">{t.SalaryTH}</th>
            <th className="w-1/4 text-left text-dark ">{t.DateTH}</th>
            <th className="w-1/4 text-left text-dark">{t.ApplyTH}</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          <TableRow
            Position={t.Position}
            Salary={t.Salary}
            Date={t.Date}
            Link={""}
          />
          <TableRow
            Position={t.Position}
            Salary={t.Salary}
            Date={t.Date}
            Link={""}
          />
          <TableRow
            Position={t.Position}
            Salary={t.Salary}
            Date={t.Date}
            Link={""}
          />
          <TableRow
            Position={t.Position}
            Salary={t.Salary}
            Date={t.Date}
            Link={""}
          />
          <TableRow
            Position={t.Position}
            Salary={t.Salary}
            Date={t.Date}
            Link={""}
          />
          <TableRow
            Position={t.Position}
            Salary={t.Salary}
            Date={t.Date}
            Link={""}
          />
          <TableRow
            Position={t.Position}
            Salary={t.Salary}
            Date={t.Date}
            Link={""}
          />
        </tbody>
      </table>
    </>
  );
}
