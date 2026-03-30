function CartSection({ cart, handleRemoveFromCart, handleCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-3xl p-10 md:p-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-3">
          Your cart is empty
        </h3>
        <p className="text-[#6B7280] text-base">
          No products added yet. Click on Products and add your favorite tools.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-3xl p-6 md:p-10">
      <h3 className="text-3xl font-bold text-[#0F172A] mb-8">Your Cart</h3>

      <div className="space-y-5">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-[#F9FAFB] rounded-2xl px-5 py-5 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center overflow-hidden">
                <img src={item.icon} className="w-7 h-7 object-contain" />
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-semibold text-[#0F172A]">
                  {item.name}
                </h4>
                <p className="text-[#6B7280] text-lg">${item.price}</p>
              </div>
            </div>

            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="text-pink-500 font-semibold hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8 mb-8">
        <p className="text-[#6B7280] text-xl">Total:</p>
        <h4 className="text-4xl font-bold text-[#0F172A]">${total}</h4>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full h-14 rounded-full bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white text-lg font-semibold"
      >
        Proceed To Checkout
      </button>
    </div>
  );
}

export default CartSection;
