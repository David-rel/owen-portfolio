import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

function Portfolio() {
  const [bgImage, setBgImage] = useState("initial");

  const handleMouseEnter = (category) => {
    setBgImage(category);
  };

  const handleMouseLeave = () => {
    setBgImage("initial");
  };

  return (
    <div className="pt-36 flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
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
            className="text-8xl text-black"
            onMouseEnter={() => handleMouseEnter("cars")}
            onMouseLeave={handleMouseLeave}
          >
            Cars
          </a>
        </Link>
        <Link href="/portfolio/sports" legacyBehavior>
          <a
            className="text-8xl text-black"
            onMouseEnter={() => handleMouseEnter("sports")}
            onMouseLeave={handleMouseLeave}
          >
            Sports
          </a>
        </Link>
        <Link href="/portfolio/misc" legacyBehavior>
          <a
            className="text-8xl text-black"
            onMouseEnter={() => handleMouseEnter("misc")}
            onMouseLeave={handleMouseLeave}
          >
            Miscellaneous
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
