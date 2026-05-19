import { prisma } from "@/lib/prisma";

export default async function AdminBookings() {
  const bookings = await prisma.booking.findMany({
    include: { class: true },
    orderBy: { date: "desc" },
  });

  return (
    <div className="mx-auto w-full max-w-7xl">
      <h1 className="font-serif text-4xl font-semibold tracking-wide text-dark md:text-6xl">
        Bookings
      </h1>

      <div className="mt-10 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-black-10">
              <th className="pb-3 pr-6 font-semibold text-dark">Name</th>
              <th className="pb-3 pr-6 font-semibold text-dark">Email</th>
              <th className="pb-3 pr-6 font-semibold text-dark">Class</th>
              <th className="pb-3 pr-6 font-semibold text-dark">Date</th>
              <th className="pb-3 font-semibold text-dark">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-b border-black-6">
                <td className="py-3 pr-6 text-dark">{b.name}</td>
                <td className="py-3 pr-6 text-black-70">{b.email}</td>
                <td className="py-3 pr-6 text-dark">{b.class.name}</td>
                <td className="py-3 pr-6 text-black-70">
                  {new Date(b.date).toLocaleDateString()}
                </td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      b.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
            {bookings.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-black-50"
                >
                  No bookings yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
