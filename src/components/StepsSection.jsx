import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

function StepsSection() {
  return (
    <section className="px-4 md:px-6 py-[90px] md:py-[120px] bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[620px] mx-auto mb-10 md:mb-14">
          <h2 className="text-[34px] md:text-[48px] leading-[1.1] font-bold text-[#101727FF] mb-4">
            Get Started In 3 Steps
          </h2>

          <p className="text-[#627382FF] leading-[1.6]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="h-95 w-95 relative bg-white border border-[#E5E7EB] rounded-2xl px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white text-[14px] font-bold flex items-center justify-center">
              01
            </div>

            <div className="w-25 h-25 mx-auto mt-8 mb-6 rounded-full bg-[#F3E8FF] flex items-center justify-center">
              <img src={userIcon} alt="" className="w-15 h-15 object-contain" />
            </div>

            <h3 className="text-[22px] md:text-[24px] font-semibold text-[#0F172A] mb-3">
              Create Account
            </h3>

            <p className="text-[#6B7280] leading-6 max-w-[250px] mx-auto">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          <div className="h-95 w-95 relative bg-white border border-[#E5E7EB] rounded-2xl px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white text-[14px] font-bold flex items-center justify-center">
              02
            </div>

            <div className="w-25 h-25 mx-auto mt-8 mb-6 rounded-full bg-[#F3E8FF] flex items-center justify-center">
              <img
                src={packageIcon}
                alt=""
                className="w-15 h-15 object-contain"
              />
            </div>

            <h3 className="text-[22px] md:text-[24px] font-semibold text-[#0F172A] mb-3">
              Choose Products
            </h3>

            <p className="text-[#6B7280] leading-6 max-w-[250px] mx-auto">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="h-95 w-95 relative bg-white border border-[#E5E7EB] rounded-2xl px-6 py-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white text-[14px] font-bold flex items-center justify-center">
              03
            </div>

            <div className="w-25 h-25 mx-auto mt-8 mb-6 rounded-full bg-[#F3E8FF] flex items-center justify-center">
              <img
                src={rocketIcon}
                alt=""
                className="w-15 h-15 object-contain"
              />
            </div>

            <h3 className="text-[22px] md:text-[24px] font-semibold text-[#0F172A] mb-3">
              Start Creating
            </h3>

            <p className="text-[#6B7280] leading-6 max-w-[250px] mx-auto">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
