import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function About() {
  const [imageFadeIn, setImageFadeIn] = useState(false);
  const [textFadeIn, setTextFadeIn] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setImageFadeIn(true);
    }, 500); // Image fade in after 500ms

    const textTimer = setTimeout(() => {
      setTextFadeIn(true);
    }, 1000); // Text fade in after 1000ms

    // Clear the timers when the component unmounts
    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="pt-40 flex">
      <Head>
        <title>About - Owenw.Photography</title>
      </Head>

      <div
        className={`w-1/2 px-8 transition-opacity duration-500 ${
          textFadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-3xl italic mb-10 leading-10 font-abel">
          Owen Weis is a name that resonates with innovation and dedication. As
          a senior in high school, this 17-year-old possesses a unique blend of
          creativity and work ethic, transforming the way we perceive high
          school students. Owen thrives on challenges and consistently strives
          to provide clients with the best possible product.
        </p>
        <p className="text-xl italic mb-6 leading-10 font-abel">
          As we delve into the remarkable achievements of Owen Weis, a senior in
          high school, it becomes evident that age is no barrier to greatness.
          At the tender age of 17, Owen has already left an indelible mark on
          the world around him. His outgoing personality and unwavering
          commitment to delivering exceptional results has propelled him to the
          forefront of his peers. Here&apos;s a result of that work.
        </p>
        <p className="text-2xl italic mb-4 font-audiowide">
          Achievements/Awards
        </p>
        <ul className="list-disc list-inside text-xl pl-8 space-y-2 leading-10 font-abel">
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

      <div
        className={`w-2/5 px-8 flex flex-col items-start transition-opacity duration-500 ${
          imageFadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative min-w-[200px] min-h-[200px] lg:w-[450px] lg:h-[550px] xl:w-[700px] xl:h-[600px mb-4] p-2 -m-2 pr-8">
          <Image
            src="/10-IMG_0306.jpg"
            alt="About us"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-md mt-4 italic font-abel">Car Shot</p>
        <p className="italic pt-52 pb-4 text-4xl leading-normal font-abel">
          With all of Achievements My work has been published in the Regis
          Jesuit High school Elevate Magazine
        </p>
        <Link href="/contact">
          <button className="mt-4 py-4 px-14 text-xl rounded-full border-2 text-white hover:bg-white hover:text-black hover:border-black font-abel">
            Work With Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
