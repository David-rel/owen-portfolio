import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/footer.module.css"; // Adjust the path if necessary
import Link from "next/link";
import { throttle } from "lodash";
import { useRouter } from "next/router";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef();

  const checkTextVisibility = throttle(() => {
    const rect = textRef.current.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
    setIsVisible(isVisible);
  }, 200);

  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", checkTextVisibility);
    return () => {
      window.removeEventListener("scroll", checkTextVisibility);
    };
  }, []);

  return (
    <div
      className={`${styles.footer} ${
        router.pathname === "/portfolio" ? styles.noSlant : ""
      }`}
    >
      <div
        ref={textRef}
        className={`${isVisible ? styles.fadeIn : styles.fadeOut} pl-14`}
      >
        <h1 className="text-black pb-4">Owen Weis</h1>
        <h1 className="text-black">A photo away from your next event</h1>
        <p className={styles.footerMessage}>
          Website created by:{" "}
          <Link
            href="https://www.instagram.com/"
            className="text-blue-600 underline"
          >
            @David-Rel
          </Link>{" "}
          <Link
            href="https://my-portfolio-ccab3.web.app/"
            className="text-blue-600 underline"
          >
            Website
          </Link>
          ,{" "}
          <Link
            href="https://www.buymeacoffee.com/DavidFales"
            className="text-blue-600 underline"
          >
            Buy Me A Coffee
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
