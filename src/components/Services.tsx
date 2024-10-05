import { ArrowPathIcon, ShoppingBagIcon, ShoppingCartIcon, TableCellsIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Organic Produce Delivery',
    description:
      'Experience the convenience of having fresh, organic fruits and vegetables delivered straight to your door. We source our produce from local farms to ensure you receive the highest quality and freshest ingredients.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Farm-to-Table Consulting',
    description:
      'Our farm-to-table consulting services help restaurants, cafes, and food businesses source organic and sustainable ingredients. We provide guidance on supplier selection, seasonal menus, and integrating local produce into your offerings.',
    icon: TableCellsIcon,
  },
  {
    name: 'Nutritional Workshops',
    description:
      'Join our workshops to learn more about healthy eating, nutrition, and the benefits of organic foods. Our expert nutritionists offer practical advice and cooking tips to help you make informed food choices.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Eco-Friendly Packaging Solutions',
    description:
      'We are committed to reducing environmental impact by using eco-friendly packaging for all our products. Our sustainable packaging options include compostable materials and recyclable containers.',
    icon: ShoppingBagIcon,
  },
];

export default function Services() {
  return (
    <section id='services'>
      <div className="bg-white sm:py-14 py-8 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">
              <i className="fa-solid fa-handshake-angle"></i>
            </h2>
            <p className="mt-2 text-3xl text-center font-bold tracking-tight uppercase text-[#338e2b] sm:text-4xl">
              Our Services
            </p>
            <p className="mt-6 italic text-lg leading-8 text-gray-600">
              At IyalAgroFoods, we are committed to providing high-quality, nature-inspired products that promote healthy living. Our services include
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative flex items-start p-4 rounded-lg shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-lg bg-green-200">
                    <feature.icon aria-hidden="true" className="h-7 w-7 text-green-800 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                  </div>
                  <div className="ml-2 flex-1">
                    <dt className="text-lg font-bold  leading-10 text-gray-900 whitespace-nowrap">
                      {feature.name}
                    </dt>
                    {/* Uncomment this if you want to show descriptions */}
                    {/* <dd className="mt-2 text-lg leading-7 italic text-gray-600">{feature.description}</dd> */}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
