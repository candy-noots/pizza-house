'use client'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Link from "next/link";
import { grey } from "@mui/material/colors";
import { useShopStore } from "../../providers/store-provider";
import { Product } from "@/types/product";
import { useCallback, useState } from "react";
import ProductVariants from "./pizza-variants";

interface PizzaCardProps {
  title: string;
  image: { large: string };
  products: Product[];
}


export default function PizzaCard({ title, products, image }: PizzaCardProps) {
  const [active, setActive] = useState<number>(0);

  const changeActive = useCallback((index: number) => {
    setActive(index);
  }, []);

  const currentProduct = products[active];

  if (!products?.length) return null;
  const addProductToCart = useShopStore(state => state.addProductToCart)

  return (
    <Card sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <Link href={`${currentProduct.url}`}>
        <img
          src={`https://pizzahouse.ua/` + image.large}
          alt={`Pizza ${title}`}
          className="object-contain"
        />
      </Link>
      <CardContent>
        <Link href={`${currentProduct.url}`}>
          <Typography variant="h5" component="h5" mb={2}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {products[0]?.description}
          </Typography>
        </Link>
        <ProductVariants products={products} activeIndex={active} onChange={changeActive} />
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          m: 1,
          zIndex: 10,
        }}
      >
        <Typography
          variant="h6"
          component="h6"
        >
          {currentProduct.price} $
        </Typography>

        <Button
          size="medium"
          variant="contained"
          onClick={() => addProductToCart(currentProduct)}
        >
          У кошик
        </Button>
      </CardActions>
    </Card>

  );
}
