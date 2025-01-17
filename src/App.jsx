import { useState } from 'react';
import TrustedBy from './TrustedBy';
import ProcessSection from './ProcessSection';
import Benefits from './Benefits';
import HelpProcess from './HelpProcess';
import Steps from './Steps';
import Footer from './Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="bg-white p-4  flex gap-6 justify-between items-center">
          <h1 className="text-black text-2xl font-bold">HireGo</h1>
          {/* desktop nav */}
          <nav className="hidden lg:flex gap-4 items-center justify-between w-full">
            <div className="space-x-4">
              <a href="#products" className="text-black">
                Products
              </a>
              <a href="#solutions" className="text-black">
                Solutions
              </a>
              <a href="#why-hirego" className="text-black">
                Why HireGo
              </a>
              <a href="#pricing" className="text-black">
                Pricing
              </a>
              <a href="#resources" className="text-black">
                Resources
              </a>
            </div>

            <div className="flex gap-2">
              <button className="bg-white text-black border border-solid border-slate rounded-full flex items-center px-6 py-2">
                Log in
              </button>
              <button className="bg-white text-black border border-solid border-slate rounded-full flex items-center px-4 py-2">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v20m0-20a10 10 0 010 20m0-20a10 10 0 010 20"
                  />
                </svg>
                English
              </button>
              <button className="bg-black text-white rounded-full flex items-center px-6 py-2">
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
          </nav>
          {/* mobile nav */}
          <nav>
            <button className="text-white focus:outline-none lg:hidden" onClick={toggleMenu}>
              <svg
                className="w-8 h-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-12 right-4 z-10 bg-white shadow-lg rounded-lg p-4">
                <ul>
                  <li className="py-2">
                    <a href="#products" className="text-black">
                      Products
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#solutions" className="text-black">
                      Solutions
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#why-hirego" className="text-black">
                      Why HireGo
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#pricing" className="text-black">
                      Pricing
                    </a>
                  </li>
                  <li className="py-2">
                    <a href="#pricing" className="text-black">
                      Resources
                    </a>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <button className=" bg-white text-black border border-solid border-slate rounded-full flex items-center px-6 py-2">
                      Log in
                    </button>
                  </li>
                  <li>
                    <button className=" bg-white text-black border border-solid border-slate rounded-full flex items-center px-4 py-2">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v20m0-20a10 10 0 010 20m0-20a10 10 0 010 20"
                        />
                      </svg>
                      English
                    </button>
                  </li>
                  <li>
                    <button className=" bg-black text-white rounded-full flex items-center px-6 py-2">
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
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>

        <div className="bg-lightBlue pb-10 rounded-b-3xl lg:relative lg:pl-10 lg:py-16">
          {/* left side */}
          <div className="lg:w-2/4 md:p-4">
            <h2 className="text-5xl text-black font-semibold text-left pt-8 pb-2 pl-4 pr-16">
              HireGO is your all-in-one Global People Platform
            </h2>
            <ul className="list-none pl-4">
              <li className="flex items-center py-2">
                <img src="/assets/Check_ring.png" className="w-6 h-6 mr-2" />
                <span className="text-slate-600">G3&apos;s Leader in global employment platforms</span>
              </li>
              <li className="flex items-center py-2">
                <img src="/assets/Check_ring.png" className="w-6 h-6 mr-2" />
                <span className="text-slate-600">90% customer satisfaction rate</span>
              </li>
            </ul>

            <button className="m-4 bg-black text-white rounded-full flex items-center px-6 py-2">
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

          {/* right side */}
          <div className="flex justify-center lg:absolute lg:top-20  lg:right-10 lg:transform lg:translate-x-10">
            <img src="/assets/hero.png" className="w-80 sm:w-3/4 md:w-2/4 lg:w-[600px]" />
          </div>
        </div>
      </header>
      <TrustedBy />
      <ProcessSection />
      <Benefits />
      <HelpProcess />
      <Steps />
      <Footer />
    </>
  );
}
