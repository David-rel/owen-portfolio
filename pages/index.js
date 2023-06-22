import NextImage from "next/image";
import Link from "next/link";
import { throttle } from "lodash";
import Head from "next/head";
import { CloudinaryContext, Image as CloudinaryImage } from "cloudinary-react";
import { Transition } from "@headlessui/react";
import React, { useEffect, useState, useRef } from "react";

const GridItem = ({ photo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    const currentDomRef = domRef.current; // Capture current ref instance
    observer.observe(currentDomRef);

    return () => {
      if (currentDomRef) {
        // Add null check
        observer.unobserve(currentDomRef);
      }
    };
  }, []);

  return (
    <div className={`p-5 grid-item grid-item-1`} ref={domRef}>
      <CloudinaryContext
        cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
      >
        <CloudinaryImage
          publicId={photo}
          width="425" // adjust to your preference
          crop="scale"
          alt=""
          className={`bg-black ${isVisible ? "fadeIn" : "fadeOut"}`}
        />
      </CloudinaryContext>
    </div>
  );
};


export default function Home() {
  const [images, setImages] = useState([]);
  const [loadCount, setLoadCount] = useState(0);


  useEffect(() => {
    fetch("/api/getMainId")
      .then((response) => response.json())
      .then((data) => setImages(data.publicIds));
  }, []);

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
    <div className="p-">
      <main className="pt-36 pl-0">
        <Head>
          <title>Owenw.Photography</title>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
          />
        </Head>
        <div className={`p-5 grid-container`}>
          {images.map((photo) => (
            <GridItem key={photo} photo={photo} />
          ))}
        </div>
      </main>

      <section className="main bg-gray-200 font-abel">
        <div
          ref={textRef}
          className={`text-2xl mb-4 text-black pl-20 pt-4 ${
            isVisible ? "fadeIn" : "fadeOut"
          }`}
        >
          <Link href="/about" className="text-red-600 underline font-abel">
            About Me
          </Link>{" "}
          - Owen Weis, Photographer and Videographer
        </div>
        <div
          ref={textRef}
          className={`text-black leading-10 w-4/5 pl-20 font-abel text-xl ${
            isVisible ? "fadeIn" : "fadeOut"
          }`}
        >
          Owen Weis is an incredibly talented photographer and videographer,
          specializing in sports, automotive, and portrait photography. My work
          has captivated audiences all around world , and my creative vision has
          allowed him to produce stunning, thought-provoking pieces that truly
          capture the essence of my subjects. I have the unique ability to
          seamlessly blend photography and videography to create dynamic and
          engaging content. My hype videos and other forms of short and
          long-form content are what you need, leaving viewers in awe and eager
          for more. With my skills and expertise, there is no doubt that I will
          continue to produce some of the most captivating and awe-inspiring
          creations for years to come.
        </div>
      </section>
    </div>
  );
}
