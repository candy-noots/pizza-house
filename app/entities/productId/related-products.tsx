import CardRelated from "@/app/entities/productId/card-related";
import { Box, Typography } from "@mui/material";

interface RelatedProduct {
  id: string;
  title: string;
  image: {
    large: string;
  };
  price: number;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <>
      <Typography variant="h4" mt={5}>
        Часто замовляють з
      </Typography>
      <Box display="flex" gap={5} mt={2} flexWrap="wrap">
        {products.map((e) => (
          <CardRelated key={e.id} product={e} />
        ))}
      </Box>
    </>
  );
}
