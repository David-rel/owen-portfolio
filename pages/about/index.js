import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <div className="pt-40 flex">
      <Head>
        <title>About - Owenw.Photography</title>
      </Head>

      <div className="w-3/5 px-8">
        <p className="text-3xl italic mb-10 leading-10">
          Owen Weis is a name that resonates with innovation and dedication. As
          a senior in high school, this 17-year-old possesses a unique blend of
          creativity and work ethic, transforming the way we perceive high
          school students. Owen thrives on challenges and consistently strives
          to provide clients with the best possible product.
        </p>
        <p className="text-xl italic mb-6 leading-10">
          As we delve into the remarkable achievements of Owen Weis, a senior in
          high school, it becomes evident that age is no barrier to greatness.
          At the tender age of 17, Owen has already left an indelible mark on
          the world around him. His outgoing personality and unwavering
          commitment to delivering exceptional results has propelled him to the
          forefront of his peers. Here's a result of that work.
        </p>
        <p className="text-xl italic mb-4">Achievements/Awards</p>
        <ul className="list-disc list-inside text-lg pl-8 space-y-2 leading-10">
          <li>NSPA Best in Show at the 2023 JEA Conference</li>
          <li>
            Best in Colorado- Second Place (News-Feature Photo and Caption)
          </li>
          <li>
            Best in Colorado- Second Place (Sports Action Photo and Caption)
          </li>
          <li>Best in Colorado- Honorable mention ( School news)</li>
          <li> Best in Colorado- Honorable Mention (News Feature)</li>
        </ul>
      </div>

      <div className="w-2/5 px-8 flex flex-col items-start">
        <div className="relative w-[450px] h-[550px] mb-4">
          <Image
            src="/cars/1-IMG_2974.jpg"
            alt="About us"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-md mt-4 italic">Car Shot</p>
        <p className="italic pt-52 pb-4 text-4xl leading-normal">
          With all of Achievements My work has been published in the Regis
          Jesuit High school Elevate Magazine
        </p>
        <Link href="/contact">
          <button className="mt-4 py-4 px-14 text-xl rounded-full bg-black border-2 text-white hover:bg-white hover:text-black hover:border-black">
            Work With Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
