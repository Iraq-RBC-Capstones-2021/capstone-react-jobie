import React from "react";
import Link from "next/link";

export default function Jobs({ title, desc, link }) {
  return (
    <div>
      <h1 className="font-medium text-dark my-2">{title}</h1>
      <h3 className="text-footer text-justify">{desc}</h3>
      <Link href={`/$link`}>
        <a className="flex w-full text-base px-2.5">{link}</a>
      </Link>
    </div>
  );
}
