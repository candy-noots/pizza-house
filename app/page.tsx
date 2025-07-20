"use client";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Categories from "./components/categories";
import CenterMode from "./components/slider";
import CardItem from "./components/card-item";
import { useShopStore } from "./providers/store-provider";


export default function Home() {
  const [items, setItems] = useState<any>([]);
  useEffect(() => {
    fetch("/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  if (!items) {
    return null;
  }
    const bears = useShopStore((state) => state.bears)
  const fishes = useShopStore((state) => state.fishes)
  const addBear = useShopStore((state) => state.addBear)
  const eatFish = useShopStore((state) => state.addBoth)

  return (
    <div className="">
      <Categories categories={items.categories}/>
      <CenterMode />
      <Container maxWidth="xl">
        <Grid container spacing={5} sx={{ mx: "auto" }}>
          {items?.pizzas?.map((e: any) => (
            <Grid size={4} spacing={10} key={e.id}>
              <CardItem title={e.title} products={e.products} image={e.image} />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <h2>Number of bears: {bears}</h2>
      <h2>Number of fishes: {fishes}</h2>
      <button onClick={() => addBear()}>Add a bear</button>
      <button onClick={() => eatFish()}>Eat fish</button> */}
    </div>
  );
}
