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

      <div className="mt-20 p-8 md:flex md:justify-between md:p-0 md:px-12">
        <div className="space-y-8">
          <h2 className="text-3xl text-white">HireGo</h2>
          <div className="flex space-x-6">
            <img src="/public/assets/twitter.png" className="w-10 h-10" />
            <img src="/public/assets/ln.png" className="w-10 h-10" />
            <img src="/public/assets/fb.png" className="w-10 h-10" />
            <img src="/public/assets/ig.png" className="w-10 h-10" />
          </div>
        </div>

        {/* hidden for mobile */}
        <div className="hidden md:flex md:justify-between md:items-start md:space-x-8 md:pr-10">
          <div>
            <h3 className="text-sm font-semibold text-white pb-4">How it works</h3>
            <ul className="text-xs text-[#FFFFFF66] space-y-2">
              <li>Hire Employees</li>
              <li>Hire Contractors</li>
              <li>Run Global Payroll</li>
              <li>App Store</li>
              <li>Open API</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white pb-4">Solutions</h3>
            <ul className="text-xs text-[#FFFFFF66] space-y-2">
              <li>Compliance</li>
              <li>Payments</li>
              <li>For Finance Teams</li>
              <li>For Legal Teams</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div className="pb-8">
            <h3 className="text-sm font-semibold text-white pb-4">Resources</h3>
            <ul className="text-xs text-[#FFFFFF66] space-y-2">
              <li>About</li>
              <li>Blog</li>
              <li>Support Hub</li>
              <li>Global Hiring Guide</li>
              <li>Affiliates</li>
              <li>Careers</li>
              <li>Glossary</li>
              <li>Case Studies</li>
              <li>Press</li>
              <li>Worker Community</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pl-8 md:pl-12 md:pb-6 flex space-x-2 items-center text-sm">
        <img src="/public/assets/globe.png" className="w-4 h-4" />
        <div className="text-white">English</div>
      </div>

      <hr className="border-t border-[#FFFFFF29]  mx-6 my-10 md:my-0" />
      <div className="text-[#FFFFFF66] text-xs p-8 space-y-4 md:p-0 md:py-2 md:px-6 md:flex md:justify-between md:items-center">
        <div>
          <p className="text-white">©Copyright 2024. All Rights Reserved.</p>
        </div>

        <div className="space-y-4 md:space-y-0 md:flex md:gap-4 md:items-center md:pb-3">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Whistleblower Policy</p>
          <p>Cookie policy</p>
          <p>Cookie Settings</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
