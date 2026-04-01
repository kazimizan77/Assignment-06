import bannerImage from "../assets/banner.png";
import playIcon from "../assets/play.png";
import bannerBadge from "../assets/badge.png";

function Banner() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 bg-[#e1e7ffFF] text-[#7C3AED] font-medium px-4 py-2 rounded-full mb-6">
              <img src={bannerBadge} className="w-4 h-4" />
              New: AI-Powered Tools Available
            </div>

            <h1 className="text-[28px] sm:text-[34px] md:text-[48px] lg:text-[60px] leading-[1.1] font-bold text-[#111827] mb-4 max-w-[600px] mx-auto lg:mx-0">
              Supercharge Your Digital Workflow
            </h1>

            <p className="text-[14px] sm:text-[14px] md:text-[16px] leading-6 md:leading-7 text-[#627382FF] max-w-[520px] mx-auto lg:mx-0 mb-8">
              Access premium AI tools, design assets, templates, and
              productivity
              <br />
              software—all in one place. Start creating faster today.
              <br />
              Explore Products
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="h-12 sm:h-11 px-5 rounded-full bg-gradient-to-r from-[#6C3BFF] to-[#A729F5] text-white text-[14px] sm:text-[16px] font-semibold cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-300/50">
                Explore Products
              </button>

              <button className="h-12 sm:h-11 px-5 rounded-full border border-[#7C3AED] text-[#7C3AED] text-[14px] sm:text-[16px] font-semibold flex items-center gap-2 cursor-pointer transition-all duration-300 hover:bg-[#7C3AED] hover:text-white">
                <img src={playIcon} className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center relative">
            <div className="absolute w-[80%] h-[80%] bg-purple-200 blur-[80px] opacity-40 rounded-full"></div>

            <img
              src={bannerImage}
              className="relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[640px] rounded-2xl object-cover shadow-[0_25px_80px_rgba(124,58,237,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
