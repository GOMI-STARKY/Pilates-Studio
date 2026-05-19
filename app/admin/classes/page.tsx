import { prisma } from "@/lib/prisma";

export default async function AdminClasses() {
  const classes = await prisma.class.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="mx-auto w-full max-w-7xl">
      <h1 className="font-serif text-4xl font-semibold tracking-wide text-dark md:text-6xl">
        Classes
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {classes.map((cls) => (
          <div
            key={cls.id}
            className="rounded-2xl border border-black-15 bg-white p-6"
          >
            <div className="flex items-center gap-3">
              <p className="rounded-full bg-sage px-3 py-1 text-xs font-medium text-dark">
                {cls.level}
              </p>
              <p className="text-xs text-black-50">{cls.duration}</p>
            </div>
            <h3 className="mt-3 font-serif text-2xl font-semibold tracking-wide text-dark">
              {cls.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-dark">
              {cls.description}
            </p>
            <p className="mt-2 text-xs text-black-50">
              Max spots: {cls.maxSpots} &middot;{" "}
              {cls.active ? "Active" : "Inactive"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
