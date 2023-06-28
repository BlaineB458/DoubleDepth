import { NavLink } from "react-router-dom"

const CookiePolicy = () => {
  return (
    <section className='flex flex-col pb-[30vh] pt-40 md:pb-0 min-h-[20vh] md:min-h-[150vh] text-left md:px-[20vw] '>
      <h1 className='font-extrabold text-center text-[32px] md:text-[40px]'>Our Cookie Policy</h1>
      <p className='mt-8 font-bold text-zinc-100/80 text-center mb-16 '>Effective Date: 28 June 2023</p>
      <h2 className='my-4 font-bold text-zinc-50 text-[30px]'>What are Cookies?</h2>
      <p className="text-zinc-50/80 font-bold">Cookies are small text files that are stored on your device (computer, mobile device, or tablet) when you visit a website. They are widely used to enhance your browsing experience, personalize content, analyze website performance, and provide targeted advertising.
We use the following types of cookies on our website:<br/> <hr  className="my-2 border-none"/>

<strong className=' font-bold text-[20px] text-zinc-50'>Essential Cookies: </strong>These cookies are necessary for the functioning of our website and enable you to navigate and use its features. They do not require your explicit consent.<br/> <hr  className="my-2 border-none"/>

<strong className=' font-bold text-[20px] text-zinc-50'>Analytics and Performance Cookies:</strong> These cookies help us analyze website traffic, track user interactions, and improve the performance and functionality of our website.<br/> <hr  className="my-2 border-none"/>

<strong className=' font-bold text-[20px] text-zinc-50'>Advertising and Targeting Cookies:</strong> These cookies are used to deliver targeted advertisements and track the effectiveness of our marketing campaigns. They may be set by our advertising partners.<br/> <hr  className="my-2 border-none"/>

<strong className=' font-bold text-[20px] text-zinc-50'>Your Consent</strong><br/> <hr  className="my-2 border-none"/>

By using our website and accepting cookies through your browser settings or through our cookie banner, you consent to the use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or deleting cookies from your device. However, please note that disabling certain cookies may impact your browsing experience on our website.<br/> <hr  className="my-2 border-none"/>

<strong className=' font-bold text-[20px] text-zinc-50'>Third-Party Cookies</strong><br/>  <hr  className="my-2 border-none"/>
We may also allow third-party service providers, such as analytics or advertising partners, to place cookies on our website. These third parties may use cookies to collect information about your online activities over time and across different websites. We do not have control over these third-party cookies, and their use is subject to their own privacy policies.<br/> <hr  className="my-2 border-none"/>




<strong className=' font-bold text-[20px] text-zinc-50'>Your Choices</strong><br/> <hr  className="my-2 border-none"/>
You can manage your cookie preferences and settings through your browser. Most browsers allow you to block or delete cookies. Please refer to your browser's help documentation or settings for more information on how to manage cookies.<br/> <hr  className="my-2 border-none"/>

<strong className=' font-bold text-[20px] text-zinc-50'>Data Protection</strong><br/> <hr  className="my-2 border-none"/>
The use of cookies may involve the processing of personal data. For information on how we handle and protect your personal data, please refer to our Privacy Policy.<br/> <hr  className="my-2 border-none"/>

<strong>Updates to this Policy</strong><br/> <hr  className="my-2 border-none"/>
We may update this Cookie Policy from time to time to reflect changes in our use of cookies or legal requirements. We encourage you to review this policy periodically for any updates.<br/> <hr  className="my-2 border-none"/>

<strong className=' font-bold text-[20px] text-zinc-50'>Contact Us</strong><br/> <hr  className="my-2 border-none"/>
If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us at <NavLink className={'text-sky-500 cursor-pointer'}> here</NavLink>.</p>

    </section>
  )
}

export default CookiePolicy