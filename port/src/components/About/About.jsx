import React from 'react'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/profile2.png'
import Resume from '../../assets/Bishnu_Singh_Nivesh.pdf'

function About() {
  return (
    <section id='about' className='py-4 px-[5vw] md:px-[5vw] lg:px-[12vw] font-sans mt-10 md:mt-10 lg:mt-12'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center space-x-2'>
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-16'>
          <h1 className='text-3xl md:text-7xl sm:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h2 className='text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-2 leading-tight'>
            Bishnu Singh
          </h2>
          <h3 className='text-lg sm:text-2xl md:text-xl lg:text-2xl font-semibold mb-2 text-[#8245ec] leading-tight tracking-tighter space-x-2'>
            <span className='text-white'>
              I am a
            </span>
            <ReactTypingEffect
              text={[
                'Senior Software Engineer',
                'Technical Team Leader',
                'Coder',
              ]}
              speed={50}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec] ">{cursor}</span>
              )}
              className='font-bold ' />
          </h3>
          <p className='text-sm sm:text-lg md:text-lg text-gray-300 mt-2 leading-relaxed'>
            I’m a Technical Team Leader with over 15 years of experience in software development, project management, and delivering enterprise-grade solutions. I’ve led diverse projects across industries using technologies like VB6.0, VB.NET, ASP.NET, RESTful APIs, SQL Server, and Oracle (PL/SQL). Proficient with tools such as Crystal Reports, TOAD, and VSS. I’m passionate about leading collaborative, agile teams that value open communication, innovation, and continuous learning.
            <div className='flex flex-col items-center md:items-start'>
              <p className='space-x-2 font-bold flex flex-row justify-center md:justify-start items-center mt-1'>
                <span className='text-gray-300 font-bold underline-offset-2 underline decoration-[#8245ec]'>
                Domain Specialization
                </span>
              </p>
              <ReactTypingEffect
                text={[
                  'Hospitality Sector',
                  'Textile and Apparel Sector',
                  'Financial Sector',
                ]}
                speed={50}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={1000}
                cursorRenderer={(cursor) => (
                  <span>{cursor}</span>
                )}
                className='font-bold text-[#8245ec] ' />
            </div>
          </p>
          <a
            href="https://drive.google.com/file/d/1k0ZDLC3bNAirqRRVKC7Eg01AWuVg-gLv/view?usp=sharing" target='_blank'
            rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-4 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>
            DOWNLOAD CV
          </a>
        </div>

        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Bishnu Singh"
              className='w-full h-full rounded-full object-cover   drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About