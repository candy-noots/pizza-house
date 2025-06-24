import { config } from "@/app/config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${config.url}pizza.json`);

    if (!res.ok) {
      throw new Error("Помилка при завантаженні даних");
    }

    const data = await res.json();
    const pizzas = data.pageProps.category.category_group_products;
    return NextResponse.json({
      pizzas, categories: data.pageProps.categories
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Помилка" },
      { status: 500 }
    );
  }
}
