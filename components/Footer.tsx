const linkCol1 = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Sample class", href: "/classes/reformer-foundations" },
];

const linkCol2 = [
  { label: "Memberships", href: "/memberships" },
  { label: "Instructors", href: "/instructors" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

const linkCol3 = [
  { label: "Blog", href: "/blog" },
  { label: "Testimonials", href: "/#instructors" },
  { label: "Newsletter", href: "/#newsletter" },
  { label: "Follow us", href: "/#follow" },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer id="book" className="bg-sage px-5 py-16 md:px-16 md:py-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 md:gap-20">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:gap-16">
          <div className="flex max-w-xl flex-col gap-6 md:gap-8">
            <h2 className="font-serif text-4xl font-semibold leading-[1.1] tracking-wide text-dark md:text-[clamp(2.5rem,4vw+1rem,5.25rem)]">
              Begin your pilates journey today
            </h2>
            <p className="text-sm leading-relaxed text-dark md:text-lg">
              Transform your body and mind through intentional movement and
              expert guidance
            </p>
            <div className="flex flex-wrap gap-4">
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

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:max-w-2xl md:flex-1 lg:max-w-none">
            <div className="flex flex-col gap-1">
              {linkCol1.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-base font-semibold text-dark hover:opacity-70"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              {linkCol2.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-base font-semibold text-dark hover:opacity-70"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="col-span-2 flex flex-col gap-1 sm:col-span-1">
              {linkCol3.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-base font-semibold text-dark hover:opacity-70"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <img
              alt="Studio"
              width="120"
              height="46"
              className="h-[46px] w-[120px] object-contain"
              src="/placeholder-logo.svg"
            />
            <div className="flex -space-x-3">
              {[5, 4, 3, 2, 1].map((z) => (
                <div
                  key={z}
                  className="relative size-12 overflow-hidden rounded-full border border-white bg-white"
                  style={{ zIndex: z }}
                >
                  <div className="h-full w-full rounded-full bg-sage" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-px w-full bg-black-10" />

          <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm text-dark">
              &copy; 2026 Boutique Pilates Studio. All rights reserved.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="opacity-80 transition hover:opacity-100"
                  aria-label={link.label}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d={
                        link.label === "Facebook"
                          ? "M16 8h-2a2 2 0 00-2 2v10m4-6h-6"
                          : link.label === "Instagram"
                            ? "M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM9 2h6a7 7 0 017 7v6a7 7 0 01-7 7H9a7 7 0 01-7-7V9a7 7 0 017-7z"
                            : link.label === "X"
                              ? "M4 4l6 6m0 0l-6 6m6-6l6 6m-6-6l6-6"
                              : link.label === "LinkedIn"
                                ? "M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4V8h4v2a4 4 0 014-4zM6 8v12H2V8h4zM4 6a2 2 0 100-4 2 2 0 000 4z"
                                : "M10 9l5 3-5 3V9z"
                      }
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
