import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, phone, classId, date } = await req.json();

    if (!name || !email || !classId || !date) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const cls = await prisma.class.findUnique({ where: { id: classId } });
    if (!cls) {
      return NextResponse.json({ error: "Class not found" }, { status: 404 });
    }

    const bookingCount = await prisma.booking.count({
      where: { classId, date: new Date(date), status: "confirmed" },
    });

    if (bookingCount >= cls.maxSpots) {
      return NextResponse.json(
        { error: "Class is full" },
        { status: 409 },
      );
    }

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        classId,
        date: new Date(date),
      },
    });

    return NextResponse.json(booking);
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const bookings = await prisma.booking.findMany({
    include: { class: true },
    orderBy: { date: "desc" },
  });
  return NextResponse.json(bookings);
}
