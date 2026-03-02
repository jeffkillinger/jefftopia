import { NextResponse } from "next/server";

export function GET() {
  if (process.env.NODE_ENV !== "development" || process.env.MEM_DEBUG !== "1") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    memory: process.memoryUsage(),
  });
}
