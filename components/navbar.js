import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const router = useRouter();

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <header
      className="fixed top-0 w-full flex p-12 transition-opacity duration-4000 bg-black z-10"
      style={{ opacity: opacity }}
    >
      <div className="text-4xl font-bold">Owenw.Photography</div>{" "}
      {/* Adonis font */}
      <div className="flex-grow"></div>
      <nav className="flex items-center">
        <div className="space-x-8 text-lg">
          {[
            ["/", "Home Page"],
            ["/portfolio", "Portfolio"],
            ["/about", "About"],
            ["/contact", "Contact"],
          ].map(([href, label]) => (
            <Link key={href} href={href} legacyBehavior>
              <a
                className={
                  router.pathname === href ? "underline text-xl" : "text-xl"
                }
              >
                {label}
              </a>
            </Link>
          ))}
        </div>

        <a
          href="https://www.instagram.com/owenw.photography/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-16 text-2xl"
        >
          <FaInstagram />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
