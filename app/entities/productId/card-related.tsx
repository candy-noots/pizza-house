import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

export default function CardOffer({ product }: any) {
  if (!product) {
    return null
  }

  return <Card sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", px: 2, borderRadius: 5, maxWidth: '450px' }}>
    <Link href={`${product.url}`}>
      <CardMedia
        component="img"
        sx={{ width: '100px', height: '100px' }}
        src={`https://pizzahouse.ua` + product.image.small}
        alt="Live from space album cover"
      />
    </Link>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ my: "auto" }}>
        <Typography component="div" variant="h6">
          {product.title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: "space-between", mt: 3, gap: 3 }}>
          <Typography component="div" variant="h6">
            {product.price} $
          </Typography>
          <IconButton
            aria-label="delete"
            size="small"
            sx={{
              width: 30, height: 30,
              backgroundColor: yellow[500],
              color: "white",
              ":hover": "none",
            }}
          >
            <AddIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </CardContent>
    </Box>
  </Card>
}