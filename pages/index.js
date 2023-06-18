import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import NextImage from "next/image";
import Head from "next/head";
import Link from "next/link";

const GridItem = ({ photo, setLoadCount, totalImages }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    console.log(`Image ${photo} has loaded.`);
    setLoadCount((count) => count + 1);
    setLoaded(true);
  };

  const handleError = () => {
    console.error(`Failed to load image: ${photo}`);
  };

    useEffect(() => {
      console.log("inView:", inView);
      console.log("Loaded:", loaded);
    }, [inView, loaded]);

  return (
    <div ref={ref} className="grid-item grid-item-1">
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loaded ? 1 : 0 }}
            transition={{ duration: 2 }} // Increase the duration from 1 to 2
          >
            <NextImage
              src={`/main/${photo}`}
              alt=""
              layout="responsive"
              width={500}
              height={500}
              onLoadingComplete={handleLoad}
              onError={handleError}
              className={`bg-black ${
                inView
                  ? "hover:opacity-100 transition-opacity duration-1000"
                  : "opacity-0"
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ...

export default function Home() {
  const [images, setImages] = useState([]);
  const [loadCount, setLoadCount] = useState(0);

  useEffect(() => {
    fetch("/main/images.json")
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div>
      <main className="pt-36">
        <Head>
          <title>Owenw.Photography</title>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
            integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
            crossorigin="anonymous"
          />
        </Head>
        <div className="grid-container">
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

      {/* New section with gray background, title, and description */}
      <section className="main bg-gray-200 p-6 p-4">
        <h2 className="text-2xl mb-4 text-black pl-8">
          <Link href="/about" className="text-red-600 underline">
            About Me
          </Link>{" "}
          - Owen Weis, Photographer and Videographer
        </h2>
        <p className="text-black leading-10 w-4/5 pl-8">
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
        </p>
      </section>
    </div>
  );
}

