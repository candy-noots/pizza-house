import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Multiple from "./multiple";

export default function CardBasket() {
  return <>
    <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
      <Box>
        <img className="object-fit w-24 h-24" src="https://pizzahouse.ua/_next/image?url=https%3A%2F%2Fpizzahouse.ua%2Fmedia%2F6667%2Fconversions%2F%D0%BE%D0%BA%D1%80%D0%BE%D1%88%D0%BA%D0%B0-%D0%BB%D0%BE%D1%81%D0%BE%D1%81%D1%8C--(1)-small.webp&w=1920&q=100" alt="image" />
      </Box>
      <Box justifyContent="space-between" display="flex" flexDirection="column">
        <Typography variant="subtitle1">
          Окрошка з лососем
        </Typography>
        <Typography variant="subtitle1" fontWeight="500">
          870 $
        </Typography>
      </Box>
      <Stack>
        <Multiple reverse={true} />
      </Stack>
    </Paper>
  </>
}