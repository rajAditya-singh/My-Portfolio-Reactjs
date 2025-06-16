import React, { useState } from 'react'
import { projects } from '../../constants'
function Work() {

  const [selectedProject, setSelectedProject] = useState(null)
  const handleOpenModel = (project) => {
    setSelectedProject(project)
  }
  const handleCloseModel = () => {
    setSelectedProject(null)
  }

  return (
    <section
      id='work'
      className='py-24 pb-24 px-[5vw] md:px-[5vw] lg:px-[12vw] font-sans relative'
    >

      <div className='text-center mb-16'>
        <h2 className='text-white text-4xl font-bold'>PROJECTS</h2>
        <div className=' w-32 h-1 bg-purple-500 mx-auto mt-4 '></div>
        <p className='text-gray-400 text-lg font-semibold mt-4'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>
      </div>

      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModel(project)}
            className='border border-white bg-gray-900 rounded-2xl backdrop-blur-md shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'
          >
            <div className=' p-4 '>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-xl' />
            </div>
            <div className='p-6'>
              <h3 className='text-white font-bold text-xl mb-2'>{project.title}</h3>
              <p className='text-gray-500 text-sm mb-4 pt-5 line-clamp-3'>{project.description}</p>
              <div className='mb-4'>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='text-xs inline-block bg-[#251f38] text-purple-500 rounded-full font-semibold px-2 py-1 mr-2 mb-2'
                  >{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90'>
          <div className='bg-gray-900 rounded-xl lg:w-full shadow-2xl w-[95%] max-w-3xl overflow-hidden relative px-4'>

            <div className='flex justify-end'>
              <button
                onClick={handleCloseModel}
                className='text-white text-3xl font-bold hover:text-purple-500'
              >
                &times;
              </button>
            </div>

            <div className='flex flex-col'>
              <div className='w-full flex justify-center bg-gray-900 px-4'>
                <img src={selectedProject.image} alt={selectedProject.title}
                  className='lg:w-full w-[95%] rounded-2xl shadow-2xl object-contain ' />
              </div>

              <div className='lg:px-8 px-8 py-1'>
                <h3 className='text-white lg:text-lg text-md mb-1 font-bold'>{selectedProject.title}</h3>
                <p className='text-gray-400 mb-2 lg:text-sm text-xs'>{selectedProject.description}</p>
                <div className='flex flex-wrap gap-2 mb-1 items-center pb-1'>
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='bg-[#251f38] text-purple-500 text-xs font-semibold rounded-full px-2 py-1'
                    >{tag}</span>
                  ))}

                </div>
                <div className='flex space-x-4 justify-between text-white mb-2'>
                  {selectedProject.github && (
                    <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-purple-800  lg:px-4 lg:py-2 px-2 py-2 rounded-lg lg:text-md text-sm font-semibold text-center w-1/2"
                    >
                      View Code
                    </a>
                  )}
                  {selectedProject.webapp && (
                    <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-800  lg:px-4 lg:py-2 px-2 py-2 rounded-lg lg:text-md text-sm font-semibold text-center w-1/2"
                    >
                      View Live
                    </a>
                  )}
                  </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  )
}

export default Work