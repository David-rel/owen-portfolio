import Head from "next/head";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";


export default function Contact() {


  const [isVisible, setIsVisible] = useState(false);

  const textRef = useRef();

  const checkTextVisibility = throttle(() => {
    const rect = textRef.current.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    setIsVisible(isVisible);
  }, 200);

  useEffect(() => {
    // Adding checkTextVisibility to be called once on component mount
    checkTextVisibility();
    window.addEventListener("scroll", checkTextVisibility);
    return () => {
      window.removeEventListener("scroll", checkTextVisibility);
    };
  }, []);


  return (
    <div
      className={`flex flex-col md:flex-row justify-start items-start h-full p-10 pt-36 pb-96`}
    >
      <Head>
        <title>Contact - Owenw.Photography</title>
      </Head>
      <div
        className={`w-full md:w-2/5 bg-black p-0 rounded-md shadow-lg mt-5 md:mt-0 ${
          isVisible ? "fadeIn" : "fadeOut"
        }`}
        ref={textRef}
      >
        <div className="mb-10 mt-7">
          <p className="text-white text-3xl font-abel">
            Looking to discuss a project? Please get in touch using the form on
            this page. Generally, I’m able to reply to all inquiries within 48
            hours. {/* Pontano Sans font */}
          </p>
        </div>

        <div className="">
          <p className="text-white md:text-xl lg:3xl text-2xl font-audiowide ">
            Owenw.photography@gmail.com
          </p>
        </div>

        <div className="mb-20">
          <p className="text-white text-3xl font-audiowide">(719)-822-1857</p>
        </div>

        <div>
          <Link href="https://www.instagram.com/owenw.photography/">
            <FaInstagram className="text-white text-2xl" />
          </Link>
        </div>
      </div>

      <div className="w-full md:w-2/5 md:ml-10 p-5 mt-5 md:mt-0 rounded-md shadow-lg font-abel">
        <form
          className="flex flex-col space-y-5"
          action="https://formspree.io/f/mayznwba"
          method="POST"
        >
          <h1 className="flex text-xl">
            Name
            <span className="text-gray-400">(required)</span>
          </h1>
          <div className="flex space-x-5">
            <div className="flex flex-col w-full">
              <label className="text-white text-xl mb-1">
                <h1 className="flex">First Name</h1>
              </label>
              <input
                type="text"
                name="firstName"
                className="flex-1 py-3 px-3 border-gray-300"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-white text-xl mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="flex-1 py-3 px-3 border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-white text-xl mb-4">
              Email <span className="text-gray-400">(required)</span>
            </label>
            <input
              type="email"
              name="_replyto"
              className="py-3 px-3 w-full text-black border-gray-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white text-xl mb-4">
              Message <span className="text-gray-400">(required)</span>
            </label>
            <textarea
              name="message"
              className="py-3 px-3 w-full h-40 border-gray-300 text-black"
            />
          </div>
          <button
            type="submit"
            className="py-8 px-1 bg-black text-white font-bold rounded-full border w-32"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}


