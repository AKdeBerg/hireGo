function Footer() {
  return (
    <section className="bg-[#1B1B1B]">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-3xl text-white font-semibold text-center p-8">
          Work easy.
          <br />
          Grow further with HireGo.
        </h2>
        <button className="bg-white rounded-full flex items-center px-6 py-2 font-semibold border border-solid border-[#000000A6]">
          Request a demo
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <hr className="border-t border-[#FFFFFF29]  mx-6 my-10" />

      <div className="p-8 space-y-8">
        <h2 className="text-3xl text-white">HireGo</h2>
        <div className="flex space-x-6">
          <img src="/public/assets/twitter.png" className="w-10 h-10" />
          <img src="/public/assets/ln.png" className="w-10 h-10" />
          <img src="/public/assets/fb.png" className="w-10 h-10" />
          <img src="/public/assets/ig.png" className="w-10 h-10" />
        </div>
        <div className="flex space-x-2 items-center text-sm">
          <img src="/public/assets/globe.png" className="w-4 h-4" />
          <div className="text-white">English</div>
        </div>
      </div>

      <hr className="border-t border-[#FFFFFF29]  mx-6 my-10" />
      <div className="text-[#FFFFFF66] text-xs p-8 space-y-4">
        <p className="text-white">© Copyright 2024. All Rights Reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Whistleblower Policy</p>
        <p>Cookie policy</p>
        <p>Cookie Settings</p>
      </div>
    </section>
  );
}

export default Footer;
// border-[#FFFFFF29]
// background: #FFFFFF66;
