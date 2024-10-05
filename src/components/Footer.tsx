import hero from '../assets/hero.png';

const Footer = () => {
  return (
    <footer className="bg-[#028d2a] text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
          <div className="flex justify-center lg:w-1/3">
            <a rel="noopener noreferrer" href="#">
              <img src={hero} className='w-32' alt="Company Logo" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-2/3 text-sm gap-x-3 gap-y-8">
            <div className="space-y-3 text-center lg:text-left">
              <h3 className="tracking-wide uppercase font-thin">Address</h3>
              <p className='font-thin'>NO - 438, Eradi Village, Thiruvannamali, TamilNadu - 606808</p>
            </div>
            <div className="space-y-3 font-thin text-center lg:text-left">
              <h3 className="tracking-wide uppercase">Contact</h3>
              <ul className="space-y-1">
                <li><a rel="noopener noreferrer" href="#">+91 9524264089</a></li>
                <li><a rel="noopener noreferrer" href="#">+91 6374268823</a></li>
              </ul>
            </div>
            <div className="space-y-3 text-center lg:text-left">
              <div className="uppercase">Social media</div>
              <div className="flex justify-center space-x-3">
                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                  {/* Facebook Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                    <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                  {/* Twitter Icon */}
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                    <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                  </svg>
                </a>
                <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                  {/* Instagram Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                    <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.093 6.469c-0.073 1.557-0.333 2.405-0.553 2.968-0.291 0.751-0.635 1.276-1.197 1.844-0.557 0.557-1.088 0.901-1.839 1.192-0.563 0.22-1.411 0.48-2.968 0.553-1.688 0.072-2.199 0.093-6.469 0.093s-4.781-0.021-6.469-0.093c-1.557-0.073-2.405-0.333-2.968-0.553-0.751-0.291-1.276-0.635-1.844-1.197-0.557-0.557-0.901-1.088-1.192-1.839-0.22-0.563-0.48-1.411-0.553-2.968-0.072-1.688-0.093-2.199-0.093-6.469s0.021-4.781 0.093-6.469c0.073-1.557 0.333-2.405 0.553-2.968 0.291-0.751 0.635-1.276 1.197-1.844 0.557-0.557 1.088-0.901 1.839-1.192 0.563-0.22 1.411-0.48 2.968-0.553 1.688-0.072 2.199-0.093 6.469-0.093zM16 7.207c-4.848 0-8.793 3.944-8.793 8.793s3.944 8.793 8.793 8.793 8.793-3.944 8.793-8.793-3.944-8.793-8.793-8.793zM16 20.4c-2.488 0-4.513-2.025-4.513-4.513s2.025-4.513 4.513-4.513 4.513 2.025 4.513 4.513-2.025 4.513-4.513 4.513zM20.777 7.56c-.446 0-.846-.353-.846-.846s.354-.846.846-.846.846.353.846.846-.354.846-.846.846z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-6">
          <p className="font-thin">© 2024 Iyal Agro Foods. All Rights Reserved.</p>
          <p className="font-thin">Designed by <a href="">Errofy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
