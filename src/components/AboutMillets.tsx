const About = () => {
	return (
	  <div>
		<section className="my-10 py-14 bg-gray-200" id="about">
		  <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
			<h1 className="text-4xl font-bold leading-none uppercase text-center">
			  About Us
			</h1>
		  </div>
		  <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
			<div className="flex flex-col items-center mx-6 lg:mx-0">
			  <div className="relative text-center">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  viewBox="0 0 512 512"
				  fill="currentColor"
				  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
				>
				  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
				  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-1 text-gray-400 text-lg italic">
				  Iyal Agro Foods was established -2024. Iyal Agro Food is an FMCG
				  based food company that supplies{" "}
				  <span className="text-gray-700 font-semibold">
					{" "}
					Natural, Traditional, Organic (Semi-organic){" "}
				  </span>{" "}
				  food products from India. Including{" "}
				  <span className="text-gray-700 font-semibold">
					Product manufacturing, Wholesaling, and Repacking service in
					the own & Private labels.
				  </span>{" "}
				  Iyal agro foods with an intent to bring a “Healthy and
				  Nutritional “wide range of Indian food products{" "}
				</p>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  viewBox="0 0 512 512"
				  fill="currentColor"
				  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
				>
				  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
				  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			  </div>
			  <span className="w-12 h-1 my-2 rounded-lg dark:bg-green-600"></span>
			  <p>IyalAgroFoods</p>
			</div>
			<div className="flex flex-col items-center mx-6 lg:mx-0">
			  <div className="relative text-center">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  viewBox="0 0 512 512"
				  className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
				>
				  <path
					fill="currentColor"
					d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
				  ></path>
				  <path
					fill="currentColor"
					d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
				  ></path>
				</svg>
				<p className="px-6 py-1 text-gray-400 text-lg italic">
				  Iyal agro foods with an intent to bring a “Healthy and
				  Nutritional “wide range of Indian food products such as{" "}
				  <span className="text-gray-700 font-semibold">
					{" "}
					“Millets, Traditional Rice, Jaggery Powder, and Millet-based
					Ready to Eat and Ready to Cook Products”
				  </span>
				  . We enable this by sourcing our Food Factory and processing it
				  in a safe and hygienic environment and supplying to different
				  parts of India.
				</p>
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  viewBox="0 0 512 512"
				  className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
				>
				  <path
					fill="currentColor"
					d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
				  ></path>
				  <path
					fill="currentColor"
					d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
				  ></path>
				</svg>
			  </div>
			  <span className="w-12 h-1 my-2 rounded-lg dark:bg-green-600"></span>
			  <p>IyalAgroFoods</p>
			</div>
		  </div>
		</section>
	  </div>
	);
  };
  
  export default About;
  