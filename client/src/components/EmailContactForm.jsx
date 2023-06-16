import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const EmailContactForm = () => {
 const form = useRef();
 const navigate = useNavigate();

 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_k90k66l', 'template_crygw6m', form.current, 'n7HbeAbWpTg9KEEM7')
     .then((result) => {
         // show the user a success message
         console.log("email sent")
     }, (error) => {
         // show the user an error
         console.log(error);
     });

     navigate('/');

 };

 return (

         <section className='min-h-[120vh] w-screen flex justify-center items-center md:pb-[80px] pb-[30vh]'>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center bg-zinc-100/5 py-8 rounded-3xl md:w-[40%] w-full mx-[10%] h-full px-4">
            <h1 className='md:text-[40px] text-[28px] font-black'>Contact Us</h1>
            <p className='text-xs mb-6 text-zinc-100/75'>We will be in touch within <strong>24 hours</strong></p>
        <div className="flex flex-col mb-4 w-[60%]">
     <label className="font-extrabold mb-2">Name</label>
     <input type="text" name="from_name" className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-xs w-full shadow-md"/>
     </div>
     <div className="flex flex-col mb-4 w-[60%]">
     <label className="font-extrabold mb-2">Email</label>
     <input type="email" name="reply_to" className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-xs w-full shadow-md"/>
     </div>
     <div className="flex flex-col mb-4 w-[60%]">
     <label className="font-extrabold mb-2">Message</label>
     <textarea name="message" className="bg-zinc-800/50 rounded-xl px-4 py-2 focus:outline-none focus:stroke-none shadow-md text-xs resize-none w-full"/>
     </div>
     <input type="submit" value="Send" className="bg-zinc-100/30 mt-4 px-6 py-2 rounded-full shadow-md hover:bg-zinc-100 hover:text-zinc-800" />
   </form>
    </section>

   
 );
};

export default EmailContactForm;