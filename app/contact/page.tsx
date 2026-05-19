import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <AnimatedSection>
        <section className="bg-cream px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:gap-20">
            <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
              <p className="text-base font-semibold text-dark">Contact</p>
              <h1 className="font-serif text-balance text-[clamp(2.25rem,4vw+1rem,5.25rem)] font-semibold leading-[1.1] tracking-wide text-dark">
                Get in touch
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-dark md:text-xl">
                We would love to hear from you. Reach out with questions, or
                stop by the studio to see the space.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-white px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-20">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col gap-8 md:gap-10">
                <div className="flex flex-col gap-4">
                  <h2 className="font-serif text-4xl font-semibold leading-tight tracking-wide text-dark md:text-6xl">
                    Visit us
                  </h2>
                  <p className="text-sm leading-relaxed text-dark md:text-lg">
                    124 Maple Street
                    <br />
                    Suite 200
                    <br />
                    Portland, OR 97201
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-serif text-2xl font-semibold leading-snug tracking-wide text-dark md:text-4xl">
                    Hours
                  </h3>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between border-b border-black-10 pb-2">
                      <p className="text-sm text-dark md:text-base">
                        Mon — Fri
                      </p>
                      <p className="text-sm text-black-70 md:text-base">
                        6:00 AM — 8:00 PM
                      </p>
                    </div>
                    <div className="flex justify-between border-b border-black-10 pb-2">
                      <p className="text-sm text-dark md:text-base">
                        Saturday
                      </p>
                      <p className="text-sm text-black-70 md:text-base">
                        7:00 AM — 6:00 PM
                      </p>
                    </div>
                    <div className="flex justify-between border-b border-black-10 pb-2">
                      <p className="text-sm text-dark md:text-base">Sunday</p>
                      <p className="text-sm text-black-70 md:text-base">
                        8:00 AM — 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:hello@pilates.studio"
                    className="text-sm text-brand-green underline decoration-brand-green/30 underline-offset-4 hover:opacity-80 md:text-base"
                  >
                    hello@pilates.studio
                  </a>
                  <a
                    href="tel:+15035551234"
                    className="text-sm text-brand-green underline decoration-brand-green/30 underline-offset-4 hover:opacity-80 md:text-base"
                  >
                    (503) 555-1234
                  </a>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
