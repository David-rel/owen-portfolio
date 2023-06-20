import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { throttle } from "lodash";
import { CloudinaryContext, Image as CloudinaryImage } from "cloudinary-react";

const GridItem = ({ photo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const textRef = useRef();

  const checkTextVisibility = throttle(() => {
    const rect = textRef.current.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    if (isVisible && !hasBeenVisible) {
      setIsVisible(isVisible);
      setHasBeenVisible(true);
    }
  }, 200);

  useEffect(() => {
    checkTextVisibility();
    window.addEventListener("scroll", checkTextVisibility);
    return () => {
      window.removeEventListener("scroll", checkTextVisibility);
    };
  }, []);

  // ... other parts of your code remain the same ...
return (
  <div className={`p-5 grid-item grid-item-1`} ref={textRef}>
    <div>
      <CloudinaryContext
        cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
      >
        <CloudinaryImage
          publicId={photo}
          width="425" // adjust to your preference
          crop="scale"
          alt=""
          className={`bg-black ${isVisible ? "fadeIn" : "fadeOut"}`} // apply fade classes here
        />
      </CloudinaryContext>
    </div>
  </div>
);

};

function Sports() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/getCarId")
      .then((response) => response.json())
      .then((data) => setImages(data.publicIds));
  }, []);

  return (
    <div className="pt-36">
      <Head>
        <title>Automotive Photography - Owenw.Photography</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={`p-5 grid-container`}>
        {images.map((photo) => (
          <GridItem key={photo} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default Sports;
