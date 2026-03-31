function ReadyToTransformSection() {
  return (
    <section className="bg-gradient-to-r from-[#5B34F2] to-[#B317F6]">
      <div className="max-w-[1200px] mx-auto px-6 py-30 text-center flex flex-col items-center">
        <h2 className="text-white text-[28px] md:text-[44px] font-bold leading-[1.2] mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white text-[14px] md:text-[16px] leading-[1.6] max-w-[600px] mb-10">
          Join thousands of professionals who are already using DigiTools to
          work smarter. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <button className="py-4 px-5 h-14 rounded-full bg-white text-[#5B34F2] font-semibold hover:opacity-95 transition">
            Explore Products
          </button>

          <button className="py-4 px-9 h-14 rounded-full border border-white text-white text-[16px] font-semibold hover:bg-white hover:text-[#5B34F2] transition">
            View Pricing
          </button>
        </div>

        <p className="text-white">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default ReadyToTransformSection;
