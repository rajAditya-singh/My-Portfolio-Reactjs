import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const [isSent, setIsSent] = useState(false)

  const sendEmail = (e)=>{
    e.preventDefault()

    emailjs
      .sendForm(
        "service_36boyck",
        "template_h1zc0f7", 
        form.current,
        "X76BrGxLHpJeRnd8f"
      )
      .then(
        ()=>{
          setIsSent(true)
          form.current.reset()
          toast.success("Message Sent Successfully! ✅",{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) =>{
          toast.error("Error Sending Message", error)
          toast.error("Failed to Send Message, Please Try Again.",{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      )
  }

  return (
    <section
      id='contact'
      className='flex justify-center items-center flex-col py-20 px-[7vw] md:px-[7vw] lg:px-[18vw] font-sans'
    >
      <ToastContainer />

      <div className='text-center'>
        <h2 className='text-white text-4xl font-bold'>CONTACT</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>I’d love to hear from you—reach out for any opportunities or questions!</p>
      </div>


      <div className='bg-[#0d081f] border border-gray-700 w-full max-w-md p-4 rounded-2xl shadow-lg mt-8'>
        <h3 className='text-white font-semibold text-xl text-center'>Contact With Me <span className='ml-1'>🚀</span>
        </h3>

        <form ref={form}  className='mt-4 flex flex-col space-y-4 p-4'>
          <input
            type="email"
            name="user_email"
            placeholder='Your Email'
            required
            autoComplete="off"
            className='bg-[#0d081f] border text-white border-gray-700 w-full p-4 rounded-lg focus:outline-none focus:border-purple-500' />

          <input
            type="text"
            name="user_name"
            placeholder='Your Name'
            required
            autoComplete="off"
            className='bg-[#0d081f] border text-white border-gray-600 w-full p-4 rounded-lg focus:outline-none focus:border-purple-500' />

          <input
            type="text"
            placeholder='Subject'
            name='subject'
            required
            autoComplete="off"
            className='bg-[#0d081f] border text-white border-gray-600 w-full p-4 rounded-lg focus:outline-none focus:border-purple-500'
          />

          <textarea
            name="message"
            placeholder='Message'
            rows={4}
            required
            autoComplete="off"
            className='bg-[#0d081f] border text-white border-gray-600 w-full p-4 rounded-lg focus:outline-none focus:border-purple-500'
          />

          <button type="submit" onClick={sendEmail}
            className='text-white mt-2 border w-full bg-gradient-to-r from-purple-600 to-pink-500 border-none rounded-md py-3 font-semibold hover:opacity-90 transition'
          >Send</button>
        </form>
      </div>


    </section>
  )
}

export default Contact