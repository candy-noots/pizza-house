import { Container, Grid } from "@mui/material";
import Categories from "./widgets/categories";
import Carousel from "./widgets/carousel";
import PizzaCard from "./entities/pizza/pizza-card";


interface Pizza {
  id: string;
  title: string;
  image: {
    large: string;
  };
  products: any[];
}

interface ItemsResponse {
  categories: string[];
  pizzas: Pizza[];
}

async function getPizzas(): Promise<ItemsResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pizzas`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Не вдалося завантажити піци");
  }

  return res.json();
}

export default async function Home() {
  const items = await getPizzas();
  return (
    <div>
      <Categories categories={items.categories} />
      <Carousel />
      <Container maxWidth="xl">
        <Grid container spacing={5}>
          {items.pizzas.map((pizza) => (
            <Grid key={pizza.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <PizzaCard
                title={pizza.title}
                products={pizza.products}
                image={pizza.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}