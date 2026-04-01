function CartSection({ cart, handleRemoveFromCart, handleCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-white border border-[#f2f2f2FF] rounded-3xl p-8 md:p-16 text-center">
        <h3 className="text-[24px] md:text-3xl font-bold text-[#101727FF] mb-3">
          Your cart is empty
        </h3>
        <p className="text-[#627382FF]">
          No products added yet. Click on Products and add your favorite tools.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#f2f2f2FF] rounded-3xl p-5 md:p-10">
      <h3 className="text-[24px] md:text-2xl font-bold text-[#101727FF] mb-6">
        Your Cart
      </h3> 

      <div className="space-y-4 md:space-y-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-[#f9fafcFF] rounded-2xl px-4 md:px-5 py-4 md:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-[#f2f2f2FF] flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={item.icon}
                  className="w-6 h-6 md:w-7 md:h-7 object-contain"
                />
              </div>

              <div>
                <h4 className="text-[18px] md:text-2xl font-semibold text-[#101727FF]">
                  {item.name}
                </h4>
                <p className="text-[#627382FF] text-[14px] md:text-base">
                  ${item.price}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="self-end sm:self-end md:self-auto text-[#ff3980FF] text-[14px] md:text-base font-semibold hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8 mb-8">
        <p className="text-[#627382FF] text-[18px] md:text-xl">Total:</p>
        <h4 className="text-[24px] md:text-2xl font-bold text-[#101727FF]">
          ${total}
        </h4>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full h-12 md:h-14 rounded-full bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white text-[14px] md:text-[16px] font-semibold"
      >
        Proceed To Checkout
      </button>
    </div>
  );
}

export default CartSection;