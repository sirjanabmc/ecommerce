import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] text-gray-300 py-16 px-6 md:px-12 mt-[140px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4 font-serif">StyleHub</h2>
          <p className="text-gray-400 mb-6 leading-relaxed text-sm">
            Your destination for premium fashion and contemporary style. Discover curated
            collections that define modern elegance.
          </p>
          <div className="flex space-x-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
              >
                <Icon className="text-white text-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Collections", "About Us", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-pink-500 transition text-sm cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            {["Size Guide", "Shipping Info", "Returns & Exchanges", "FAQ"].map(
              (item) => (
                <li key={item} className="hover:text-pink-500 transition cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <HiOutlineLocationMarker className="mt-1 text-pink-500" />
              <span>Butwal 6-2-9, Rupandehi, Nepal</span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlinePhone className="text-pink-500" />
              <span>+977 9742365415</span>
            </li>
            <li className="flex items-center gap-2">
              <HiOutlineMail className="text-pink-500" />
              <span>sirivtri@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© 2024 StyleHub. All rights reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-pink-500 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            Powered by sirivtri
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
