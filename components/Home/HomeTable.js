import TableRow from "./TableRow";
import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";

export default function HomeTable({ jobs }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;
  return (
    <>
      <div className=" text-right space-x-6 ">
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">{t.home.FullTime}</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">{t.home.PartTime}</span>
        </label>
        <label className="inline-flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">{t.home.Remote}</span>
        </label>
      </div>
      <table className="table-fixed shadow-lg  ">
        <thead className="bg-lightgrey  h-12   ">
          <tr className="rounded-xl">
            <th className=" text-dark w-1/2 text-left pl-6 ">
              {t.home.Position}
            </th>
            <th className="w-1/4 text-left text-dark">{t.home.Salary}</th>
            <th className="w-1/4 text-left text-dark ">{t.home.Date}</th>
            <th className="w-1/4 text-left text-dark">{t.home.Action}</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {jobs.map((job) => {
            return (
              <TableRow
                Position={job.position}
                Salary={{
                  salary_from: job.salary_from,
                  salary_to: job.salary_to,
                }}
                timestamp={job.timestamp}
                id={job.id}
                key={job.id}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
