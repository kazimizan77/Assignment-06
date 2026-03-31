import { FcCheckmark } from "react-icons/fc";
function ProductCard({ product, cart, handleAddToCart }) {
  const { name, description, price, period, tag, tagType, features, icon } =
    product;

  const isInCart = cart.some((item) => item.id === product.id);

  const tagStyles = {
    popular: "bg-[#EEF2FF] text-[#7C3AED]",
    new: "bg-[#ECFDF3] text-[#16A34A]",
    "best-seller": "bg-[#FFF7ED] text-[#F59E0B]",
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 md:p-6 shadow-sm min-h-[360px] flex flex-col transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-full bg-[#F8FAFC] border border-[#E5E7EB] flex items-center justify-center overflow-hidden">
          <img src={icon} alt={name} className="w-6 h-6 object-contain" />
        </div>

        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            tagStyles[tagType]
          }`}
        >
          {tag}
        </span>
      </div>

      <h3 className="text-[26px] md:text-[30px] font-semibold text-[#0F172A] mb-3 leading-tight">
        {name}
      </h3>

      <p className="text-[#6B7280] text-sm md:text-[15px] leading-6 mb-5 min-h-[70px]">
        {description}
      </p>

      <div className="mb-4">
        <span className="text-[30px] font-bold text-[#0F172A]">${price}</span>
        <span className="text-[#6B7280] text-sm">/{period}</span>
      </div>

      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-[#4B5563]"
          >
            <FcCheckmark />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleAddToCart(product)}
        disabled={isInCart}
        className={`w-full h-12 rounded-full text-white font-semibold transition ${
          isInCart
            ? "bg-[#16A34A] cursor-not-allowed"
            : "bg-gradient-to-r from-[#5B34F2] to-[#B317F6] hover:opacity-95 cursor-pointer"
        }`}
      >
        {isInCart ? "✓ Added to Cart!" : "Buy Now"}
      </button>
    </div>
  );
}

export default ProductCard;
