import React, { useState } from "react";
import {
  Tag,
  Search,
  BarChart3,
  Users,
  UserCircle,
} from "lucide-react";

type Step = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Enter Your Brand",
    subtitle:
      "Tell us about your brand or website. We analyze tone, audience, and positioning.",
    icon: <Tag strokeWidth={1.5} />,
  },
  {
    title: "Brand Profile Detection",
    subtitle:
      "AI builds your brand persona automatically based on how you communicate.",
    icon: <Search strokeWidth={1.5} />,
  },
  {
    title: "Market & Creator Analysis",
    subtitle:
      "We scan competitors and collaborations to map relevant creator niches.",
    icon: <BarChart3 strokeWidth={1.5} />,
  },
  {
    title: "Creator Matches",
    subtitle:
      "Instantly see your top matching creators that fit your style and community.",
    icon: <Users strokeWidth={1.5} />,
  },
  {
    title: "Refine & Compare",
    subtitle:
      "Adjust the persona, compare creators side-by-side, and save for campaigns.",
    icon: <UserCircle strokeWidth={1.5} />,
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-18">
      <header className="text-center mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#233C42]">
          How Creator Personas Works - From Brand Insight to Perfect Creator Match
        </h2>
        <p className="mt-3 text-[#233C42]/70 max-w-3xl mx-auto">
          Our AI builds your creator persona and instantly connects you with the
          best-matching creators for your brand.
        </p>
      </header>

      <div className="relative mt-8 md:mt-10">
        <div className="absolute left-0 right-0 top-8 md:top-10 h-px bg-[#E7E8EC]" />

        <ol className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
          {steps.map((s, i) => {
            const isActive = i === active;
            return (
              <li key={i} className="relative">
                <button
                  onClick={() => setActive(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={[
                    "group relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border transition-all",
                    "bg-white shadow-sm ring-1 ring-black/5",
                    "hover:scale-[1.05] ease-out",
                    isActive
                      ? "border-transparent"
                      : "border-[#E7E8EC] hover:border-[#DADBE0]",
                  ].join(" ")}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(135deg,#E40DA8 0%,#7424B3 100%)",
                          color: "white",
                        }
                      : { color: "#C8C9CF", background: "white" }
                  }
                >
                  <span className={isActive ? "text-white" : "text-[#C8C9CF]"}>
                    {s.icon}
                  </span>
                  {isActive && (
                    <span className="absolute inset-0 rounded-full ring-4 ring-[#E40DA8]/15" />
                  )}
                </button>

                <div className="mt-4 text-center max-w-[16rem] mx-auto">
                  <div className="text-xs uppercase tracking-wide text-[#233C42]/50">
                    Step {i + 1}
                  </div>
                  <div className="mt-1 font-semibold text-[#233C42]">
                    {s.title}
                  </div>
                  <p className="mt-1 text-sm text-[#233C42]/70">
                    {s.subtitle}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
