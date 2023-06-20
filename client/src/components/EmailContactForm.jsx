import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

const EmailContactForm = () => {
 const form = useRef();
 const navigate = useNavigate();

 const [success, setSuccess] = useState(false);

 const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
  
    emailjs
      .sendForm('service_k90k66l', 'template_crygw6m', form.current, 'n7HbeAbWpTg9KEEM7')
      .then((result) => {
        // show the user a success message
        console.log("email sent");
        setSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 3000);
      })
      .catch((error) => {
        // show the user an error
        console.log(error);
        navigate('/auth');
      });
  };

 return (

         <section className='min-h-[120vh] w-screen flex justify-center items-center md:pb-[80px] pb-[30vh]'>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center items-center bg-zinc-100/5 py-8 rounded-3xl md:w-[40%] w-full mx-[10%] h-full px-4">
           {!success && 
           <><h1 className='md:text-[40px] text-[28px] font-black'>Contact Us</h1><p className='text-xs mb-6 text-zinc-100/75'>We will be in touch within <strong>24 hours</strong></p><div className="flex flex-col mb-4 w-full md:w-[60%]">
                     <label className="font-extrabold mb-2">Name</label>
                     <input type="text" name="from_name" className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-xs w-full shadow-md" />
                 </div><div className="flex flex-col mb-4 w-full md:w-[60%]">
                         <label className="font-extrabold mb-2">Email</label>
                         <input type="email" name="reply_to" className="bg-zinc-800/50 rounded-full px-6 py-2 focus:outline-none focus:stroke-none text-xs w-full shadow-md" />
                     </div><div className="flex flex-col mb-4 w-full md:w-[60%]">
                         <label className="font-extrabold mb-2">Message</label>
                         <textarea name="message" className="bg-zinc-800/50 rounded-xl px-4 py-2 focus:outline-none focus:stroke-none shadow-md text-xs resize-none w-full" />
                     </div><input type="submit" value="Send" className="bg-zinc-100/30 mt-4 px-6 py-2 rounded-full shadow-md hover:bg-zinc-100 hover:text-zinc-800" /></> }
            
            {success && 
                <div className='h-full w-full flex flex-col justify-center items-center '> 
                    <svg className='h-[40px] w-[40px] mb-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <h1 className=' text-[28px] font-bold'>Your mail was sent</h1>
                    <p className='text-sm'>Expect a response within 24-hours</p>
                </div>
            }

   </form>
    </section>

   
 );
};

export default EmailContactForm;