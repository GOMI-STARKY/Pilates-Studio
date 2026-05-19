import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    name: "Intro offer",
    price: "$39",
    period: "Three classes",
    features: [
      "Unlimited studio access",
      "Expert form guidance",
      "Community support",
    ],
    cta: "Book now",
    featured: false,
  },
  {
    name: "Full membership",
    price: "$189",
    period: "Per month",
    features: [
      "Unlimited classes",
      "Priority scheduling",
      "Member events",
      "Exclusive workshops",
      "Personal consultations",
    ],
    cta: "Join today",
    featured: true,
  },
  {
    name: "Punch pass",
    price: "$150",
    period: "10 classes",
    features: [
      "Flexible scheduling",
      "Valid 3 months",
      "Share with a friend",
      "All class types",
    ],
    cta: "Purchase",
    featured: false,
  },
];

export default function MembershipsPage() {
  return (
    <>
      <AnimatedSection>
        <section className="bg-cream px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:gap-20">
            <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
              <p className="text-base font-semibold text-dark">Memberships</p>
              <h1 className="font-serif text-balance text-[clamp(2.25rem,4vw+1rem,5.25rem)] font-semibold leading-[1.1] tracking-wide text-dark">
                Choose your practice
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-dark md:text-xl">
                Flexible plans designed to fit your lifestyle. Whether you are
                just starting or deepening your practice, there is a plan for
                you.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-white px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-20">
            <div className="grid max-w-5xl gap-8 md:mx-auto md:grid-cols-3 md:gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col justify-between gap-8 rounded-2xl border p-6 md:p-8 ${
                    plan.featured
                      ? "border-brand-blue bg-cream"
                      : "border-black-15 bg-white"
                  }`}
                >
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 text-center">
                      <p className="font-serif text-lg font-semibold tracking-wide md:text-[26px]">
                        {plan.name}
                      </p>
                      <p className="font-serif text-5xl font-semibold leading-none tracking-wide md:text-[84px]">
                        {plan.price}
                      </p>
                      <p className="text-base md:text-lg">{plan.period}</p>
                    </div>
                    <div className="flex flex-col gap-4 py-2">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex gap-4">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="mt-0.5 shrink-0"
                            aria-hidden="true"
                          >
                            <path
                              d="M20 6L9 17l-5-5"
                              stroke="#6b8e74"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="text-base leading-relaxed text-dark md:text-lg">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href="/#book"
                    className="inline-flex items-center justify-center rounded-xl border border-brand-blue bg-brand-blue px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-blue-hover md:w-auto md:px-3 md:py-1.5 md:text-lg"
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
