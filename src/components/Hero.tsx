import hero from "../assets/heroimg.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <section className="bg-white text-gray-800">
        <div className="container max-w-7xl flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex  flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl animate-fadeInUp duration-500">
              Bringing <span className="text-[#328d2a]">Nature's</span>{" "}
              <br className="sm:hidden" />
              Goodness to Your Plate
            </h1>
            <p className="mt-6 mb-8 text-lg text-gray-400 sm:mb-12">
            Welcome to Iyal foods, Rural food brand  exclusively exporting to urban areas.Bringing the richness of nutrients and proteins to our plates
              <br className="hidden md:inline lg:hidden" />
              {/* turpis pulvinar, est scelerisque ligula sem */}
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="images"
                smooth={true}
                duration={2000}
                className="px-8 py-3 text-lg font-semibold rounded bg-[#328d2a] text-gray-50"
              >
                Explore Our Products
              </Link>
              <Link
                rel="noopener noreferrer"
                to="about"
                smooth={true}
                duration={2000}
                className="px-8 py-3 text-lg font-semibold border rounded border-gray-800"
              >
                Read More
              </Link>
            </div>
          </div>
          {/* <div className="flex items-center  justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-96 lg:h-96 xl:h-112 2xl:h-128"> */}
            <img
              src={hero}
              alt=""
              className="object-contain w-full lg:w-1/2 xl:w-[600px] h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128  rounded-lg  animate-move"
            />
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
