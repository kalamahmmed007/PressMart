import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleWishlist } from '../../redux/slices/cartSlice';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.cart);
  const isInWishlist = wishlist.includes(product._id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success('Added to cart!');
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    dispatch(toggleWishlist(product._id));
    toast.success(isInWishlist ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const discountPercent = product.comparePrice
    ? Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)
    : 0;

  return (
    <Link to={`/products/${product._id}`} className="group">
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={product.images?.[0] || '/placeholder.jpg'}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23ddd" width="300" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
            }}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.onSale && (
              <span className="bg-primary text-white text-xs px-3 py-1 rounded">
                {discountPercent}% Off
              </span>
            )}
            {product.featured && (
              <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded">
                Hot Deal
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
            <button
              onClick={handleToggleWishlist}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition ${
                isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-700 hover:bg-red-500 hover:text-white'
              }`}
            >
              <FiHeart size={18} fill={isInWishlist ? 'currentColor' : 'none'} />
            </button>
            <Link
              to={`/products/${product._id}`}
              className="w-10 h-10 bg-white text-gray-700 hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition"
            >
              <FiEye size={18} />
            </Link>
          </div>

          {/* Add to Cart Button - Shows on Hover */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-0 left-0 right-0 bg-primary text-white py-2 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition transform translate-y-full group-hover:translate-y-0"
          >
            <FiShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Category */}
          <p className="text-xs text-gray-500 mb-1">{product.category}</p>

          {/* Product Name */}
          <h3 className="font-medium text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.floor(product.rating || 0) ? '★' : '☆'}
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.numReviews || 0})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-primary">
              ${product.price?.toFixed(2)}
            </span>
            {product.comparePrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.comparePrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;