import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[5vw] md:px-[5vw] lg:px-[12vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
      <div className='text-white py-5 flex justify-between items-center'>
        <div className='font-semibold text-lg cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Bishnu </span>
          {/* <span className='text-[#8245ec]'>/</span> */}
          <span className='text-white'>Singh</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        <ul className='hidden md:flex text-gray-200 space-x-8'>
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""
              }`}>
              <button onClick={() => { handleMenuItemClick(item.id) }}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex  space-x-4'>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-gray-200 hover:text-[#8245ec]'
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-gray-200 hover:text-[#8245ec]'
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-3xl text-[#8245ec] cursor-pointer'
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
                onClick={() => setIsOpen(true)}
              />
            )
          }
        </div>
      </div>

      {isOpen && (
        <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden'>
          <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-white
                ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4'>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-white'
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-white'
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar