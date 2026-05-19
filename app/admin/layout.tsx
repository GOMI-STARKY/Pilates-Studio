import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-black-6 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-16">
          <a
            href="/admin"
            className="font-serif text-lg font-semibold tracking-wide text-dark"
          >
            Admin
          </a>
          <nav className="flex items-center gap-6">
            <a
              href="/admin/bookings"
              className="text-sm text-dark transition hover:opacity-70"
            >
              Bookings
            </a>
            <a
              href="/admin/classes"
              className="text-sm text-dark transition hover:opacity-70"
            >
              Classes
            </a>
            <a
              href="/"
              className="text-sm text-dark/50 transition hover:opacity-70"
            >
              View site
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-1 bg-cream px-5 py-12 md:px-16">{children}</main>
    </div>
  );
}
