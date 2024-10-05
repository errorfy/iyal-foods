import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <header className="bg-white border border-gray-300 z-50 sticky top-0 ">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={logo} className="h-14 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to="images" // Add your Products component ID here
            smooth={true}
            duration={2000}
            className="flex items-center outline-none gap-x-1 text-lg font-semibold leading-6 text-gray-500 cursor-pointer"
            onClick={handleMenuItemClick} // Close mobile menu on click
          >
            Products
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={2000}
            className="cursor-pointer text-lg  font-semibold leading-6 text-gray-500 relative group"
            onClick={handleMenuItemClick} // Close mobile menu on click
          >
            About
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={2000}
            className="text-lg font-semibold leading-6 text-gray-500 relative group"
            onClick={handleMenuItemClick} // Close mobile menu on click
          >
            Services
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
          <Link
            to="choose"
            smooth={true}
            duration={2000}
            className="text-lg font-semibold leading-6 text-gray-500 relative group"
            onClick={handleMenuItemClick} // Close mobile menu on click
          >
            Why Choose Us?
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="contact"
            smooth={true}
            duration={2000}
            className="text-lg font-semibold leading-6 text-gray-500"
            onClick={handleMenuItemClick} // Close mobile menu on click
          >
            Contact Us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-16">
                <Link
                  to="images"
                  smooth={true}
                  duration={2000}
                  className="block rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  onClick={handleMenuItemClick} // Close mobile menu on click
                >
                  Products
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  duration={2000}
                  className="block rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  onClick={handleMenuItemClick} // Close mobile menu on click
                >
                  About
                </Link>
                <Link
                  to="services"
                  smooth={true}
                  duration={2000}
                  className="block rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  onClick={handleMenuItemClick} // Close mobile menu on click
                >
                  Services
                </Link>
                <Link
                  to="choose"
                  smooth={true}
                  duration={2000}
                  className="block rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  onClick={handleMenuItemClick} // Close mobile menu on click
                >
                  Why Choose Us?
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={2000}
                  className="block rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  onClick={handleMenuItemClick} // Close mobile menu on click
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
