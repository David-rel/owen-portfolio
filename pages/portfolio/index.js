import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Portfolio() {
  const [bgImage, setBgImage] = useState("initial");
   const [loaded, setLoaded] = useState(false);

   useEffect(() => {
     const timer = setTimeout(() => {
       setLoaded(true);
     }, 1000); // 1 second delay
     return () => clearTimeout(timer);
   }, []);

  const handleMouseEnter = (category) => {
    setBgImage(category);
  };

  const handleMouseLeave = () => {
    setBgImage("initial");
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
        style={{ backgroundImage: `url("/misc/28-IMG_0106.jpg")` }}
      />
      <div
        className={`absolute w-full h-full bg-cover transition-opacity duration-500 ${
          bgImage !== "cars" ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url("/cars/22-IMG_8944.jpg")` }}
      />
      <div
        className={`absolute w-full h-full bg-cover transition-opacity duration-500 ${
          bgImage !== "sports" ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url("/sports/11-IMG_2825.jpg")` }}
      />
      <div
        className={`absolute w-full h-full bg-cover transition-opacity duration-500 ${
          bgImage !== "misc" ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url("/misc/16-IMG_9983.jpg")` }}
      />

      <div className="z-10 flex flex-col items-center space-y-10">
        <Link href="/portfolio/cars" legacyBehavior>
          <a
            className={`text-8xl transition-colors duration-500 ease-in pb-8 ${
              loaded ? "text-black" : "text-transparent"
            }`}
            onMouseEnter={() => handleMouseEnter("cars")}
            onMouseLeave={handleMouseLeave}
          >
            Automotive Photography
          </a>
        </Link>
        <Link href="/portfolio/sports" legacyBehavior>
          <a
            className={`text-8xl transition-colors duration-500 ease-in p-8 ${
              loaded ? "text-black" : "text-transparent"
            }`}
            onMouseEnter={() => handleMouseEnter("sports")}
            onMouseLeave={handleMouseLeave}
          >
            Sports Photography
          </a>
        </Link>
        <Link href="/portfolio/misc" legacyBehavior>
          <a
            className={`text-8xl transition-colors duration-500 ease-in p-8 ${
              loaded ? "text-black" : "text-transparent"
            }`}
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
