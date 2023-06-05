import Head from "next/head";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex justify-start items-start h-full p-10 pt-36">
      <Head>
        <title>Contact - Owenw.Photography</title>
      </Head>
      <div className="w-2/5 bg-black p-0 rounded-md shadow-lg">
        <div className="mb-10 mt-7">
          <p className="text-white text-lg ">
            Looking to discuss a project? Please get in touch using the form on
            this page. Generally, I’m able to reply to all inquiries within 48
            hours. {/* Pontano Sans font */}
          </p>
        </div>

        <div className="">
          <p className="text-white text-3xl">Owenw.photography@gmail.com</p>
        </div>

        <div className="mb-20">
          <p className="text-white text-3xl">(719)-822-1857</p>
        </div>

        <div>
          <Link href="https://www.instagram.com/owenw.photography/">
            <FaInstagram className="text-white text-2xl" />
          </Link>
        </div>
      </div>

      <div className="w-2/5 ml-10 bg-black p-5 rounded-md shadow-lg">
        <form
          className="flex flex-col space-y-5"
          action="https://formspree.io/f/mayznwba"
          method="POST"
        >
          <h1 className="flex">
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


//finish adding fade in logic and text sizing fonts