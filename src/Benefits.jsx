function Benefits() {
  return (
    <section className="bg-[#F5F5F5] p-8 space-y-4">
      <h2 className="text-2xl font-bold text-center px-16 py-8">
        Take your business
        <br /> to the next level.
      </h2>

      <article className="space-y-4 md:flex md:gap-4">
        <div className="md:order-2">
          <img src="/assets/image-3.png" />
        </div>
        <div className="space-y-4 md:self-center">
          <h3 className="text-2xl font-semibold text-[#FD852F] pr-24">Culture and performance. It&apos;s up and up.</h3>
          <p className="text-[#00000073] text-sm">
            Develop feedback loops, set KPIs and design custom performance reviews. Quickly build a positive performance
            culture for your business — where everyone is aiming for the same goals.
          </p>
          <button className="bg-white rounded-full flex items-center px-6 py-2 font-semibold border border-solid border-[#000000A6]">
            Performance Management
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

      <article className="space-y-4 md:flex md:gap-4">
        <div>
          <img src="/assets/image-4.png" className="md:rounded-3xl" />
        </div>
        <div className="space-y-4 md:self-center">
          <h3 className="text-2xl font-semibold text-[#9149ED] pr-32">It&apos;s payroll software. Just faster.</h3>
          <p className="text-[#00000073] text-sm">
            Save your time, pay your people with automated payroll. Enjoy the benefits of Real Time Information (RTI)
            and take care of workforce planning - all in one simple place.
          </p>
          <button className="bg-white rounded-full flex items-center px-6 py-2 font-semibold border border-solid border-[#000000A6]">
            Payroll Features
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

export default Benefits;
