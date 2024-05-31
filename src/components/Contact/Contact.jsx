// import React from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// eslint-disable-next-line no-unused-vars
const Contact = (_props) => {
  const form = useRef();

  // service_v5l2ayf

  //service_lxns5yg

  //Templateid - template_c6ws9u5 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lxns5yg', 'template_c6ws9u5', form.current, {
        publicKey: 'UUQQRk5NVmJ2mP7AD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
    <>
    <section className="bg-white dark:bg-white-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Reach Out to us!</p>
      <form ref={form} action="#" className="space-y-8" onSubmit={sendEmail}>
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-white-900 dark:text-black-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-black-900 dark:text-black-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-black-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-black-900 dark:text-black-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-yellow-300" value="Send">Send message</button>
          {/* <EmailContent/> */}
      </form>
  </div>
</section>
    
    </>

  )
}

export default Contact