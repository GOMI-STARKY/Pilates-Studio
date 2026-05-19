"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Instructors", href: "/instructors" },
  { label: "Memberships", href: "/memberships" },
  { label: "Contact", href: "/contact" },
];

const moreLinks = [
  { label: "Sample class", href: "/classes/reformer-foundations" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black-6 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-5 md:h-[72px] md:px-16">
        <a href="/" className="flex shrink-0 items-center">
          <img
            alt="Studio"
            width="120"
            height="46"
            className="h-[46px] w-[120px] object-contain"
            src="/placeholder-logo.svg"
          />
        </a>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:flex lg:gap-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-dark transition hover:opacity-70 lg:text-lg"
            >
              {link.label}
            </a>
          ))}
          <details className="relative cursor-pointer list-none [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center gap-1 text-base text-dark marker:content-none lg:text-lg">
              More
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <div className="absolute right-0 top-full z-20 mt-2 min-w-[220px] rounded-xl border border-black-10 bg-white p-2 shadow-lg">
              {moreLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-base hover:bg-black-4"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </details>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:gap-3">
          <a
            href="/#book"
            className="inline-flex items-center justify-center rounded-xl border border-brand-green bg-brand-green px-3 py-1.5 text-sm font-medium text-white transition hover:bg-brand-green-hover md:px-3 md:py-1.5 md:text-lg"
          >
            Book
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-black-10 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M4 7h16v2H4V7zm0 4h16v2H4v-2zm0 4h16v2H4v-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-black-6 bg-white px-5 pb-6 pt-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-base hover:bg-black-4"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <details className="group">
              <summary className="flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-base hover:bg-black-4 marker:content-none">
                More
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="transition group-open:rotate-180"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <div className="ml-4 mt-1 flex flex-col">
                {moreLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-3 py-2 text-base hover:bg-black-4"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </details>
          </div>
        </div>
      )}
    </header>
  );
}
