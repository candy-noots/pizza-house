import * as React from "react";

import { AppBar, Box, Toolbar, Button, Container } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HeaderMenu from "./header-menu";
import HeaderSelect from "./header-select";
import ModalPopup from "./modal-popup";
import Basket from "./basket";

import Link from "next/link";

export default function Header() {
  return (
    <Box flexGrow={1}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href={"/"}>
                <img
                  src="https://pizzahouse.ua/_next/static/media/logo.0053162d.svg"
                  style={{ width: 55, height: 55, cursor: "pointer" }}
                />
              </Link>
              <HeaderMenu />
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                startIcon={<LocalOfferIcon />}
              >
                Акція
              </Button>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <HeaderSelect title="ENG" links={["ENG", "RUS", "UKR"]} />
              <HeaderSelect
                title="8-800-000-00-00"
                links={["38000000000", "18000000000", "87000000000"]}
              />
              <ModalPopup />
              <Basket />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
