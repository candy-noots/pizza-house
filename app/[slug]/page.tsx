import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { getPizzaId } from "../../lib/data";
import CardOffer from "../components/card-offer";
import ModifiersMultiple from "../components/modifiers-multiple";
import { useShopStore } from "../providers/store-provider";


export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const response = await getPizzaId(slug);
  const product = response.pageProps.product;

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={2} p={5} alignItems="flex-start">
          <Grid size={6} display="flex" justifyContent="center" alignItems="center">
            <img
              src={`https://pizzahouse.ua` + product.image.large}
              className="w-[500] h-full object-contain"
              alt={product.image.title}
            />
          </Grid>
          <Grid size={6}>
            <Typography variant={"h4"}>{product.title}</Typography>
            <Typography variant={"h4"}>{product.weight}</Typography>
            <Typography variant="subtitle1">
              {product.description}
            </Typography>
            <Box
              display="flex"
              gap={1}
              mt={2}
              borderRadius={3}
              bgcolor={grey[100]}
              p={1.5}
            >
              <Typography
                variant="h4"
                width="100%"
                textAlign="center"
                my="auto"
              >
                {product.price} $
              </Typography>
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{ borderRadius: 4 }}
              >
                У кошик
              </Button>
            </Box>
            {
              product.group_modifiers.length > 0 && (
                <Typography variant="h5" mt={2}>
                  Хочу додати
                </Typography>
              )
            }

            {product.group_modifiers.map((e: any) => {
              return e.type == "select" &&
                (
                  <FormGroup sx={{ p: 2 }}>
                    <Typography variant="subtitle1">{e.title}:</Typography>
                    {e.modifiers.map((l: any) => {
                      return (
                        <FormControlLabel key={l.id} control={<Checkbox />} label={`${l.title} +${l.price} ₴`} />
                      );
                    })}

                  </FormGroup>
                )
            })}

            {
              product.group_modifiers.map((e: any) => {
                return e.type == 'multiple' && (
                  <ModifiersMultiple e={e} />
                )
              })
            }
          </Grid>
        </Grid>
        <Typography variant="h4">
          Часто замовляють з
        </Typography>
        <Box display="flex" gap={15} my={5}>
          {
            product?.well_together_products.map((e: any) => (
              <CardOffer key={e.id} product={e} />
            ))
          }
        </Box>
      </Container>
    </div>
  );
}
