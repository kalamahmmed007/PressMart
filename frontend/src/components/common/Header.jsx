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