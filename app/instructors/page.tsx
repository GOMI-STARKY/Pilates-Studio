import AnimatedSection from "@/components/AnimatedSection";

const instructors = [
  {
    name: "Elena Voss",
    specialty: "Reformer & Mat Pilates",
    bio: "With over a decade of teaching experience, Elena brings precision and warmth to every class. She trained under classical Pilates masters and believes in meeting every student where they are.",
  },
  {
    name: "Marcus Chen",
    specialty: "Reformer Flow & Private Sessions",
    bio: "Marcus specializes in movement rehabilitation and functional strength. His classes are known for clear cueing, creative sequences, and an encouraging atmosphere.",
  },
  {
    name: "Sofia Reyes",
    specialty: "Restorative & Mat Pilates",
    bio: "Sofia's teaching is rooted in mindfulness and body awareness. She creates a safe space for students to explore their edges and find ease in movement.",
  },
];

export default function InstructorsPage() {
  return (
    <>
      <AnimatedSection>
        <section className="bg-cream px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:gap-20">
            <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
              <p className="text-base font-semibold text-dark">Instructors</p>
              <h1 className="font-serif text-balance text-[clamp(2.25rem,4vw+1rem,5.25rem)] font-semibold leading-[1.1] tracking-wide text-dark">
                Meet our team
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-dark md:text-xl">
                Our instructors bring years of training, genuine passion, and a
                commitment to your growth in every class they lead.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-white px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-20">
            <div className="grid gap-10 md:grid-cols-3 md:gap-12">
              {instructors.map((instructor) => (
                <div
                  key={instructor.name}
                  className="flex flex-col gap-6 md:gap-8"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-sage" />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif text-2xl font-semibold leading-snug tracking-wide text-dark">
                      {instructor.name}
                    </h3>
                    <p className="text-sm font-medium text-brand-green">
                      {instructor.specialty}
                    </p>
                    <p className="text-sm leading-relaxed text-dark md:text-base">
                      {instructor.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-sage px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 text-center md:gap-10">
            <div className="flex max-w-3xl flex-col gap-4 md:gap-6">
              <h2 className="font-serif text-4xl font-semibold leading-tight tracking-wide text-dark md:text-6xl">
                Train with the best
              </h2>
              <p className="text-sm leading-relaxed text-dark md:text-xl">
                Book a class with any of our instructors and experience the
                difference expert guidance makes.
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
