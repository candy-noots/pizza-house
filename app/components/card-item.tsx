import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Link from "next/link";
import { grey } from "@mui/material/colors";
import { useShopStore } from "../providers/store-provider";

export default function CardItem({ title, products, image }: any) {
  const [active, setActive] = React.useState<number>(0);
  const changeActive = (element: any) => {
    setActive(element);
  };
  if (!products) return null;
  const addProductToCart = useShopStore(state => state.addProductToCart)
    const removeProductFromCart = useShopStore(state => state.removeProductFromCart)

  return (
    <Card sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <Link href={`${products[active].url}`}>
        <img
          src={`https://pizzahouse.ua/` + image.large}
          alt="green iguana"
          className="object-contain"
        />
         </Link>
        <CardContent>
          <Link href={`${products[active].url}`}>
          <Typography variant="h5" component="h5" mb={2}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {products[0]?.description}
          </Typography>
          </Link>
          <Box
            display="flex"

            mt={2}
            bgcolor={grey[100]}
            p={0.2}
          >
            <Button
              variant={active == 0 ? "contained" : "text"}
              color={active == 0 ? "primary" : "inherit"}
              fullWidth
              size="small"
              onClick={() => changeActive(0)}
            >
              {products[0].weight} {"гр."}
            </Button>
            <Button
              variant={active == 1 ? "contained" : "text"}
              color={active == 1 ? "primary" : "inherit"}
              fullWidth
              size="small"
              onClick={() => changeActive(1)}
            >
              {products[1].weight} {"гр."}
            </Button>
          </Box>
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
          {products[active]?.price} $
        </Typography>

        <Button
          size="medium"
          variant="contained"
          onClick={() => addProductToCart(products[active])}
        >
          У кошик
        </Button>
        <Button
          size="medium"
          variant="contained"
          onClick={() => removeProductFromCart(products[active].id)}
        >
          Прибрати з кошика
        </Button>
      </CardActions>
    </Card>

  );
}
