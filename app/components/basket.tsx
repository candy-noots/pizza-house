"use client";

import * as React from "react";
import { Box, Stack, Typography, Menu, Button } from "@mui/material";
import CardBasket from "./card-basket";

export default function Basket() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id={"id_btn"}
        aria-controls={open ? "id_menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          borderRadius: 5,
          py: 1,
          px: 1.5,
          bgcolor: "white"
        }}
        color="inherit"
      >
        CART | 0 | 0 $
      </Button>
      <Menu
        id={"id_menu"}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "id_btn",
        }}
        sx={{ height: '100%', mt: 1 }}
      >
        <Box sx={{ width: 400, height: 600 }}>
          <Stack spacing={2} p={2} display="flex" flexDirection="column" justifyContent="space-between" height="100%">
            <Box>
              <CardBasket />
            </Box>
            <Box mt={4}>
              <Typography component="div">
                Нд-Чт з 18:00 до закриття: піца Карбонара 30см за 100грн або Запечений рол з Лососем за 150грн.
              </Typography>
              <Button variant="contained" fullWidth sx={{ my: 2 }} size="large">
                ОФОРМИТИ ЗАВМОВЛЕННЯ
              </Button>
            </Box>
          </Stack>
        </Box>
      </Menu>
    </>
  );
}
