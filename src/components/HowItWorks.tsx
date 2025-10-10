import React, { useState, useEffect, useRef } from "react";
import { Tag, Search, BarChart3, Users, UserCircle } from "lucide-react";

type Step = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    icon: <Tag className="w-4 h-4" strokeWidth={1.5} />,
    title: "Tell Us About Your Brand",
    description: "Enter your brand or website to get started.",
  },
  {
    id: 2,
    icon: <Search className="w-4 h-4" strokeWidth={1.5} />,
    title: "Brand Match",
    description: "Our AI detects your brand profile instantly.",
  },
  {
    id: 3,
    icon: <BarChart3 className="w-4 h-4" strokeWidth={1.5} />,
    title: "Markets & Competitors",
    description: "We analyze markets and spot your competitors.",
  },
  {
    id: 4,
    icon: <Users className="w-4 h-4" strokeWidth={1.5} />,
    title: "Collaborations",
    description: "Discover known creator collaborations.",
  },
  {
    id: 5,
    icon: <UserCircle className="w-4 h-4" strokeWidth={1.5} />,
    title: "Creator Personas",
    description: "Get your brand-fit creator personas instantly.",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const scrollToForm = () => {
    const formElement = document.getElementById('form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 bg-gradient-to-b from-white via-[#FAFAFC] to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222F32] mb-4">
            How Creator Personas Works
          </h2>
          <p className="text-lg text-[#6A6B72] max-w-2xl mx-auto">
            Our AI-powered process analyzes your brand and finds the perfect creator matches in just a few steps.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-[44px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#E5E5E8] via-[#E5E5E8] to-[#E5E5E8]">
              <div
                className="h-full bg-gradient-to-r from-[#E40DA8]/50 to-[#7424B3]/50 transition-all duration-1000 ease-out"
                style={{
                  width: hasAnimated ? '100%' : '0%',
                  opacity: hasAnimated ? 0.5 : 0
                }}
              />
            </div>

            {/* Steps */}
            <div className="relative flex justify-between items-start">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center w-[180px] group cursor-pointer"
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  style={{
                    opacity: hasAnimated ? 1 : 0,
                    transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s ease-out ${index * 0.1}s`,
                  }}
                >
                  {/* Icon Circle */}
                  <div
                    className={`
                      w-[88px] h-[88px] rounded-full border flex items-center justify-center mb-5
                      transition-all duration-300 ease-out group-hover:scale-105
                      ${
                        activeStep === step.id
                          ? 'border-transparent bg-gradient-to-br from-[#E40DA8]/40 to-[#7424B3]/60 shadow-md shadow-purple-100/30'
                          : 'border-[#E5E5E8] bg-white group-hover:border-[#E40DA8]/20 group-hover:shadow-sm'
                      }
                    `}
                  >
                    <div
                      className={`
                        transition-colors duration-300
                        ${activeStep === step.id ? 'text-[#E40DA8]' : 'text-[#B8BAC0] group-hover:text-[#E40DA8]'}
                      `}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Number */}
                  <div
                    className={`
                      text-xs font-semibold mb-2 transition-colors duration-300
                      ${activeStep === step.id ? 'text-[#E40DA8]' : 'text-[#6A6B72]'}
                    `}
                  >
                    Step {step.id}
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                      text-sm font-semibold text-center mb-2 transition-colors duration-300 leading-tight
                      ${activeStep === step.id ? 'text-[#1B1C1E]' : 'text-[#1B1C1E] group-hover:text-[#E40DA8]'}
                    `}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#6A6B72] text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Stepper */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[44px] top-0 bottom-0 w-[1px] bg-[#E5E5E8]">
              <div
                className="w-full bg-gradient-to-b from-[#E40DA8]/50 to-[#7424B3]/50 transition-all duration-1000 ease-out"
                style={{
                  height: hasAnimated ? '100%' : '0%',
                  opacity: hasAnimated ? 0.5 : 0
                }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="relative flex items-start gap-6"
                  style={{
                    opacity: hasAnimated ? 1 : 0,
                    transform: hasAnimated ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease-out ${index * 0.1}s`,
                  }}
                >
                  {/* Icon Circle */}
                  <div className="flex-shrink-0 w-[88px] h-[88px] rounded-full border border-[#E5E5E8] bg-white flex items-center justify-center">
                    <div className="text-[#B8BAC0]">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-6">
                    <div className="text-xs font-semibold text-[#6A6B72] mb-2">
                      Step {step.id}
                    </div>
                    <h3 className="text-base font-semibold text-[#1B1C1E] mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6A6B72] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white text-base font-medium hover:opacity-90 transition-all duration-300"
          >
            ✨ Start the magic →
          </button>
          <div className="mt-4">
            <a
              href="#form-section"
              className="text-sm text-[#6A6B72] hover:text-[#E40DA8] transition-colors duration-300"
            >
              See example personas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
