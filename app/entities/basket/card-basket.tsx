import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Multiple from "../../components/multiple";
import Image from "next/image";
import { Product } from "@/types/product";
import { useShopStore } from "@/app/providers/store-provider";

type CardBasketProps = {
  product: Product;
};

export default function CardBasket({ product }: CardBasketProps) {
  const addProductToCart = useShopStore(state => state.addProductToCart)
  const removeProductFromCart = useShopStore(state => state.removeProductFromCart)
  return <Paper sx={{ p: 2, display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center' }}  >
    <Box>
      <Box
        sx={{
          flexShrink: 0,
          width: 112,
          height: 112,
          position: "relative",
        }}
      >
        <Image
          src={`https://pizzahouse.ua${product.image.large}`}
          alt={product.title}
          sizes="112px"
          fill
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>
    <Box display="flex" justifyContent="space-between" width="100%">
      <Box>
        <Typography variant="subtitle1">{product.title}</Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          {`${product.price * (product.count ?? 1)} $`}
        </Typography>
      </Box>
      <Stack>
        <Multiple
          countProduct={product.count ?? 1}
          reverse
          plusCount={() => addProductToCart(product)}
          minusCount={() => removeProductFromCart(product.id)}
        />
      </Stack>
    </Box>
  </Paper>
}