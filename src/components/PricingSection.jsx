import { FcCheckmark } from "react-icons/fc";

function PricingSection() {
  return (
    <section className="bg-[#F8F8F8] px-4 md:px-6 py-[100px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center  mb-10 md:mb-10">
          <h2 className="text-[34px] md:text-[46px] lg:text-[48px] leading-[1.08] font-bold text-[#101727FF] mb-4 max-w-[700px] mx-auto">
            Simple, Transparent Pricing
          </h2>

          <p className="text-[#627382FF] text-sm md:text-[18px]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
          <div className="bg-gray-100 border border-[#F2F2F2] rounded-3xl px-6 pt-6 pb-6 shadow-sm transition-all duration-300 hover:-translate-y-2 min-h-[470px] flex flex-col">
            <h3 className="text-[22px] md:text-[24px] font-bold text-[#101727] mb-2">
              Starter
            </h3>

            <p className="text-[#627382] mb-6">Perfect for getting started</p>

            <div className="mb-6 flex items-end gap-1">
              <span className="text-[24px] md:text-[40px] leading-none font-bold text-[#101727FF]">
                $0
              </span>
              <span className="text-[#627382FF] text-[20px] mt-1">/Month</span>
            </div>

            <ul className="space-y-3 mb-8 text-[#627382] grow">
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Access to 10 free tools</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Basic templates</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Community support</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>1 project per month</span>
              </li>
            </ul>

            <button className="w-full h-[48px] rounded-full bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white text-[15px] font-semibold transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-gradient-to-br from-[#5B34F2] to-[#B317F6] rounded-[24px] px-6 pt-8 pb-6 shadow-sm transition-all duration-300 hover:-translate-y-2 min-h-[570px] flex flex-col overflow-visible">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FEF3C6] px-3 py-1.5 text-[14px] font-medium leading-none text-[#BB4D00] shadow-sm">
              Most Popular
            </div>

            <h3 className="text-[22px] md:text-[24px] font-bold text-white mb-2">
              Pro
            </h3>

            <p className="text-white/85 mb-6">Best for professionals</p>

            <div className="mb-6 flex items-end gap-1">
              <span className="text-[24px] md:text-[40px] leading-none font-bold text-white">
                $29
              </span>
              <span className="text-white text-[20px] mt-1">/Month</span>
            </div>

            <ul className="space-y-3 mb-8 text-white grow">
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Access to all premium tools</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Unlimited templates</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Priority support</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Cloud sync</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Advanced analytics</span>
              </li>
            </ul>

            <button className="w-full h-[48px] rounded-full bg-white text-[#5B34F2] text-[15px] font-semibold transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-gray-100 border border-[#F2F2F2] rounded-3xl px-6 pt-6 pb-6 shadow-sm transition-all duration-300 hover:-translate-y-2 min-h-[470px] flex flex-col">
            <h3 className="text-[22px] md:text-[24px] font-bold text-[#101727] mb-2">
              Enterprise
            </h3>

            <p className="text-[#627382] mb-6">For teams and businesses</p>

            <div className="mb-6 flex items-end gap-1">
              <span className="text-[24px] md:text-[40px] leading-none font-bold text-[#101727FF]">
                $99
              </span>
              <span className="text-[#627382FF] text-[20px] mt-1">/Month</span>
            </div>

            <ul className="space-y-3 mb-8 text-[#627382] grow">
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Team collaboration</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Dedicated support</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>SLA guarantee</span>
              </li>
              <li className="flex items-start gap-2">
                <FcCheckmark className="mt-[2px] shrink-0" />
                <span>Custom branding</span>
              </li>
            </ul>

            <button className="w-full h-[48px] rounded-full bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white text-[15px] font-semibold transition-all duration-300 hover:scale-[1.02] cursor-pointer">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
