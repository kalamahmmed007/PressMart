// ============================================
// 1. src/components/common/Header.jsx
// ============================================
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiSearch, FiUser, FiHeart, FiShoppingCart, FiMenu } from 'react-icons/fi';
import { useState } from 'react';

const Header = () => {
  const { items, wishlist } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-gray-100 py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="mailto:support@pressmart.com" className="flex items-center gap-2 text-gray-600 hover:text-primary">
              📧 support@pressmart.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-600 hover:text-primary">
              📞 +(102) 4567 890
            </a>
          </div>
          <div className="flex gap-4 items-center text-gray-600">
            <span>Welcome to Our Store</span>
            <select className="bg-transparent border-none focus:outline-none cursor-pointer">
              <option>English</option>
              <option>বাংলা</option>
            </select>
            <select className="bg-transparent border-none focus:outline-none cursor-pointer">
              <option>$ Dollar (US)</option>
              <option>৳ Taka (BDT)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/" className="text-3xl font-bold text-gray-800">
              PressMart<span className="text-primary">.</span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for products, categories, sku..."
                  className="flex-1 px-4 py-3 border border-r-0 rounded-l focus:outline-none focus:border-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select className="px-4 py-3 border-t border-b bg-white focus:outline-none">
                  <option>All Categories</option>
                  <option>Men</option>
                  <option>Women</option>
                  <option>Watches</option>
                  <option>Bags & Backpacks</option>
                  <option>Shoes</option>
                  <option>Accessories</option>
                </select>
                <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-r transition">
                  <FiSearch size={20} />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-6">
              <Link to="/account" className="flex flex-col items-center text-gray-700 hover:text-primary transition">
                <FiUser size={24} />
                <span className="text-xs mt-1">My Account</span>
              </Link>

              <Link to="/wishlist" className="flex flex-col items-center text-gray-700 hover:text-primary transition relative">
                <FiHeart size={24} />
                <span className="text-xs mt-1">Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link to="/cart" className="flex flex-col items-center text-gray-700 hover:text-primary transition relative">
                <FiShoppingCart size={24} />
                <span className="text-xs mt-1">Cart</span>
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 bg-secondary px-6 py-4 hover:bg-opacity-90 transition">
              <FiMenu size={20} />
              <span className="font-medium">Shopping by Categories</span>
            </button>

            <div className="flex gap-8 py-4">
              <Link to="/" className="hover:text-gray-200 transition font-medium">Home</Link>
              <Link to="/shop" className="hover:text-gray-200 transition font-medium">Shop</Link>
              <Link to="/pages" className="hover:text-gray-200 transition font-medium">Pages</Link>
              <Link to="/blog" className="hover:text-gray-200 transition font-medium">Blog</Link>
              <Link to="/elements" className="hover:text-gray-200 transition font-medium">Elements</Link>
              <Link to="/buy" className="hover:text-gray-200 transition font-medium">Buy</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


// ============================================
// 2. src/components/common/Footer.jsx
// ============================================
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


// ============================================
// 3. src/components/common/Navbar.jsx
// ============================================
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Pages', path: '/pages' },
    { name: 'Blog', path: '/blog' },
    { name: 'Elements', path: '/elements' },
    { name: 'Buy', path: '/buy' },
  ];

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Categories Button */}
          <button className="flex items-center gap-2 bg-secondary px-6 py-4 hover:bg-opacity-90 transition">
            <FiMenu size={20} />
            <span className="font-medium">Shopping by Categories</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-gray-200 transition font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-secondary">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-2 hover:text-gray-200 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;