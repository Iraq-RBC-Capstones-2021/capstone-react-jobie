import react, { useRef } from 'react';
import {sendFeedback} from '../config/emailJs'
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";

import pic from "../assets/img_contact.png";
export default function Home() {

  const form = useRef();
  const formref = form.current;

  return (
    <div className=" bg-body text-dark px-4 lg:px-48 w-full">
      <div className="pb-10">
        <img alt="section image" src={pic.src} className="w-full" />
      </div>

      <div className="grid grid-cols-2 font-medium p-6 ">
        <div className="col-1">
          <h1 className="pb-8 lg:text-4xl">Get in Touch</h1>

          <form className="form mr-8 "ref={form} onSubmit={sendFeedback({formref})}>
            <div className="flex space-x-2 my-3">
              <label className="w-full">
                First Name <br/>
                <input
                  name = "first-name"
                  type="text"
                  placeholder="First Name"
                  className="border p-2 mt-3 w-full  border-dark"
                  required
                />
              </label>

              <label className="w-full">
                Last Name <br/>
                <input
                  name ="last-name"
                  type="text"
                  placeholder="Last Name"
                  className="border p-2 mt-3  w-full border-dark"
                  required
                />
              </label>
            </div>

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border p-2 w-full my-3 border-dark"
              required
            />
            <label> Message </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              className="border p-2 mt-3 w-full border-dark"
            />

            <input 
              type="submit" 
              value="Send" 
              className=" text-xl lg:text-2xl  rounded-full  mt-6 p-2 pr-10 pl-10  text-white font-semibold  bg-accent" 
              required
            />
          </form>

        </div>

        <div className="col-2 ml-auto w-3/4 lg:w-4/5 xl:w-2/3 ">
          <h1 className="pb-8 lg:text-4xl">Contact Us</h1>

          <div className="grid grid-cols-3  mt-3 p-6 lg:p-6 xl:p-12 bg-lightgrey ">
            <div className="col-1 grid grid-rows-4 gap-6 justify-around">
              <IoLocationOutline className="row-1 w-10 h-10 " />
              <IoCallOutline className=" row-2 w-10 h-10 " />
              <IoMailOutline className="row-3 w-10 h-10 " />
              <IoTimeOutline className="row-4 w-10 h-10 " />
            </div>

            <div className="col-2 col-span-2 grid grid-rows-4 gap-6 justify-around ">
              <h3 className="row-1 "> As Sulaymaniyah, Iraq </h3>
              <h3 className="row-2"> +964 750 113 0495 </h3>
              <h3 className="row-3"> Jobie@contact.com</h3>
              <h3 className="row-4"> 9:00 - 17:00 </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
