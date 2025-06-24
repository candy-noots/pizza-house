"use client";
import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Categories from "./components/categories";
import CenterMode from "./components/slider";
import CardItem from "./components/card-item";


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
    </div>
  );
}
