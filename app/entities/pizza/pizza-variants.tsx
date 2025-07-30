import React from "react";
import { Button, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Product } from "@/types/product";

interface ProductVariantsProps {
  products: Product[];
  activeIndex: number;
  onChange: (index: number) => void;
}

const ProductVariants: React.FC<ProductVariantsProps> = ({ products, activeIndex, onChange }) => {
  return (
    <Box
      display="flex"
      mt={2}
      bgcolor={grey[100]}
      p={0.2}
      borderRadius={1}
    >
      {products.map((product, index) => (
        <Button
          key={product.id || index}
          variant={activeIndex === index ? "contained" : "outlined"}
          color={activeIndex === index ? "primary" : "inherit"}
          fullWidth
          size="small"
          onClick={() => onChange(index)}
          sx={{
            mx: 0.3,
            fontWeight: 500,
            border:0,
            textTransform: "none"
          }}
        >
          {product.weight} г
        </Button>
      ))}
    </Box>
  );
};

export default ProductVariants;
