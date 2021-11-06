import { useRouter } from "next/router";
import en from "../../locales/en";
import ar from "../../locales/ar";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { notifyError } from "../../store/notification/notificationSlice";
import { applyJob } from "../../store/profiles/profileSlice";

export default function TableRow({ Position, Salary, timestamp, id }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile.profile);
  const dispatch = useDispatch();

  const handleApplyJob = () => {
    if (auth?.currentUser) {
      const data = { profile: profile, jobId: id };
      dispatch(applyJob(data));
    } else {
      dispatch(
        notifyError({
          text: "Please log in to apply to a job.",
          action: "Cancel",
        })
      );
    }
  };
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
        {auth?.currentUser && profile?.is_company ? (
          <Link href={`/job/${id}`}>
            <a className=" rounded-full bg-transparent border-2 w-24 h-8 py-0.5 px-2 border-accent text-accent text-lg hover:bg-accent hover:text-gray-100 focus:border-4 ">
              View
            </a>
          </Link>
        ) : (
          <button
            className=" rounded-full bg-transparent border-2 w-24 h-8  border-accent text-accent text-lg hover:bg-accent hover:text-gray-100 focus:border-4 "
            onClick={handleApplyJob}
          >
            {t.home.Apply}
          </button>
        )}
      </td>
    </tr>
  );
}
