import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const [bookings, classes, contacts, subscribers] = await Promise.all([
    prisma.booking.count(),
    prisma.class.count({ where: { active: true } }),
    prisma.contactSubmission.count({ where: { read: false } }),
    prisma.newsletterSubscriber.count({ where: { active: true } }),
  ]);

  const stats = [
    { label: "Active Classes", value: classes },
    { label: "Total Bookings", value: bookings },
    { label: "Unread Messages", value: contacts },
    { label: "Newsletter Subs", value: subscribers },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl">
      <h1 className="font-serif text-4xl font-semibold tracking-wide text-dark md:text-6xl">
        Dashboard
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-black-15 bg-white p-6"
          >
            <p className="text-sm text-black-50">{stat.label}</p>
            <p className="mt-2 font-serif text-5xl font-semibold tracking-wide text-dark">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-black-15 bg-white p-6">
        <h2 className="font-serif text-2xl font-semibold tracking-wide text-dark">
          Quick links
        </h2>
        <div className="mt-4 flex flex-wrap gap-4">
          <a
            href="/admin/bookings"
            className="rounded-xl border border-brand-green bg-brand-green px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-green-hover"
          >
            View all bookings
          </a>
          <a
            href="/admin/classes"
            className="rounded-xl border border-black-15 px-4 py-2 text-sm font-medium text-dark transition hover:bg-black-3"
          >
            Manage classes
          </a>
        </div>
      </div>
    </div>
  );
}
