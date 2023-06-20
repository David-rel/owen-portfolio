import { useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import Head from "next/head";
import Link from "next/link";
import { throttle } from "lodash";

const GridItem = ({ photo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false); // new state variable

  const textRef = useRef();

  const checkTextVisibility = throttle(() => {
    const rect = textRef.current.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isVisible && !hasBeenVisible) {
      // only trigger setIsVisible if it's the first time

      setIsVisible(isVisible);
      setHasBeenVisible(true); // remember that this element has been visible
    }
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
      className={`p-5 grid-item grid-item-1 ${
        isVisible ? "fadeIn" : "fadeOut"
      }`}
      ref={textRef}
    >
      <div>
        <NextImage
          src={`/main/${photo}`}
          alt=""
          layout="responsive"
          width={500}
          height={500}
          className={`bg-black`}
        />
      </div>
    </div>
  );
};

export default function Home() {
  const [images, setImages] = useState([]);
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    fetch("/main/images.json")
      .then((response) => response.json())
      .then((data) => setImages(data));
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
      <main className="pt-36 pl-10">
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
            <GridItem
              key={photo}
              photo={photo}
              setLoadCount={setLoadCount}
              totalImages={images.length}
            />
          ))}
        </div>
      </main>

      <section className="main bg-gray-200">
        <div
          ref={textRef}
          className={`text-2xl mb-4 text-black pl-20 ${
            isVisible ? "fadeIn" : "fadeOut"
          }`}
        >
          <Link href="/about" className="text-red-600 underline">
            About Me
          </Link>{" "}
          - Owen Weis, Photographer and Videographer
        </div>
        <div
          ref={textRef}
          className={`text-black leading-10 w-4/5 pl-20 ${
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
