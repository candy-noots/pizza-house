"use client";

import * as React from "react";

import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import LoginForm from "../entities/modal/login-form";

export default function ModalPopup() {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="inherit"
        sx={{ fontWeight: "400" }}
        onClick={handleClickOpen}
      >
        УВІЙТИ
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ maxWidth: 500, mx: 'auto', }}
      >
        <DialogTitle>Увійти</DialogTitle>
        <DialogContent color="inherit">
          <DialogContentText mb={2}>
            Будь-ласка, введіть Ваш номер телефону та пароль
          </DialogContentText>
          <LoginForm />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={handleClose} variant="text">
            ЗАКРИТИ
          </Button>
          <Button color="inherit" type="submit" variant="text">
            УВІЙТИ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
