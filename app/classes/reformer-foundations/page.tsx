import AnimatedSection from "@/components/AnimatedSection";

export default function ReformerFoundationsPage() {
  return (
    <>
      <AnimatedSection>
        <section className="bg-cream px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:gap-20">
            <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
              <p className="text-base font-semibold text-dark">
                Sample class
              </p>
              <h1 className="font-serif text-balance text-[clamp(2.25rem,4vw+1rem,5.25rem)] font-semibold leading-[1.1] tracking-wide text-dark">
                Reformer Foundations
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-dark md:text-xl">
                The perfect starting point for anyone new to the reformer. Learn
                the fundamentals in a supportive, small-group setting.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-white px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-20">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="font-serif text-4xl font-semibold leading-tight tracking-wide text-dark md:text-6xl">
                  What to expect
                </h2>
                <p className="text-sm leading-relaxed text-dark md:text-lg">
                  This 50-minute class introduces you to the reformer machine
                  and the core principles of Pilates. You'll learn breathwork,
                  neutral spine, and foundational exercises that build
                  confidence and body awareness.
                </p>
                <p className="text-sm leading-relaxed text-dark md:text-lg">
                  Our instructors guide every student with hands-on adjustments
                  and clear cues. No prior experience needed.
                </p>
              </div>
              <div className="flex flex-col gap-6 md:gap-8">
                <h3 className="font-serif text-2xl font-semibold leading-snug tracking-wide text-dark md:text-4xl">
                  Class details
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 border-b border-black-10 pb-4">
                    <p className="text-sm font-semibold text-dark md:text-base">
                      Duration
                    </p>
                    <p className="text-sm text-black-70 md:text-base">
                      50 minutes
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-b border-black-10 pb-4">
                    <p className="text-sm font-semibold text-dark md:text-base">
                      Level
                    </p>
                    <p className="text-sm text-black-70 md:text-base">
                      Beginner — All levels welcome
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-b border-black-10 pb-4">
                    <p className="text-sm font-semibold text-dark md:text-base">
                      Equipment
                    </p>
                    <p className="text-sm text-black-70 md:text-base">
                      Reformer (provided)
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-b border-black-10 pb-4">
                    <p className="text-sm font-semibold text-dark md:text-base">
                      Max students
                    </p>
                    <p className="text-sm text-black-70 md:text-base">
                      6 per class
                    </p>
                  </div>
                </div>
                <a
                  href="/#book"
                  className="inline-flex items-center justify-center rounded-xl border border-brand-blue bg-brand-blue px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-blue-hover md:self-start md:px-3 md:py-1.5 md:text-lg"
                >
                  Book this class
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
