import Head from "next/head";
import { CloudinaryContext, Image as CloudinaryImage } from "cloudinary-react";
import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";

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

function Cars() {
  const [images, setImages] = useState([]);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    fetch("/api/getMiscId")
      .then((response) => response.json())
      .then((data) => setImages(data.publicIds));
    setTimeout(() => setIsTitleVisible(true), 500); // Delay of 500ms before the title becomes visible
  }, []);

  return (
    <div className="pt-36">
      <Head>
        <title>Miscellaneous Photography - Owenw.Photography</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
      </Head>

      <Transition
        show={isTitleVisible}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="flex flex-col items-center justify-center text-center p-4">
          <h2 className="font-bold text-8xl mb-2">Miscellaneous Photography</h2>
          <p>These are the photos for the miscellaneous photography.</p>
        </div>
      </Transition>

      <div className={`p-5 grid-container`}>
        {images.map((photo) => (
          <GridItem key={photo} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default Cars;
