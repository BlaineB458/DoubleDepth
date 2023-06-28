import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const CookieAlert = () => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem('consent')) {
            setTimeout(() => setShowAlert(true), 1000);
            
        }else if(localStorage.getItem('consent') == 'true'){
            setShowAlert(false);
        }

      })

    const handleConsent = () => {
      setShowAlert(false);
      localStorage.setItem('consent', 'true');
      // Save the user's consent to cookies in your preferred storage (e.g., localStorage, cookies).
    };
  
    return (
      <div>
    
          <div className={`fixed z-[999px] left-5 w-[90vw] md:left-[25vw] md:w-[50vw] border-[0.5px] border-zinc-300/20 rounded-xl shadow-md bg-zinc-900/50 text-zinc-50 p-4 text-center backdrop-blur-sm transition-all ease-in-out duration-500 ${showAlert ? 'bottom-5' : '-bottom-[40vh]'}`}>
            <p>
              We use cookies to enhance your experience on our website. <br/> By continuing to use this site, you consent to the
              use of cookies in accordance with our <br/> <NavLink className={'text-sky-500 font-medium cursor-pointer'} onClick={() => setShowAlert(false)} to={'/cookie-policy'}>Cookie Policy</NavLink>.
            </p>
            <button
              className=" hover:bg-zinc-50 hover:text-zinc-900 border-2 rounded-full border-zinc-50 text-white font-bold py-2 px-4 mt-2"
              onClick={handleConsent}
            >
              I Agree
            </button>
          </div>
      </div>
    );
}

export default CookieAlert