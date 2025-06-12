import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import footerLogo from '../assets/img/footer-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#F1C0C9] mt-[140px] w-full flex justify-center">
      <div className="w-full max-w-[1140px] mt-10 py-10 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/3">
            <img
              src={footerLogo}
              alt="Footer Logo"
              className="max-w-[180px]"
            />
            <p className="text-[#5c5b5b] pt-3 text-sm mb-7 sm:text-base leading-relaxed">
              Donec nec justo eget felis facilisis fermentum. <br />
              Aliquam porttitor mauris sit amet orci. Aenean <br />
              dignissim pellente squefelis.
            </p>
            <div className="flex gap-6 mt-4 text-xl">
              <FaFacebook className="text-gray-600 hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="text-gray-600 hover:text-sky-500 cursor-pointer" />
              <FaInstagram className="text-gray-600 hover:text-pink-500 cursor-pointer" />
            </div>
          </div>

          <div className="md:w-1/3">
            <h2 className="font-bold text-lg">Newsletter</h2>
            <p className="text-[#5c5b5b] pt-3 text-sm sm:text-base leading-relaxed">
              Morbi in sem quis dui placerat ornare. <br />
              Pellentesque odionisi euismod in pharetra
            </p>
            <div className="flex w-full mt-5">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white py-3 px-5 border border-gray-300 focus:outline-none focus:border-[#D0324B] w-full rounded-l-md rounded-r-none"
              />
              <button
                className="bg-[#D0324B] py-3 px-6 text-white hover:bg-red-600 cursor-pointer rounded-r-md rounded-l-none transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="md:w-1/3 mb-28">
            <h2 className="font-bold text-lg">How To Find Us</h2>
            <div className="flex items-start gap-2 pt-3">
              <FaLocationDot className="text-gray-700 mt-1" />
              <p className="text-[#5c5b5b] text-sm sm:text-base">
                Avenue Marina 34568 NY (U.S)
              </p>
            </div>
            <div className="flex items-start gap-2 pt-3">
              <FaPhoneAlt className="text-gray-700 mt-1" />
              <a href="" className="text-[#5c5b5b] text-sm sm:text-base">
                +0987 193-34-76
              </a>
            </div>
            <div className="flex items-start gap-2 pt-3">
              <MdEmail className="text-gray-700 mt-1" />
              <a href="" className="text-[#5c5b5b] text-sm sm:text-base">
                julesmichelle@abc.com
              </a>
            </div>
          </div>
        </div>

        <hr className="border-t border-white my-3" />
        <p className="text-[#5c5b5b] text-sm sm:text-base text-center sm:text-left">
          Copyright © 2024 JM Packaging. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
