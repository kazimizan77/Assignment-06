function Stats() {
  return (
    <section className="mt-0">
      <div className="w-full bg-gradient-to-r from-[#5B32F3] via-[#7B2FFF] to-[#B81FF5]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center text-white">
            <div className="py-5 md:py-0 md:border-r md:border-white/20">
              <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-none font-bold">
                50K+
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-medium text-white">
                Active Users
              </p>
            </div>

            <div className="py-5 md:py-0 md:border-r md:border-white/20">
              <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-none font-bold">
                200+
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-medium text-white">
                Premium Tools
              </p>
            </div>

            <div className="py-5 md:py-0">
              <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-none font-bold">
                4.9
              </h2>
              <p className="mt-3 text-[15px] sm:text-[16px] md:text-[18px] lg:text-[24px] font-medium text-white">
                Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
