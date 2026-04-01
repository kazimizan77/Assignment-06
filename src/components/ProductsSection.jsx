import ProductCard from "./ProductCard";
import CartSection from "./CartSection";

function ProductsSection({
  products,
  cart,
  activeTab,
  setActiveTab,
  handleAddToCart,
  handleRemoveFromCart,
  handleCheckout,
}) {
  return (
    <section className="px-4 md:px-6 py-[70px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[620px] mx-auto mb-10 md:mb-14">
          <h2 className="text-[28px] sm:text-[34px] md:text-[48px] leading-[1.1] font-bold text-[#0F172A] mb-4">
            Premium Digital Tools
          </h2>

          <p className="text-[#627382FF] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] max-w-[580px] mx-auto">
            Choose from our curated collection of premium digital products
            designed
            <br className="hidden sm:block" />
            to boost your productivity and creativity.
          </p>

          <div className="mt-4 inline-flex items-center bg-white border border-[#E5E7EB] rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-5 sm:px-6 md:px-6 py-2.5 md:py-3 rounded-full text-[13px] sm:text-sm md:text-[16px] font-bold transition ${
                activeTab === "products"
                  ? "bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white shadow-md"
                  : "text-[#1F2937]"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`px-5 sm:px-6 md:px-6 py-2.5 md:py-3 rounded-full text-[13px] sm:text-sm md:text-[16px] font-semibold transition ${
                activeTab === "cart"
                  ? "bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white shadow-md"
                  : "text-[#1F2937]"
              }`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {activeTab === "products" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cart={cart}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <CartSection
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handleCheckout={handleCheckout}
          />
        )}
      </div>
    </section>
  );
}

export default ProductsSection;