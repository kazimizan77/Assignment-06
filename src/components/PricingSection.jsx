import { FcCheckmark } from "react-icons/fc";

function PricingSection() {
  return (
    <section className="px-4 md:px-6 py-[100px] md:py-[120px] bg-[#F8F8F8]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[620px] mx-auto mb-10">
          <h2 className="text-[34px] md:text-[46px] leading-[1.08] font-bold text-[#101727FF] mb-3 max-w-[700px] mx-auto">
            Simple, Transparent Pricing
          </h2>

          <p className="text-[#627382FF] text-sm md:text-[18px] leading-[1.6] max-w-[560px] mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
          <div className="bg-[#F9FAFC] border border-[#F2F2F2] rounded-2xl px-6 pt-6 pb-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] min-h-[470px] flex flex-col">
            <h3 className="text-[22px] md:text-[24px] font-bold text-[#101727FF] mb-2">
              Starter
            </h3>

            <p className="text-[#627382FF] mb-6">Perfect for getting started</p>

            <div className="mb-6 flex items-end">
              <span className="text-[24px] md:text-[40px] leading-none font-bold text-[#0F172A]">
                $0
              </span>
              <span className="text-[#627382FF] text-[15px] mb-1">/Month</span>
            </div>

            <ul className="space-y-2 mb-8 text-[#627382FF] grow">
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Access to 10 free tools</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Basic templates</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Community support</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>1 project per month</span>
              </li>
            </ul>

            <button className="w-full h-[48px] rounded-full bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white text-[15px] font-semibold">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-gradient-to-br from-[#5B34F2] to-[#B317F6] rounded-[24px] px-6 pt-8 pb-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(91,52,242,0.25)] min-h-[570px] flex flex-col overflow-visible">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#fef3c6FF] px-3 py-1.5 text-[14px] font-medium leading-none text-[#bb4d00FF]">
              Most Popular
            </div>

            <h3 className="text-[22px] md:text-[24px] font-bold text-white mb-2">
              Pro
            </h3>

            <p className="text-white/85 mb-6">Best for professionals</p>

            <div className="mb-6 flex items-end">
              <span className="text-[24px] md:text-[40px] leading-none font-bold text-white">
                $29
              </span>
              <span className="text-white text-[15px] mb-1">/Month</span>
            </div>

            <ul className="space-y-2 mb-8 text-white grow">
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Access to all premium tools</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Unlimited templates</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Cloud sync</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Advanced analytics</span>
              </li>
            </ul>

            <button className="w-full h-[48px] rounded-full bg-white text-[#5B34F2] text-[15px] font-semibold">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-[#F9FAFC] border border-[#F2F2F2] rounded-2xl px-6 pt-6 pb-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] min-h-[470px] flex flex-col">
            <h3 className="text-[22px] md:text-[24px] font-bold text-[#101727FF] mb-2">
              Enterprise
            </h3>

            <p className="text-[#627382FF] mb-6">For teams and businesses</p>

            <div className="mb-6 flex items-end">
              <span className="text-[24px] md:text-[40px] leading-none font-bold text-[#0F172A]">
                $99
              </span>
              <span className="text-[#627382FF] text-[15px] mb-1">/Month</span>
            </div>

            <ul className="space-y-2 mb-8 text-[#627382FF] grow">
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Everything in Pro</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Team collaboration</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Dedicated support</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>SLA guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <FcCheckmark />
                <span>Custom branding</span>
              </li>
            </ul>

            <button className="w-full h-[48px] rounded-full bg-gradient-to-r from-[#5B34F2] to-[#B317F6] text-white text-[15px] font-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
