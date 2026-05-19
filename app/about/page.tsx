import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <>
      <AnimatedSection>
        <section className="bg-cream px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:gap-20">
            <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
              <p className="text-base font-semibold text-dark">About us</p>
              <h1 className="font-serif text-balance text-[clamp(2.25rem,4vw+1rem,5.25rem)] font-semibold leading-[1.1] tracking-wide text-dark">
                A studio built on purpose
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-dark md:text-xl">
                Boutique Pilates Studio was founded to create a space where
                precision meets peace. Small classes, expert instructors, and an
                environment designed for real transformation.
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
                  Our story
                </h2>
                <p className="text-sm leading-relaxed text-dark md:text-lg">
                  What started as a single reformer studio has grown into a
                  community of movers. Every class is taught with the belief
                  that Pilates is for every body, at every stage.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:gap-6">
                <h2 className="font-serif text-4xl font-semibold leading-tight tracking-wide text-dark md:text-6xl">
                  Our philosophy
                </h2>
                <p className="text-sm leading-relaxed text-dark md:text-lg">
                  We teach precision over speed, alignment over intensity, and
                  consistency over perfection. Progress is personal, and we
                  honor where each member is on their journey.
                </p>
              </div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-sage" />
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-sage px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 text-center md:gap-10">
            <div className="flex max-w-3xl flex-col gap-4 md:gap-6">
              <h2 className="font-serif text-4xl font-semibold leading-tight tracking-wide text-dark md:text-6xl">
                Ready to move with us?
              </h2>
              <p className="text-sm leading-relaxed text-dark md:text-xl">
                Book your first class and experience the difference.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#book"
                className="inline-flex items-center justify-center rounded-xl border border-brand-blue bg-brand-blue px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-blue-hover md:px-3 md:py-1.5 md:text-lg"
              >
                Book
              </a>
              <a
                href="/classes"
                className="inline-flex items-center justify-center rounded-xl border border-[rgba(7,8,10,0.15)] px-3 py-1.5 text-sm font-medium text-dark transition hover:bg-black-3 md:text-lg"
              >
                View classes
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
