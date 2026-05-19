import AnimatedSection from "@/components/AnimatedSection";

const posts = [
  {
    title: "Five reasons to start Pilates this season",
    excerpt:
      "From improved posture to mental clarity, discover why Pilates is the practice your body and mind have been waiting for.",
    date: "May 12, 2026",
  },
  {
    title: "What to expect in your first reformer class",
    excerpt:
      "Nervous about your first class? Here is everything you need to know — from what to wear to how the reformer works.",
    date: "April 28, 2026",
  },
  {
    title: "The connection between breath and movement",
    excerpt:
      "Learn how proper breathing techniques can transform your practice and deepen your mind-body connection.",
    date: "April 15, 2026",
  },
  {
    title: "How often should you do Pilates?",
    excerpt:
      "We break down the ideal frequency for seeing results, whether you are a beginner or a seasoned practitioner.",
    date: "March 30, 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <AnimatedSection>
        <section className="bg-cream px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:gap-20">
            <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center md:gap-8">
              <p className="text-base font-semibold text-dark">Blog</p>
              <h1 className="font-serif text-balance text-[clamp(2.25rem,4vw+1rem,5.25rem)] font-semibold leading-[1.1] tracking-wide text-dark">
                Insights & inspiration
              </h1>
              <p className="max-w-2xl text-pretty text-sm leading-relaxed text-dark md:text-xl">
                Thoughts on movement, mindfulness, and living well from our
                studio community.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="bg-white px-5 py-16 md:px-16 md:py-28">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 md:gap-20">
            <div className="grid gap-10 md:grid-cols-2 md:gap-8">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="flex flex-col gap-4 rounded-2xl border border-black-15 bg-white p-6 md:p-8"
                >
                  <p className="text-xs text-black-50">{post.date}</p>
                  <h2 className="font-serif text-2xl font-semibold leading-snug tracking-wide text-dark">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-dark md:text-base">
                    {post.excerpt}
                  </p>
                  <a
                    href="/blog"
                    className="text-sm font-semibold text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:opacity-80"
                  >
                    Read more
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
