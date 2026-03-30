import bannerImage from "../assets/banner.png";
import playIcon from "../assets/play.png";

function Banner() {
  return (
    <section className="bg-white">
      <div className="max-w-300 mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#F3E8FF] text-[#7C3AED] text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#A855F7]"></span>
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-[40px] md:text-[56px] leading-[1.1] font-bold text-[#111827] mb-6">
              Supercharge Your <br />
              Digital Workflow
            </h1>

            <p className="text-[16px] md:text-[18px] leading-7 text-[#6B7280] max-w-135 mx-auto lg:mx-0 mb-8">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="h-12 px-6 rounded-full bg-gradient-to-r from-[#6C3BFF] to-[#A729F5] text-white text-[16px] font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-300/50">
                Explore Products
              </button>

              <button className="h-12 px-6 rounded-full border border-[#7C3AED] text-[#7C3AED] text-[16px] font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-[#7C3AED] hover:text-white">
                <img src={playIcon} alt="play" className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src={bannerImage}
              alt=""
              className="w-full max-w-130 rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
