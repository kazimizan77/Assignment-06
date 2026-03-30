function Stats() {
  return (
    <section className="mt-0">
      <div className="w-full bg-gradient-to-r from-[#5B32F3] via-[#7B2FFF] to-[#B81FF5]">
        <div className="max-w-400 mx-auto px-6 md:px-16 lg:px-50 py-15">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center text-white">
            <div className="py-4 md:border-r md:border-white/30">
              <h2 className="text-[60px] leading-none font-bold">50K+</h2>
              <p className="mt-3 text-[28px] md:text-[18px] font-medium text-white/90">
                Active Users
              </p>
            </div>

            <div className="py-4 md:border-r md:border-white/30">
              <h2 className="text-[60px] leading-none font-bold">200+</h2>
              <p className="mt-3 text-[28px] md:text-[18px] font-medium text-white/90">
                Premium Tools
              </p>
            </div>

            <div className="py-4">
              <h2 className="text-[60px] leading-none font-bold">4.9</h2>
              <p className="mt-3 text-[28px] md:text-[18px] font-medium text-white/90">
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

