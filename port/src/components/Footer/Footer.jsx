import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {

  const handleScroll = (sectionId)=>{
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({behavior:'smooth'})
    }
  }
  return (
    <footer className=' text-white py-8 px-[7vw] md:px-[7vw] lg:px-[18vw] font-sans'>
      <div className='text-center mx-auto'>
        <h2 className='font-semibold text-2xl text-purple-500'>Bishnu Singh</h2>
        
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            {name:"About", id:"about"},
            {name:"Skills", id:"skills"},
            {name:"Experience", id:"experience"},
            {name:"Projects", id:"work"},
            {name:"Education", id:"education"},
          ]
          .map((item, index)=>(
            <button
            key={index}
            className='hover:text-purple-500 text-sm sm:text-base my-1'
            onClick={()=>{handleScroll(item.id)}}
            >{item.name}</button>
          ))
          }
        </nav>

        <div className='flex flex-wrap space-x-5 justify-center mt-6'>
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/tarun.kaushik.3511041/" },
            { icon: <FaTwitter />, link: "https://twitter.com/CodingMaster6?s=09" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tarun-kaushik-553b441a4" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/coding_.master/" },
            { icon: <FaYoutube />, link: "https://www.youtube.com/codingmasteryt" },
          ]
          .map((item, index)=>(
            <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110'
            >
              {item.icon}
            </a>
          ))
          }
        </div>

         <p className="text-sm text-gray-400 mt-6">
          © 2025 Tarun Kaushik. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer