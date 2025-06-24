import CardProduct from "@/app/components/card-product";
import { getCategoryId, getPizzaId } from "@/lib/data";
import { Box, Container, Grid } from "@mui/material";

interface Props {
  className?: string;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const response = await getCategoryId(slug);
  const products = response.pageProps.category.category_products
  if (!products || products.length === 0) {
    return <div>Немає продуктів у цій категорії.</div>;
  }
  console.log(products)
  return (
    <div>
       <Container maxWidth="xl">
        <Grid container spacing={5} sx={{ mx: "auto", mt: 5, gap: 5 }}>
          {products?.map((e: any) => (
            <Grid size={4} key={e.id}>
              <CardProduct product={e} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
