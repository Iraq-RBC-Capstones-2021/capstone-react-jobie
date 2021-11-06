import { useRef } from "react";
import { sendFeedback } from "../config/emailConfig";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import en from "../locales/en";
import ar from "../locales/ar";

import pic from "../assets/img_contact.png";
export default function Home() {
  const form = useRef();
  const formref = form.current;
  const Router = useRouter();
  const { locale } = Router;
  const t = locale === "ar" ? ar : en;

  const handleSubmit = (e) => {
    sendFeedback(e, formref);
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    Array.from(document.querySelectorAll("textarea")).forEach(
      (textarea) => (textarea.value = "")
    );
  };

  return (
    <div className=" bg-body text-dark px-4 lg:px-48 w-full">
      <div className="pb-10">
        <img alt="section image" src={pic.src} className="w-full" />
      </div>

      <div className="grid grid-cols-2 font-medium p-6 ">
        <div className="col-1">
          <h1 className="pb-8 lg:text-4xl">{t.contact.GetInTouch}</h1>

          <form className="form mr-8 " ref={form}>
            <div className="flex space-x-2 my-3">
              <label className="w-full">
                {t.contact.FirstName} <br />
                <input
                  name="first-name"
                  type="text"
                  placeholder={t.contact.FirstName}
                  className="border p-2 mt-3 w-full  border-dark"
                  required
                />
              </label>

              <label className="w-full">
                {t.contact.LastName} <br />
                <input
                  name="last-name"
                  type="text"
                  placeholder={t.contact.LastName}
                  className="border p-2 mt-3  w-full border-dark"
                  required
                />
              </label>
            </div>

            <label>{t.contact.Email}</label>
            <input
              type="email"
              name="email"
              placeholder={t.contact.emailHolder}
              className="border p-2 w-full my-3 border-dark"
              required
            />
            <label> {t.contact.Message} </label>
            <textarea
              name="message"
              placeholder={t.contact.messageHolder}
              className="border p-2 mt-3 w-full border-dark"
            />

            <button
              type="submit"
              value="Send"
              className=" text-xl lg:text-2xl  rounded-full  mt-6 p-2 pr-10 pl-10  text-white font-semibold  bg-accent"
              onClick={handleSubmit}
            >
              {t.contact.Send}
            </button>
          </form>
        </div>

        <div className="col-2 ml-auto w-3/4 lg:w-4/5 xl:w-2/3 ">
          <h1 className="pb-8 lg:text-4xl">{t.contact.ContactUs}</h1>

          <div className="grid grid-cols-3  mt-3 p-6 lg:p-6 xl:p-12 bg-lightgrey ">
            <div className="col-1 grid grid-rows-4 gap-6 justify-around">
              <IoLocationOutline className="row-1 w-10 h-10 " />
              <IoCallOutline className=" row-2 w-10 h-10 " />
              <IoMailOutline className="row-3 w-10 h-10 " />
              <IoTimeOutline className="row-4 w-10 h-10 " />
            </div>

            <div className="col-2 col-span-2 grid grid-rows-4 gap-6 justify-around ">
              <h3 className="row-1 ">{t.contact.Location} </h3>
              <h3 className="row-2"> {t.contact.Phone} </h3>
              <h3 className="row-3"> {t.contact.EmailUs}</h3>
              <h3 className="row-4">{t.contact.OpenHours}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
