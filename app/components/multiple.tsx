"use client";

import React from "react";
import { Box, Fab, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { yellow } from "@mui/material/colors";

interface Props {
  reverse?: boolean
  i?: any
}

export default function Multiple({ reverse, i }: Props) {
  const [count, setCount] = React.useState<any>(0);
  
  const plusCount = () => {
    setCount(count  + 1)
  }

  const minusCount = () => {
    if (count == 0) {
      return count
    } else {
      setCount(count - 1)
    }
  }
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
        onClick={() => minusCount()}
      >
        <RemoveIcon fontSize="inherit" />
      </IconButton>
      <Typography component="span">{count}</Typography>
      <IconButton
        aria-label="delete"
        size="small"
        sx={{
          backgroundColor: yellow[500],
          color: "white",
          ":hover": "none",
        }}
        onClick={() => plusCount()}
      >
        <AddIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
}
