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

export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;
  const links = [
    {
      head: t.footer.Navigate,
      links: [
        { title: t.footer.Home, href: "/" },
        { title: t.footer.About, href: "/about" },
        { title: t.footer.Roadmap, href: "/roadmaps" },
        { title: t.footer.Jobs, href: "/jobs" },
        { title: t.footer.Contact, href: "/contact" },
        { title: t.footer.Login, href: "/login" },
        { title: t.footer.SignUp, href: "/signup" },
      ],
    },
    {
      head: t.footer.Jobs,
      links: [
        { title: t.footer.WebDeveloper, href: "/jobs/web+developers" },
        { title: t.footer.GraphicDesign, href: "/jobs/graphic+designers" },
        { title: t.footer.Translator, href: "/jobs/translators" },
        { title: t.footer.BackendDeveloper, href: "/jobs/backend+developers" },
        { title: t.footer.UIUX, href: "/jobs/uxui+specialists" },
      ],
    },
    {
      head: t.footer.Services,
      links: [
        { title: t.footer.BuildYourResume, href: "/profile" },
        { title: t.footer.ListYourJobs, href: "/jobs/create" },
        { title: t.footer.SearchJobs, href: "/jobs" },
        { title: t.footer.HireProfessionals, href: "/hire" },
        { title: t.footer.RateAnEmployee, href: "/rate" },
      ],
    },
  ];
  return (
    <div className="w-full">
      <div className="text-white px-4 lg:px-48 py-4 bg-footer md:h-80 h-auto w-full">
        <div className="grid justify-items-between md:grid-cols-2 grid-cols-1">
          <div className="mt-3">
            <Image src={logo} alt="Logo" />
            <p className="w-full md:w-3/4 mt-8 text-sm">{t.footer.JobieDesc}</p>
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
