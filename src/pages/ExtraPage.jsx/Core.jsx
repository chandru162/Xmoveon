import React from "react"

const Core = () =>{
<section className="w-full bg-white relative ">

                <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-4 ">
                  {/* Content */}
                  <div className="relative mx-2 md:mx-6 lg:mx-4 xl:mx-6">

                    {/* Header */}
                    <div className="flex  mb-12 lg:mb-12">

                      <div className=" me-8 lg:me-16 xl:me-20">
                        <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium text-text-primary ms-4 lg:ms-10 xl:ms-16  ">
                          <span className='bg-[#E4FFD4]'>  Core Marketplace </span> <span> <br />Features</span>
                        </h2>
                      </div>

                      {/* <div className="lg:w-1/2">
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed  mt-4 lg:mt-8 ms-16 lg:ms-12 ">
                Powerful tools to optimize operations,<br /> increase revenue, and delight your  <br />customers.
              </p>
            </div> */}
                    </div>

                    {/* Features Grid - 2 columns */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mx-8 lg:mx-20 ">
                      {features?.map((feature, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-start gap-3">
                            <img src={feature?.icon} alt="" className="w-6 h-6 flex-shrink-0" />
                            <h3 className="text-lg sm:text-lg font-semibold text-text-secondary">
                              {feature?.title}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-text-secondary leading-relaxed pl-11 lg:text-sm">
                            {feature?.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

                    }

                    export default Core ;