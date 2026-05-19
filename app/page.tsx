import AnimatedSection from "@/components/AnimatedSection";
import NewsletterForm from "@/components/NewsletterForm";

const principles = [
  {
    title: "Instructors who know their craft",
    description:
      "Our teachers bring years of training and genuine passion to every class they lead.",
  },
  {
    title: "A studio designed for peace",
    description:
      "Natural light, clean lines, and thoughtful details create a space where you can focus on what matters.",
  },
  {
    title: "Classes built for real progress",
    description:
      "Small groups mean personal attention and modifications tailored to where you are right now.",
  },
];

const results = [
  {
    title: "A stronger, leaner body",
    description:
      "Pilates builds long, functional strength without the strain of heavy lifting.",
    image: "/assets/stronger-body.png",
  },
  {
    title: "Mental clarity and calm",
    description:
      "The focus required in class quiets your mind and leaves you centered for the day ahead.",
    image: "/assets/mental-clarity.png",
  },
  {
    title: "A community that lifts you up",
    description:
      "You'll find yourself surrounded by people committed to their own growth and yours.",
    image: "/assets/community.png",
  },
];

const stats = [
  { value: "0+", label: "" },
  { value: "0+", label: "" },
  { value: "0+", label: "" },
];

const pricingPlans = [
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
  },
];

const faqPairs = [
  [
    {
      q: "What should I wear to class?",
      a: "Wear comfortable clothes that allow you to move freely. Most members wear fitted leggings and a tank or t-shirt. Bring socks or go barefoot on the reformer.",
    },
    {
      q: "Do I need experience with Pilates?",
      a: "No. Our intro classes are designed for beginners. Our instructors modify every exercise to meet you where you are, whether you're new or advanced.",
    },
  ],
  [
    {
      q: "How often should I come?",
      a: "We recommend two to three classes per week to feel real progress. That said, one class a week is better than none, and some members come five times weekly.",
    },
    {
      q: "What if I have an injury?",
      a: "Tell your instructor before class. Pilates is therapeutic and can support recovery when done correctly. We'll modify movements to work around your injury.",
    },
  ],
  [
    {
      q: "Can I drop in or do I need to book?",
      a: "We require advance booking to keep classes small and focused. This ensures your instructor can give you the attention you deserve.",
    },
    {
      q: "What's the cancellation policy?",
      a: "Cancel or reschedule at least 12 hours before class to keep your credit. Late cancellations may be charged a session fee so we can honor our instructors' time.",
    },
  ],
  [
    {
      q: "Do you offer private sessions?",
      a: "Yes. Private and duet sessions are available for personalized programming, injury recovery, or mastering fundamentals before joining group classes.",
    },
    {
      q: "Where should I park?",
      a: "Street parking is available on Maple and 4th. There is also a public garage two blocks east on Pine. Bikes can be locked at our front rack.",
    },
  ],
];

const galleryImages = [
  { src: "/assets/space-1.png" },
  { src: "/assets/space-2.png" },
  { src: "/assets/space-3.png" },
  { src: "/assets/space-1.png" },
  { src: "/assets/space-2.png" },
  { src: "/assets/space-3.png" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <AnimatedSection>
        <section className="bg-cream px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:gap-20">
            <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
              <h1 className="font-serif text-balance text-[clamp(2.25rem,4vw+1rem,5.25rem)] font-semibold leading-[1.1] tracking-wide text-dark">
                Strengthen your booty, calm your mind
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-dark md:text-xl">
                Step into our studio and discover the precision of Pilates in a
                space designed for your transformation. Small classes, expert
                instruction, and an atmosphere of quiet strength await.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/#book"
                  className="inline-flex items-center justify-center rounded-xl border border-brand-green bg-brand-green px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-green-hover md:px-3 md:py-1.5 md:text-lg"
                >
                  Book
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border border-[rgba(7,8,10,0.15)] px-3 py-1.5 text-sm font-medium text-dark transition hover:bg-black-3 md:text-lg"
                >
                  Learn
                </a>
              </div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Pilates studio atmosphere"
              >
                <source
                  src="/assets/hero-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About / Foundation */}
      <AnimatedSection>
        <section id="about" className="bg-white px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-20">
            <div className="flex max-w-3xl flex-col gap-3 md:gap-4">
              <p className="text-base font-semibold text-dark">Foundation</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight tracking-wide text-dark md:text-6xl">
                What sets us apart
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-dark md:text-xl">
                We built this studio on three principles that matter. Each one
                shapes how we teach and who we become as a community.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              {principles.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-4 md:gap-6"
                >
                  <h3 className="font-serif text-2xl font-semibold leading-snug tracking-wide text-dark md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-dark md:text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <a
                href="/classes"
                className="inline-flex items-center justify-center rounded-xl border border-brand-green bg-brand-green px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-green-hover md:px-3 md:py-1.5 md:text-lg"
              >
                Explore
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Classes / Results */}
      <AnimatedSection>
        <section id="classes" className="bg-white px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-20">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center md:gap-4">
              <p className="text-base font-semibold text-dark">Results</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight tracking-wide text-dark md:text-6xl">
                What Pushups does for you
              </h2>
              <p className="text-sm leading-relaxed text-dark md:text-xl">
                This practice changes how you move and how you feel. The work is
                real, and the rewards compound over time.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              {results.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-6 md:gap-8"
                >
                  <div className="relative aspect-[405/240] w-full overflow-hidden rounded-2xl bg-sage">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold leading-snug tracking-wide text-dark md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-dark md:text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center md:justify-center">
              <a
                href="/classes"
                className="inline-flex items-center justify-center rounded-xl border border-brand-green bg-brand-green px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-green-hover md:px-3 md:py-1.5 md:text-lg"
              >
                Start
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Bar */}
      <AnimatedSection>
        <section className="bg-sage px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-20">
            <div className="flex flex-col gap-6 md:flex-row md:gap-20">
              <div className="flex max-w-xl flex-1 flex-col gap-3 md:gap-4">
                <p className="text-base font-semibold text-dark">Proven</p>
                <h2 className="font-serif text-4xl font-semibold leading-tight tracking-wide text-dark md:text-6xl">
                  The numbers speak for themselves
                </h2>
              </div>
              <div className="flex max-w-xl flex-1 flex-col gap-6 md:gap-8">
                <p className="text-sm leading-relaxed text-dark md:text-xl">
                  Our studio has transformed hundreds of bodies and minds. The
                  work compounds. The results are real.
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <a
                    href="/classes"
                    className="inline-flex items-center justify-center rounded-xl border border-[rgba(7,8,10,0.15)] px-3 py-1.5 text-sm font-medium text-dark transition hover:bg-black-3 md:text-lg"
                  >
                    Explore
                  </a>
                  <a
                    href="/#book"
                    className="inline-flex items-center gap-2 text-base font-medium text-dark md:text-lg"
                  >
                    Schedule
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14m-6-6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-8 border-t border-black-10 pt-10 md:grid-cols-3 md:gap-12 md:border-0 md:pt-0">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-2 border-l border-black-15 pl-8"
                >
                  <p className="font-roboto text-5xl font-bold leading-[1.1] text-dark md:text-8xl">
                    {stat.value}
                  </p>
                  <p className="font-serif text-lg font-semibold leading-snug tracking-wide text-dark md:text-[26px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonial */}
      <AnimatedSection>
        <section
          id="instructors"
          className="relative bg-white px-5 py-16 md:px-16 md:py-28"
        >
          <div className="mx-auto w-full max-w-7xl">
            <div className="relative flex flex-col items-center gap-10 md:gap-12">
              <div className="flex w-full max-w-3xl flex-col items-center gap-8 text-center">
                <svg
                  width="116"
                  height="19"
                  viewBox="0 0 116 19"
                  fill="none"
                  aria-label="Five stars"
                >
                  <path
                    d="M9.5 0l2.9 6 6.6.8-4.8 4.9 1.1 6.6L9.5 14.5 4.7 18.3l1.1-6.6L1 6.8l6.6-.8L9.5 0z"
                    fill="#07080a"
                  />
                  <path
                    d="M31 0l2.9 6 6.6.8-4.8 4.9 1.1 6.6-5.8-3.8-5.8 3.8 1.1-6.6-4.8-4.9 6.6-.8L31 0z"
                    fill="#07080a"
                  />
                  <path
                    d="M52.5 0l2.9 6 6.6.8-4.8 4.9 1.1 6.6-5.8-3.8-5.8 3.8 1.1-6.6-4.8-4.9 6.6-.8L52.5 0z"
                    fill="#07080a"
                  />
                  <path
                    d="M74 0l2.9 6 6.6.8-4.8 4.9 1.1 6.6-5.8-3.8-5.8 3.8 1.1-6.6-4.8-4.9 6.6-.8L74 0z"
                    fill="#07080a"
                  />
                  <path
                    d="M95.5 0l2.9 6 6.6.8-4.8 4.9 1.1 6.6-5.8-3.8-5.8 3.8 1.1-6.6-4.8-4.9 6.6-.8L95.5 0z"
                    fill="#07080a"
                  />
                </svg>
                <p className="font-serif text-balance text-xl font-semibold leading-snug tracking-wide text-dark md:text-3xl">
                  &ldquo;I came for the strength training and stayed for the
                  peace I found in that room.&rdquo;
                </p>
                <div className="flex flex-col items-center gap-4 md:flex-row md:gap-5">
                  <img
                    src="/assets/sarah-mitchell.jpg"
                    alt="Sarah Mitchell"
                    className="size-14 rounded-full object-cover"
                  />
                  <div className="text-center leading-relaxed md:text-left">
                    <p className="text-base font-semibold md:text-lg">
                      Sarah Mitchell
                    </p>
                    <p className="text-sm text-black-70 md:text-lg">
                      Member, 2 years
                    </p>
                  </div>
                  <span className="hidden h-14 w-px bg-black-10 md:block" />
                  <div className="relative h-12 w-[120px]">
                    <div className="h-full w-full rounded bg-sage" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                <button
                  type="button"
                  aria-label="Go to testimonial 1"
                  className="size-2 rounded-full bg-dark transition"
                />
                <button
                  type="button"
                  aria-label="Go to testimonial 2"
                  className="size-2 rounded-full bg-black-25 transition hover:bg-black-40"
                />
              </div>

              <button
                type="button"
                className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-lg border border-black-15 bg-white p-3 md:inline-flex"
                aria-label="Previous testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-lg border border-black-15 bg-white p-3 md:inline-flex"
                aria-label="Next testimonial"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>



      {/* Pricing */}
      <AnimatedSection>
        <section id="pricing" className="bg-white px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-20">
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center md:gap-4">
              <p className="text-base font-semibold text-dark">Invest</p>
              <h2 className="font-serif text-4xl font-semibold leading-tight tracking-wide text-dark md:text-6xl">
                Membership options
              </h2>
              <p className="text-sm leading-relaxed text-dark md:text-xl">
                Choose the plan that fits your practice and your life
              </p>
            </div>

            <div className="grid max-w-5xl gap-8 md:mx-auto md:grid-cols-2 md:gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col justify-between gap-8 rounded-2xl border border-black-15 bg-white p-6 md:p-8"
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
                    className="inline-flex items-center justify-center rounded-xl border border-brand-green bg-brand-green px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-green-hover md:px-3 md:py-1.5 md:text-lg w-full md:w-auto"
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-black-70 md:text-base">
              <a
                href="/memberships"
                className="font-semibold text-dark underline decoration-black-20 underline-offset-4 hover:opacity-80"
              >
                View full membership page
              </a>
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection>
        <section className="bg-sage px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 text-center md:gap-10">
            <div className="flex max-w-3xl flex-col gap-4 md:gap-6">
              <h2 className="font-serif text-4xl font-semibold leading-tight tracking-wide text-dark md:text-6xl">
                Ready to begin your practice
              </h2>
              <p className="text-sm leading-relaxed text-dark md:text-xl">
                Your first class is waiting. Come as you are, leave transformed.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#book"
                className="inline-flex items-center justify-center rounded-xl border border-brand-green bg-brand-green px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-green-hover md:px-3 md:py-1.5 md:text-lg"
              >
                Book
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-[rgba(7,8,10,0.15)] px-3 py-1.5 text-sm font-medium text-dark transition hover:bg-black-3 md:text-lg"
              >
                Learn
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>



      {/* Wellness Form */}
      <AnimatedSection>
        <section className="bg-white px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 text-center md:gap-10">
            <div className="flex max-w-3xl flex-col gap-4 md:gap-6">
              <h2 className="font-serif text-4xl font-semibold leading-[1.1] tracking-wide text-dark md:text-[clamp(2.5rem,4vw+1rem,5.25rem)]">
                Stay inspired
                <span className="block">with our wellness letter</span>
              </h2>
              <p className="text-sm leading-relaxed text-dark md:text-xl">
                Get insights on movement, mindfulness, and living well delivered
                to your inbox
              </p>
            </div>
            <NewsletterForm />
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
