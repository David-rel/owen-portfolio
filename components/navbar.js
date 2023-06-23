import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import classNames from "classnames";


function Navbar() {
  const router = useRouter();
  const [opacity, setOpacity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalRendered, setIsModalRendered] = useState(false);

  useEffect(() => {
    setOpacity(1);
  }, []);

  const menuItems = [
    ["/", "Home Page"],
    ["/portfolio", "Portfolio"],
    ["/about", "About"],
    ["/contact", "Contact"],
    [
      "https://www.instagram.com/owenw.photography/",
      <FaInstagram key="instagramIcon" />,
      "_blank",
    ],
  ];

  const handleOpenMenu = () => {
    setIsModalRendered(true);
    setTimeout(() => {
      setIsMenuOpen(true);
    }, 50);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      setIsModalRendered(false);
    }, 1000); // match the duration of your transition here
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      handleOpenMenu();
    } else {
      handleCloseMenu();
    }
  };

function HamburgerIcon({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      className={classNames("hamburger", { open: isOpen })}
    >
      <span className="line line1"></span>
      <span className="line line2"></span>
    </button>
  );
}


  return (
    <header
      className="fixed top-0 w-full flex p-12 transition-opacity duration-4000 bg-black z-20"
      style={{ opacity: opacity }}
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-audiowide">
        Owenw.Photography
      </div>
      <div className="flex-grow"></div>
      <nav className="flex items-center">
        <div className="space-x-8 xl:space-x-16 lg:flex hidden">
          {menuItems.map(([href, label, target]) => (
            <Link key={href} href={href} legacyBehavior>
              <a
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : ""}
                className={
                  router.pathname === href
                    ? "underline text-2xl font-abel"
                    : "text-2xl font-abel"
                }
              >
                {label}
              </a>
            </Link>
          ))}
        </div>
        <div className="lg:hidden flex">
          <HamburgerIcon isOpen={isOpen} toggle={toggle} />
        </div>
      </nav>
      {isModalRendered && (
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 modal-overlay ${
            isMenuOpen ? "modal-overlay-open" : ""
          }`}
        >
          <div className="absolute top-0 left-0 w-full flex justify-between items-center p-12">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-audiowide text-white">
              Owenw.Photography
            </div>
            <HamburgerIcon isOpen={isOpen} toggle={toggle} />
          </div>
          <div className="flex flex-col items-center space-y-8">
            {menuItems.map(([href, label, target], index) => (
              <Link key={href} href={href} legacyBehavior>
                <a
                  target={target}
                  rel={target === "_blank" ? "noopener noreferrer" : ""}
                  className={`text-3xl font-abel ${
                    isMenuOpen ? "animate-fadeInLinks" : "animate-fadeOutLinks"
                  } ${
                    router.pathname === href
                      ? "underline text-3xl font-abel"
                      : "text-3xl font-abel"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
                    handleCloseMenu();
                    setIsOpen(false);
                  }}
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
