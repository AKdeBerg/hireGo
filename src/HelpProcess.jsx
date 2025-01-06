function HelpProcess() {
  return (
    <section className="bg-[#323232] py-6">
      <h2 className="text-2xl text-white font-semibold text-center p-10">
        We help teams grow faster <br /> across borders.
      </h2>
      <article className="px-6 md:flex">
        <div className="md:order-2 md:flex-1">
          <img src="/public/assets/image-5.png" className="rounded-t-3xl md:rounded-none md:rounded-r-3xl" />
        </div>

        <div className="bg-[#B1D8FC] p-4 space-y-4 rounded-b-3xl md:rounded-none md:rounded-l-3xl md:flex-1  md:flex md:flex-col md:justify-center">
          <img src="/public/assets/pink_star.png" className="w-10 h-10" />
          <h3 className="text-xl font-semibold lg:pr-24">
            {' '}
            “Saving time and simplifying the process and saving money. It was the triple trifecta.”
          </h3>
          <p>Ally Fekaiki, CEO - Soho, New York</p>
          <button className="bg-white rounded-full flex items-center px-6 py-2 font-semibold border border-solid border-[#000000A6] md:w-40">
            Learn more
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 12h14m-7-7l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </article>
    </section>
  );
}

export default HelpProcess;
