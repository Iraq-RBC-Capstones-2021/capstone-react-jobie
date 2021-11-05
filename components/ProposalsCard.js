import Link from "next/link";
function ProposalsCard({ profile, date = "2021/10/10" }) {
  return (
    <div>
      <div className="bg-white shadow-lg w-full py-4 px-6 flex justify-between items-center rounded-xl">
        <div className="flex-none sm:flex space-x-4 items-center justify-center">
          <div className="h-16 w-16 sm:mb-0 mb-3 bg-lightblue rounded-2xl flex justify-center items-center">
            {profile?.img ? (
              <img
                src={profile.img}
                alt={profile.name}
                width={50}
                height={50}
              />
            ) : (
              <div className="h-full border-primary bg-primary-light text-primary w-full inline-flex items-center align-middle justify-center font-bold text-6xl">
                <span>{profile?.name ? profile.name.charAt(0) : "P"}</span>
              </div>
            )}
          </div>

          <div>
            <p className="font-bold font-primary text-lg">
              <Link href={`/user-profile/${profile.id}`}>
                <a className="hover:underline">{profile.name}</a>
              </Link>
            </p>
            <p>{profile?.title}</p>
          </div>
        </div>

        <div>
          <p className="font-bold font-primary text-lg">Location</p>
          <p>{profile?.location}</p>
        </div>

        <span>
          <p className="font-bold font-primary text-lg">Applied at</p>
          <p className="text-sm">{date}</p>
        </span>

        <div>
          <button className="text-accent border-accent py-1 px-10 border rounded-full hover:bg-accent hover:text-white transition duration-900 bg-white ">
            Hire
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProposalsCard;
