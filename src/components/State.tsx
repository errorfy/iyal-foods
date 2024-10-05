import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const State = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensures the animation runs only once when in view
    threshold: 0.3, // Triggers when 30% of the component is visible
  });

  return (
    <div ref={ref}>
      <section className="p-6 bg-gray-100 text-[#338e2b]">
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              {inView && <CountUp end={50} duration={2} />}+
            </p>
            <p className="text-sm sm:text-base">Clients</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              {inView && <CountUp end={8} duration={3} />}+
            </p>
            <p className="text-sm sm:text-base">Products</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              {inView && <CountUp end={400} duration={1.5} />}+
            </p>
            <p className="text-sm sm:text-base">Our Farmer's</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              {inView && <CountUp end={85} duration={2} />}+
            </p>
            <p className="text-sm sm:text-base">Satisfied Customers</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              {inView && <CountUp end={1000} duration={2.5} />}+
            </p>
            <p className="text-sm sm:text-base">Farms Supported</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              {inView && <CountUp end={8} duration={2} />}+
            </p>
            <p className="text-sm sm:text-base">Products Available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default State;
