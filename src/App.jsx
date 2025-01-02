import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="bg-white p-4 container mx-auto flex justify-between items-center">
        <h1 className="text-black text-2xl font-bold">HireGo</h1>
        <nav>
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
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
            <div className="absolute top-12 right-4 bg-white shadow-lg rounded-lg p-4">
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
              </ul>
            </div>
          )}
        </nav>
      </div>
      <div className="bg-lightBlue pb-10 rounded-b-3xl">
        <div>
          <h2 className="text-5xl text-black font-semibold text-left pt-8 pb-2 pl-4 pr-16">
            HireGO is your all-in-one Global People Platform
          </h2>
          <ul className="list-none pl-4">
            <li className="flex items-center py-2">
              <img src="/public/assets/Check_ring.png" className="w-6 h-6 mr-2" />
              <span className="text-slate-600">G3&apos;s Leader in global employment platforms</span>
            </li>
            <li className="flex items-center py-2">
              <img src="/public/assets/Check_ring.png" className="w-6 h-6 mr-2" />
              <span className="text-slate-600">90% customer satisfaction rate</span>
            </li>
          </ul>

          <button className="m-4 bg-black text-white p-3 rounded-full">Request a demo &nbsp;&gt;</button>
        </div>
        <div className="flex justify-center">
          <img src="/public/assets/hero.png" className="w-80" />
        </div>
      </div>
    </header>
  );
}
