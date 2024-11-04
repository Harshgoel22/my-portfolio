import React, { useState, useEffect } from "react";
import navlinks from "../data/NavLinks";
import dark_img from "../assets/myimg_light.png";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinks = (e, key) => {
    try {
      const id = e.target.id;
      const element = document.getElementById(id);
      if (element) {
        element.classList[key]("text-yellow-600", "scale-105");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        navbar.classList.add("animate-slide-up");
        navbar.classList.remove("animate-slide-down");
      } else {
        navbar.classList.add("animate-slide-down");
        navbar.classList.remove("animate-slide-up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="navbar"
      className="flex items-center justify-between p-2 pl-1 pr-1 fixed top-0 w-full bg-gradient-to-br from-sky-950 via-cyan-950 to-teal-950 opacity-50 shadow-lg transition-transform duration-300"
    >
      <a href="#myid0">
        <div className="flex p-1 m-2 ml-6">
          <img
            src={dark_img}
            alt="Logo"
            className="h-14 w-24 m-2 animate-fade-in delay-75 transition-opacity duration-300"
          />
        </div>
      </a>
      <div className="hidden md:flex flex-row p-2 m-8 mr-24">
        <ul className="flex space-x-12">
          {navlinks.map((link) => (
            <li
              key={link.key}
              className="animate-slide-down delay-75 transition-opacity duration-300"
            >
              <a href={`${link.path}`}>
                <p
                  className="text-gray-400 font-serif font-medium"
                  id={`100${link.key}`}
                  onMouseEnter={(e) => handleLinks(e, "add")}
                  onMouseLeave={(e) => handleLinks(e, "remove")}
                >
                  {link.name}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu Icon */}
      <div
        className="md:hidden p-4 cursor-pointer text-gray-400"
        onClick={toggleMobileMenu}
      >
        &#9776; {/* Three horizontal lines */}
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-sky-950">
          <ul className="flex flex-col items-center space-y-4 p-4">
            {navlinks.map((link) => (
              <li key={link.key}>
                <a href={`${link.path}`}>
                  <p
                    className="text-gray-400 font-serif font-medium"
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  >
                    {link.name}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
