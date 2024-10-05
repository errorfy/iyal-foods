const About = () => {
  return (
    <div>
      <section className="my-10 py-4 sm:py-2 bg-green-50 rounded" id="about">
        <div className="container mx-auto flex flex-col items-center pb-3 md:p-10 md:px-12">
          <h1 className="text-4xl font-bold text-[#338e2b] leading-none uppercase text-center">
            About Us
          </h1>
        </div>
        <div className="container mx-auto flex justify-center items-center md:px-10 md:pb-10">
          {/* Second Column */}
          <div className="flex flex-col items-center justify-center mx-6 lg:mx-0">
            <div className="relative text-center">
              <p className=" py-1 text-black text-lg  md:px-6">
                Millets is a group of small-seeded grains that are an excellent choice.{" "} 
                <span className="">
                  Millets are generally considered to be more nutritious than rice 
                </span>
                . As a good source of fiber, iron, calcium, and other beneficial nutrients,it can play a valuable role in a healthy diet. Millets are ideal for lunch, breakfast, or tea-time snacks.
              </p>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-green-600"></span>
            <p className="text-green-800 text-xl font-bold">IyalAgroFoods</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
