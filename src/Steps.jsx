function Steps() {
  return (
    <section className="p-8 space-y-6">
      <h2 className="text-3xl font-semibold">Get started with HireGo in three easy steps.</h2>
      <img src="/public/assets/image-6.png" className="rounded-3xl" />

      <article className="bg-[#F5F5F5] rounded-3xl p-6 space-y-4">
        <div className="space-y-4">
          <div className="flex space-x-4">
            <img src="/public/assets/one.png" className="w-10 h-10" />
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Book a call</h3>
              <p className="text-[#000000A6] text-sm">
                Book a call with our global workforce consultants. We&apos;ll set you up with a free account ready to
                suit your team&apos;s needs.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="bg-[#F5F5F5] rounded-3xl p-6 space-y-4">
        <div className="space-y-4">
          <div className="flex space-x-4">
            <img src="/public/assets/two.png" className="w-10 h-10" />
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Add your people</h3>
              <p className="text-[#000000A6] text-sm">
                From new hires to your existing workforce, onboard effortlessly with our self-serve platform.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article className="bg-[#F5F5F5] rounded-3xl p-6 space-y-4">
        <div className="space-y-4">
          <div className="flex space-x-4">
            <img src="/public/assets/three.png" className="w-10 h-10" />
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Dedicated onboarding</h3>
              <p className="text-[#000000A6] text-sm">
                From navigating local laws to support for your team members, our dedicated team will help you get set up
                seamlessly.
              </p>
              <button className="bg-white rounded-full flex items-center px-6 py-2 font-semibold border border-solid border-[#000000A6]">
                Start Now
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
          </div>
        </div>
      </article>
    </section>
  );
}

export default Steps;
