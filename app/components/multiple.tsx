"use client";

import React from "react";
import { Box, Fab, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { yellow } from "@mui/material/colors";
import { Product } from "@/types/product";

interface Props {
  reverse?: boolean
  countProduct: number
  plusCount: () => void
  minusCount: () => void
}

export default function Multiple({ reverse, countProduct, plusCount, minusCount }: Props) {
  return (
    <Box sx={{ display: "flex", alignItems: 'center', gap: 1 }} flexDirection={reverse ? "column-reverse" : "row"} >
      <IconButton
        aria-label="delete"
        size="small"
        sx={{
          backgroundColor: yellow[500],
          color: "white",
          ":hover": "none",
        }}
        onClick={minusCount}
      >
        <RemoveIcon fontSize="inherit" />
      </IconButton>
      <Typography component="span">{countProduct}</Typography>
      <IconButton
        aria-label="delete"
        size="small"
        sx={{
          backgroundColor: yellow[500],
          color: "white",
          ":hover": "none",
        }}
        onClick={plusCount}
      >
        <AddIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}
