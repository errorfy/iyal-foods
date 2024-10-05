const Choose = () => {
  return (
    <div className="flex flex-col justify-center sm:py-16 lg:flex-row">
      <section id="choose" className="bg-white text-gray-800 lg:w-2/3">
        <div className="container max-w-5xl px-4 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-white">
                <div className="flex justify-center items-center mb-4 md:mb-0">
                  <div className="w-16 h-16 md:w-24 md:h-24">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-full h-full text-yellow-400"
                    >
                      <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                      <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-semibold">Why Choose Us?</h3>
              </div>
            </div>
            <div className="relative col-span-12  space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-8 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-600">
                  <h3 className="text-xl font-semibold tracking-wide text-center sm:text-left">
                    What Are Millets?
                  </h3>
                  <p className="mt-3 text-center sm:text-left px-2 break-words whitespace-normal">
                  Millets are tiny-seeded grasses that are cultivated across the for animal feed and human consumption. Renowned for their high yields, they flourish in hot and arid environments and have been part of the human diet for more than ,7000 years.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-600 mb-6">
                  <h3 className="text-xl font-semibold tracking-wide text-center sm:text-left">
                    Key Types of Millets
                  </h3>
                  <p className="mt-3 text-center sm:text-left px-2 break-words whitespace-normal">
                  Among the various types of millets, Pearl Millet is the most widely grown, followed by Finger Millet and Foxtail Millet. These varieties are essential due to their brief growing periods.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-600 mb-6">
                  <h3 className="text-xl font-semibold tracking-wide text-center sm:text-left">
                    India's Role in Millet Production
                  </h3>
                  <p className="mt-3 text-center sm:text-left px-2 break-words whitespace-normal">
                  India stands as the leading producer of millets, accounting for about 40% of the world's supply. Millets have significantly contributed to the advancement of multi-crop farming practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
