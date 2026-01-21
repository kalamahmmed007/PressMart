import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">
              PressMart<span className="text-primary">.</span>
            </h3>
            <p className="text-sm mb-4">
              Your one-stop destination for fashion, electronics, and lifestyle products. Quality guaranteed with fast shipping.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition">
                <FiFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition">
                <FiTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition">
                <FiInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition">
                <FiYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact Us</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition">Shop</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/track-order" className="hover:text-primary transition">Track Order</Link></li>
              <li><Link to="/returns" className="hover:text-primary transition">Returns & Exchange</Link></li>
              <li><Link to="/shipping" className="hover:text-primary transition">Shipping Info</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-primary mt-1" size={18} />
                <span className="text-sm">123 Street Name, City, Country</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-primary" size={18} />
                <span className="text-sm">+(102) 4567 890</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-primary" size={18} />
                <span className="text-sm">support@pressmart.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="text-white font-medium mb-2">Subscribe Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l focus:outline-none focus:border-primary"
                />
                <button className="bg-primary hover:bg-secondary px-4 py-2 rounded-r transition">
                  <FiMail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2024 PressMart. All Rights Reserved. Designed by <span className="text-primary">YourName</span>
            </p>
            <div className="flex items-center gap-4">
              <img src="/payment-methods.png" alt="Payment Methods" className="h-8" 
                onError={(e) => e.target.style.display = 'none'} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;