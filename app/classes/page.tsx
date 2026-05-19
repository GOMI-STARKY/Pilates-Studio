import AnimatedSection from "@/components/AnimatedSection";

const classTypes = [
  {
    name: "Reformer Foundations",
    level: "All levels",
    duration: "50 min",
    description:
      "Build a strong foundation on the reformer. This class teaches the essential principles of Pilates — breath, alignment, and core engagement — so you feel confident in every move.",
  },
  {
    name: "Mat Pilates",
    level: "All levels",
    duration: "45 min",
    description:
      "Classic Pilates mat work using your body weight to build strength, flexibility, and control. No equipment needed, just you and the mat.",
  },
  {
    name: "Reformer Flow",
    level: "Intermediate",
    duration: "50 min",
    description:
      "A dynamic reformer class that links traditional exercises into seamless sequences. Build endurance, coordination, and grace.",
  },
  {
    name: "Private Session",
    level: "Personalized",
    duration: "55 min",
    description:
      "One-on-one instruction tailored to your goals, injury history, or practice level. The fastest way to progress with undivided attention.",
  },
  {
    name: "Duet Session",
    level: "Personalized",
    duration: "55 min",
    description:
      "Share a session with a friend or partner. You'll receive personalized instruction while enjoying the energy of shared practice.",
  },
  {
    name: "Restorative Pilates",
    level: "All levels",
    duration: "45 min",
    description:
      "A slower, more mindful practice using props and gentle movement to release tension, improve mobility, and restore your nervous system.",
  },
];

export default function ClassesPage() {
  return (
    <>
      <AnimatedSection>
        <section className="bg-cream px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:gap-20">
            <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
              <p className="text-base font-semibold text-dark">Classes</p>
              <h1 className="font-serif text-balance text-[clamp(2.25rem,4vw+1rem,5.25rem)] font-semibold leading-[1.1] tracking-wide text-dark">
                Find your practice
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-dark md:text-xl">
                Every class is designed to meet you where you are. Small groups,
                expert instruction, and a space that supports your growth.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-white px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-20">
            <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {classTypes.map((cls) => (
                <div
                  key={cls.name}
                  className="flex flex-col gap-4 rounded-2xl border border-black-15 bg-white p-6 md:p-8"
                >
                  <div className="flex items-center gap-3">
                    <p className="rounded-full bg-sage px-3 py-1 text-xs font-medium text-dark">
                      {cls.level}
                    </p>
                    <p className="text-xs text-black-50">{cls.duration}</p>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold leading-snug tracking-wide text-dark">
                    {cls.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-dark md:text-base">
                    {cls.description}
                  </p>
                  <a
                    href="/#book"
                    className="mt-auto inline-flex items-center justify-center rounded-xl border border-brand-blue bg-brand-blue px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-blue-hover md:self-start md:px-3 md:py-1.5 md:text-lg"
                  >
                    Book
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
