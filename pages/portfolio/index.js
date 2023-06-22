import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Portfolio() {
  const [bgImage, setBgImage] = useState("initial");
  const [loaded, setLoaded] = useState(false);
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  const handleMouseEnter = (category) => {
    setBgImage(category);
    setHover(true)
  };

  const handleMouseLeave = (
  ) => {
    setBgImage("initial");
    setHover(false)
  };

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      <Head>
        <title>Portfolio - Owenw.Photography</title>
      </Head>

      <div
        className={`absolute w-full h-full bg-cover transition-opacity duration-500 ${
          bgImage !== "initial" ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url("/3-IMG_2647.jpg")` }}
      />
      <div
        className={`absolute w-full h-full bg-cover transition-opacity duration-500 ${
          bgImage !== "cars" ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url("/4-IMG_0238.jpg")` }}
      />
      <div
        className={`absolute w-full h-full bg-cover transition-opacity duration-500 ${
          bgImage !== "sports" ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url("/5-IMG_0239.jpg")` }}
      />
      <div
        className={`absolute w-full h-full bg-cover transition-opacity duration-500 ${
          bgImage !== "misc" ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url("/8-IMG_0296.jpg")` }}
      />

      <div className="z-10 flex flex-col items-center space-y-10">
        <Link href="/portfolio/cars" legacyBehavior>
          <a
            className={`text-3xl sm:text-5xl lg:text-6xl 2xl:text-8xl transition-colors duration-500 ease-in pb-8 sm:pb-4 pt-20 font-audiowide ${
              loaded ? "text-black" : "text-transparent"
            } ${hover ? "text-white" : "text-black"}`}
            onMouseEnter={() => handleMouseEnter("cars")}
            onMouseLeave={handleMouseLeave}
          >
            Automotive Photography
          </a>
        </Link>
        <Link href="/portfolio/sports" legacyBehavior>
          <a
            className={`text-3xl sm:text-5xl lg:text-6xl 2xl:text-8xl transition-colors duration-500 ease-in pb-8 sm:pb-4 font-audiowide ${
              loaded ? "text-black" : "text-transparent"
            } ${hover ? "text-white" : "text-black"}`}
            onMouseEnter={() => handleMouseEnter("sports")}
            onMouseLeave={handleMouseLeave}
          >
            Sports Photography
          </a>
        </Link>
        <Link href="/portfolio/misc" legacyBehavior>
          <a
            className={`text-3xl sm:text-5xl lg:text-6xl 2xl:text-8xl transition-colors duration-500 ease-in pb-8 sm:pb-4 font-audiowide ${
              loaded ? "text-black" : "text-transparent"
            } ${hover ? "text-white" : "text-black"}`}
            onMouseEnter={() => handleMouseEnter("misc")}
            onMouseLeave={handleMouseLeave}
          >
            Miscellaneous Photography
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
