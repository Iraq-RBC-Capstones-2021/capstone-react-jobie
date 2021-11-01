import logo from "../assets/logo.svg";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineBehance } from "react-icons/ai";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";

const links = [
  {
    head: "Navigate Website",
    links: [
      { title: "Home", href: "/" },
      { title: "About Us", href: "/about" },
      { title: "Road Maps", href: "/roadmaps" },
      { title: "Jobs", href: "/jobs" },
      { title: "Contact Us", href: "/contact" },
      { title: "Login", href: "/login" },
      { title: "Sign up", href: "/signup" },
    ],
  },
  {
    head: "Jobs",
    links: [
      { title: "Web Developers", href: "/jobs/web+developers" },
      { title: "Graphic Designers", href: "/jobs/graphic+designers" },
      { title: "Translators", href: "/jobs/translators" },
      { title: "Backend Developers", href: "/jobs/backend+developers" },
      { title: "UX/UI Specialist", href: "/jobs/uxui+specialists" },
    ],
  },
  {
    head: "Services",
    links: [
      { title: "Build your resume", href: "/profile" },
      { title: "List your jobs", href: "/jobs/create" },
      { title: "Search Jobs", href: "/jobs" },
      { title: "Hire Professionals", href: "/hire" },
      { title: "Rate an employer", href: "/rate" },
    ],
  },
];
export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;

  return (
    <div className="w-full">
      <div className="text-white px-4 lg:px-48 py-4 bg-footer md:h-80 h-auto w-full">
        <div className="grid justify-items-between md:grid-cols-2 grid-cols-1">
          <div className="mt-3">
            <Image src={logo} alt="Logo" />
            <p className="w-full md:w-3/4 mt-8 text-sm">
              Realm of the galaxies across the centuries the carbon in our apple
              pies vanquish the impossible another world venture. Dream of the
              minds eye muse about home.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 mt-12">
            {links.map((group) => {
              return (
                <div key={group.head} className="text-sm flex flex-col">
                  <p className="text-gray-400 font-semibold mb-1">
                    {" "}
                    {group.head}
                  </p>
                  {group.links.map((link) => (
                    <Link key={link.title} href={link.href}>
                      <a className="mb-1">{link.title}</a>
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-white px-4 md:px-48 py-4 bg-footer filter brightness-75 w-full">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className="flex">
            <div className="p-1 mx-2 border-2 rounded-full hover:border-gray-400 ">
              <FaFacebookF className="text-xl hover:text-gray-400" />
            </div>
            <div className="p-1 mx-2 border-2 rounded-full hover:border-gray-400 ">
              <AiOutlineInstagram className="text-xl hover:text-gray-400" />
            </div>
            <div className="p-1 mx-2 border-2 rounded-full hover:border-gray-400 ">
              <AiOutlineTwitter className="text-xl hover:text-gray-400" />
            </div>
            <div className="p-1 mx-2 border-2 rounded-full hover:border-gray-400 ">
              <AiOutlineBehance className="text-xl hover:text-gray-400" />
            </div>
          </div>
          <div>&copy; {new Date().getFullYear()} JOBIE</div>
        </div>
      </div>
    </div>
  );
}
