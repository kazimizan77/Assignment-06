function ReadyToTransformSection() {
  return (
    <section className="bg-gradient-to-r from-[#5B34F2] to-[#B317F6] px-4 md:px-6 py-[90px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center flex flex-col items-center max-w-[820px] mx-auto">
          <h2 className="text-white text-[30px] md:text-[44px] leading-[1.15] font-bold mb-4">
            Ready To Transform Your Workflow?
          </h2>

          <p className="text-white/80 text-[15px] md:text-[18px] leading-[1.7] max-w-[620px] mb-10">
            Join thousands of professionals who are already using DigiTools to
            work smarter. Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-5">
            <button className="btn h-14 min-h-0 px-7 rounded-full border-none bg-white text-[#5B34F2] text-[16px] font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              Explore Products
            </button>

            <button className="btn h-14 min-h-0 px-9 rounded-full border border-white bg-transparent text-white text-[16px] font-semibold transition-all duration-300 hover:bg-white hover:text-[#5B34F2] hover:scale-[1.02]">
              View Pricing
            </button>
          </div>

          <p className="text-white/85 text-[14px] md:text-[16px] leading-[1.6]">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

export default ReadyToTransformSection;
