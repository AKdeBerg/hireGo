function ProcessSection() {
  return (
    <section className="bg-lightBlack rounded-3xl pb-14">
      <h2 className="text-2xl font-bold text-white text-center px-28 py-8">You can do it all. With HireGO.</h2>

      <div className="md:grid md:grid-cols-4 md:gird-rows-2">
        <article className="mb-4 bg-[#FFFFFF1A] text-white p-8 rounded-3xl mx-6 md:col-span-2 md:row-span-2">
          <h3 className="text-2xl font-bold">Hire international talent</h3>
          <p className="mt-4 text-sm text-[#FFFFFFA6]">
            Instead of setting up your own entities, experience the speed of HireGO&apos;s automated global hiring.
            Create compliant employment agreements and set up payroll and benefits—in a matter of clicks.
          </p>
          <button className="mt-4 font-semibold bg-white rounded-full text-black px-6 py-2 flex items-center">
            Hire international talent
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
          <img className="mt-6" src="/public/assets/service.png" />
        </article>

        <article className="mb-4 bg-[#3A5C45] text-white p-8 rounded-3xl mx-6 md:col-span-2">
          <h3 className="text-2xl font-bold">Hire contractors</h3>
          <p className="mt-4 text-sm text-[#FFFFFFA6]">
            Generate, edit, and sign compliant contracts in minutes and access management tools to streamline paperwork,
            onboarding, and payments.
          </p>
          <button className="mt-4 font-semibold bg-white rounded-full text-black px-6 py-2 flex items-center">
            Hire contractors
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
        </article>

        <article className="mb-4 bg-[#B1D8FC] text-[#000000D9] p-8 rounded-3xl mx-6 md:col-span-2">
          <h3 className="text-2xl font-bold">Convert contractors to employees</h3>
          <p className="mt-4 text-sm text-[ #000000A6]">
            Assess global worker misclassification risks and compliantly convert contractors to full-timers, all under
            one platform.
          </p>
          <button className="mt-4 font-semibold bg-white rounded-full text-black px-6 py-2 flex items-center">
            Convert contractors
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
        </article>
      </div>

      <hr className="border-t border-[#FFFFFF29] mx-6 mt-10" />

      <article className="p-8 mx-6 space-y-6">
        <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:justify-between">
          <div className="space-y-2">
            <h2 className="text-6xl font-semibold text-[#B0D9FF]">5,000+</h2>
            <p className="text-base text-white font-thin">Loved by 5,000+ Team Members</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-6xl font-semibold text-[#B0D9FF]">25,000+</h2>
            <p className="text-base text-white font-thin">Trusted by 25,000+ customers</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-6xl font-semibold text-[#B0D9FF]">48 hrs</h2>
            <p className="text-base text-white font-thin">Onboard talent in as little as 48 hours</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProcessSection;
