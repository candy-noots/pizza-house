import { config } from "@/app/config";
import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  try {
    const slug = context.params.slug;
    const res = await fetch(config.url + `${slug}.json`);

    if (!res.ok) {
      throw new Error("Помилка при завантаженні даних");
    }

    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Помилка" },
      { status: 500 }
    );
  }
}
