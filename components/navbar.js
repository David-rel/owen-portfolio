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
      className="fixed top-0 w-full flex justify-between items-center p-12 transition-opacity duration-4000 bg-black"
      style={{ opacity: opacity }}
    >
      <Link href="/" legacyBehavior>
        <h1 className="text-4xl font-bold">Owenw.Photography</h1>
      </Link>

      <nav className="flex items-center">
        <div className="space-x-8 text-lg">
          {[
            ["/", "Home"],
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
