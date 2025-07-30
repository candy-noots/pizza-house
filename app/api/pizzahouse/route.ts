// /app/api/pizzahouse/route.ts
import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';

let cachedBaseUrl: string | null = null;
let lastFetched = 0;

async function getBaseUrl(): Promise<string> {
  const now = Date.now();
  // Кешуємо 1 годину
  if (cachedBaseUrl && now - lastFetched < 60 * 60 * 1000) {
    return cachedBaseUrl;
  }

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'], // якщо запускаєш на сервері Linux
  });
  try {
    const page = await browser.newPage();

    // Переходимо і чекаємо повного завантаження (networkidle0 — нема мережевих зʼєднань)
    await page.goto('https://pizzahouse.ua/', { waitUntil: 'networkidle0', timeout: 120000 });

    // Чекаємо додатково 3 секунди, щоб JS точно виконався
    await page.waitForTimeout(3000);

    // Пробуємо отримати buildId з глобальної змінної __NEXT_DATA__
    const baseUrl = await page.evaluate(() => {
      // @ts-ignore
      const nextData = window.__NEXT_DATA__;
      if (nextData?.buildId) {
        return `https://pizzahouse.ua/_next/data/${nextData.buildId}/uk/`;
      }

      // Альтернативно - шукаємо посилання в атрибутах тегів
      const links = Array.from(document.querySelectorAll('a, link, script'))
        .map(el => el.getAttribute('href') || el.getAttribute('src'))
        .filter(Boolean);

      for (const link of links) {
        const match = link.match(/\/_next\/data\/([^\/]+)\/uk\//);
        if (match) {
          return `https://pizzahouse.ua${match[0]}`;
        }
      }

      return null;
    });

    if (!baseUrl) {
      throw new Error('Build base URL not found on page');
    }

    cachedBaseUrl = baseUrl;
    lastFetched = now;

    return baseUrl;
  } finally {
    await browser.close();
  }
}

export async function GET() {
  try {
    const baseUrl = await getBaseUrl();
    return NextResponse.json({ baseUrl });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}