function Pricing() {
    return (
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
              Pricing Plans
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Choose a plan that fits your needs. All plans include access to our core features.
            </p>
            <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button className="py-2 px-4 bg-indigo-500 text-white focus:outline-none transition-colors duration-300 hover:bg-indigo-600">
                Monthly
              </button>
              <button className="py-2 px-4 focus:outline-none transition-colors duration-300 hover:bg-gray-200">
                Annually
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {["START", "PRO", "BUSINESS", "SPECIAL"].map((plan, index) => (
              <div key={plan} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                <div className={`h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg ${index === 1 ? 'border-indigo-500' : 'border-gray-300'}`}>
                  {index === 1 && (
                    <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                      POPULAR
                    </span>
                  )}
                  <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-gray-800">
                    {plan}
                  </h2>
                  <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>${plan === "START" ? "0" : plan === "PRO" ? "38" : plan === "BUSINESS" ? "56" : "72"}</span>
                    <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                  </h1>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    Feature {index * 3 + 1}
                  </p>
                  <p className="flex items-center text-gray-600 mb-2">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    Feature {index * 3 + 2}
                  </p>
                  <p className="flex items-center text-gray-600 mb-6">
                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    Feature {index * 3 + 3}
                  </p>
                  <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded transition-colors duration-300">
                    Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                  <p className="text-xs text-gray-500 mt-3">
                    A brief description of what is included in this plan.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Pricing;
  