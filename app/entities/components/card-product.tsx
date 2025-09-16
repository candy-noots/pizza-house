'use client'
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Link from "next/link";

export default function CardProduct({ product }: any) {
  if (!product) return null;
  return (
    <Link href={`${product.url}`}>
      <Card sx={{ width: "100%", height: "100%" }}>
        <img
          src={`https://pizzahouse.ua/` + product.image.large}
          alt="green iguana"
          className="object-contain"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            m: 1,
            zIndex: 10,
          }}
        >
          <Typography
            sx={{ ml: 1.5 }}
            gutterBottom
            variant="h6"
            component="div"
          >
            {product.price} $
          </Typography>

          <Button
            sx={{
              backgroundColor: "#ffeb3b",
              color: "black",
              p: 1,
            }}
            size="small"
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
