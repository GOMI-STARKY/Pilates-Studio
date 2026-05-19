import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const existing = await prisma.admin.findUnique({
    where: { email: "admin@pilates.studio" },
  });

  if (!existing) {
    const hashed = await bcrypt.hash("admin123", 12);
    await prisma.admin.create({
      data: {
        email: "admin@pilates.studio",
        password: hashed,
        name: "Admin",
      },
    });
  }

  const classes = [
    {
      name: "Reformer Foundations",
      level: "All levels",
      duration: "50 min",
      description:
        "Build a strong foundation on the reformer. This class teaches the essential principles of Pilates — breath, alignment, and core engagement.",
      maxSpots: 6,
    },
    {
      name: "Mat Pilates",
      level: "All levels",
      duration: "45 min",
      description:
        "Classic Pilates mat work using your body weight to build strength, flexibility, and control.",
      maxSpots: 10,
    },
    {
      name: "Reformer Flow",
      level: "Intermediate",
      duration: "50 min",
      description:
        "A dynamic reformer class that links traditional exercises into seamless sequences.",
      maxSpots: 6,
    },
    {
      name: "Restorative Pilates",
      level: "All levels",
      duration: "45 min",
      description:
        "A slower, more mindful practice using props and gentle movement to release tension and improve mobility.",
      maxSpots: 8,
    },
  ];

  for (const cls of classes) {
    const exists = await prisma.class.findFirst({
      where: { name: cls.name },
    });
    if (!exists) {
      await prisma.class.create({ data: cls });
    }
  }

  return NextResponse.json({ ok: true });
}
