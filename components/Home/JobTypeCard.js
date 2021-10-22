import Link from "next/link";

function JobTypeCard({ title, borderColor, text }) {
  return (
    <div
      className={`shadow-lg rounded-xl w-72 md:w-96 px-8 pt-10 pb-9 bg-white overflow-hidden border-b-8 border-solid flex justify-end flex-col border-${borderColor}`}
    >
      <div className="font-medium text-2xl mb-4">{title}</div>
      <div className="w-full mb-0 flex-1">
        <p className="text-gray-600 text-base mb-4">{text}</p>
      </div>
      <div>
        <Link href="/jobs">
          <a className="text-gray-600 text-base hover:underline font-semibold ">
            View all {title} →
          </a>
        </Link>
      </div>
    </div>
  );
}

export default JobTypeCard;
