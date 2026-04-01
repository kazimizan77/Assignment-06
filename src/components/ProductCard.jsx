import { FcCheckmark } from "react-icons/fc";

function ProductCard({ product, cart, handleAddToCart }) {
  const { name, description, price, period, tag, tagType, features, icon } =
    product;

  const isInCart = cart.some((item) => item.id === product.id);

  const tagStyles = {
    popular: "bg-[#e1e7ffFF] text-[#7C3AED]",
    new: "bg-[#dbfce7FF] text-[#0a883eFF]",
    "best-seller": "bg-[#fef3c6FF] text-[#bb4d00FF]",
  };

  return (
    <div className="bg-white border border-[#f2f2f2FF] rounded-2xl p-5 md:p-6 shadow-sm min-h-[360px] flex flex-col transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="w-10 h-10 md:w-11 md:h-11 lg:w-13 lg:h-13 rounded-full bg-white border border-[#f2f2f2FF] flex items-center justify-center overflow-hidden shrink-0">
          <img src={icon} className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain" />
        </div>

        <span
          className={`text-[11px] md:text-sm font-medium px-2.5 md:px-3 py-1 rounded-full whitespace-nowrap ${
            tagStyles[tagType]
          }`}
        >
          {tag}
        </span>
      </div>

      <h3 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold text-[#101727FF] mb-4 leading-tight">
        {name}
      </h3>

      <p className="text-[#627382FF] text-[14px] md:text-[16px] leading-6 mb-1 min-h-auto md:min-h-[70px]">
        {description}
      </p>

      <div className="mb-4">
        <span className="text-[26px] md:text-[28px] font-bold text-[#101727FF]">
          ${price}
        </span>
        <span className="text-[#627382FF]">/{period}</span>
      </div>

      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 sm: text-sm  text-[#627382FF]"
          >
            <FcCheckmark className="shrink-0 h-5 w-5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleAddToCart(product)}
        disabled={isInCart}
        className={`w-full h-11 md:h-12 rounded-full text-[14px] md:text-[16px] text-white font-semibold transition ${
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