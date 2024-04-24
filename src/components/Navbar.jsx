import { useState } from "react";
import "boxicons/css/boxicons.min.css";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white fixed w-full  shadow-md z-10">
      <div className=" flex justify-between items-center h-[15vh]  w-[90%]  mx-auto  px-5 py-3  z-10 border-3">
        <div className="rounded-lg overflow-hidden w-24 md:w-32 h-[3rem] md:h-[4rem]">
          <img
            className="w-full h-full object-cover"
            src="../logo.png"
            alt="Logo"
          />
        </div>
        <div className=" hidden md:flex flex-grow justify-center gap-10">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <a href="#" className="text-gray-600 hover:text-black">
            Tour Packages
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Hired a cab
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Hotels
          </a>
          <Link to="/blog" className="text-gray-600 hover:text-black">
            Blogs
          </Link>
        </div>
        <div className="flex items-center">
          <a
            href="#"
            className="border-2 border-black rounded-full p-2 text-gray-600 hover:text-black"
          >
            <i className="bx bxs-user pl-2"></i> My Account
          </a>
        </div>
        <div className="md:hidden z-[9999999999999999999]">
          <button id="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <i className="bx bx-x text-3xl text-white"></i>
            ) : (
              <i className="bx bx-menu text-3xl"></i>
            )}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className={`md:hidden z-[9999] bg-gray-700 absolute top-0 right-0 bottom-0  flex flex-col items-center justify-center h-[100vh] w-full transition-transform duration-1000 ease-in-out ${
              isMobileMenuOpen ? "z-[9999999999999]" : ""
            }`}
          >
            <div className=" text-center">
              <a
                href="#"
                className="text-gray-300 block py-2 px-4 hover:text-white"
              >
                Homeee
              </a>
              <a
                href="#"
                className="text-gray-300 block py-2 px-4 hover:text-white"
              >
                Tour Packages
              </a>
              <a
                href="#"
                className="text-gray-300 block py-2 px-4 hover:text-white"
              >
                Hired a cab
              </a>
              <a
                href="#"
                className="text-gray-300 block py-2 px-4 hover:text-white"
              >
                Hotels
              </a>
              <a
                href="#"
                className="text-gray-300 block py-2 px-4 hover:text-white"
              >
                Blogs
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
