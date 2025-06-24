import React from "react";
import Link from "next/link";

export default function Categories({categories}: any) {
  return (
    <div className="flex justify-center gap-5 text-center mt-4">
      {categories?.map((e: any) => (
        <Link href={`category` + e.url} key={e.id}>
          <div
            key={e.id}
            className="flex flex-col justify-center items-center pointer p-1 categories_menu"
          >
            <img
              key={e.id}
              src={`https://pizzahouse.ua` + e.image}
              alt={e.title}
              width={30}
              height={30}
            />
            <p className="text-sm mt-2">{e.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
