import { getPizzaId } from "@/lib/data";
import { Container, Grid, Typography } from "@mui/material";
import PriceBox from "../entities/productId/price-box";
import ModifiersCheckboxList from "../entities/productId/modifiers-checkbox-list";
import RelatedProducts from "../entities/productId/related-products";
import ModifiersMultiple from "../entities/productId/modifiers-multiple";
import { useShopStore } from "../providers/store-provider";
import ModifiersItem from "../entities/productId/modifiers-item";
import ModifiersList from "../entities/productId/modifiers-list";

interface Params {
  params: { slug: string };
}

export default async function Page({ params }: Params) {
  const slug = params.slug;
  const response = await getPizzaId(slug);
  const product = response.pageProps.product;
  let productModifiers: any = []
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2} p={5} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 6 }} display="flex" justifyContent="center">
          <img
            src={`https://pizzahouse.ua${product.image.large}`}
            className="w-[500] h-full object-contain"
            alt={product.image.title}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h4">{product.title}</Typography>
          <Typography variant="subtitle1" mt={1}>
            {product.weight}
          </Typography>
          <Typography variant="body1" mt={1}>
            {product.description}
          </Typography>

          <PriceBox product={product} />

          {product.group_modifiers?.length > 0 && (
            <>
              <Typography variant="h5" mt={3}>Хочу додати</Typography>
              <ModifiersList />
              {[...product.group_modifiers]
                .sort((a, b) => {
                  if (a.type === "select" && b.type !== "select") return -1;
                  if (a.type !== "select" && b.type === "select") return 1;
                  return 0;
                })
                .map((mod: any) =>
                  mod.type === "select" ? (
                    <ModifiersCheckboxList
                      key={mod.title}
                      title={mod.title}
                      modifiers={mod.modifiers}
                      productModifiers={productModifiers}
                    />
                  ) : mod.type === "multiple" ? (
                    <ModifiersMultiple key={mod.title} e={mod} />
                  ) : null
                )}

            </>
          )}
        </Grid>
      </Grid>

      <RelatedProducts products={product.well_together_products} />
    </Container>
  );
}
