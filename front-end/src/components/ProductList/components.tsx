import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ProductEntity } from "./interfaces";
import PlainCard from "./plain-card";
interface ProductTilesProps {
  products: Array<ProductEntity>;
}

//  poster image, date, name of the conference, is it free or paid & place, and the link
export const ProductTiles = (props: ProductTilesProps) => {
  const { products } = props;

  return (
    <Grid container spacing={2}>
      {
        // the basic tile generation code
        products &&
          products.length &&
          products.map((product: ProductEntity, index: number) => (
            <Grid item xs key={index}>
              <Box mb={2.25}>
                <PlainCard>
                  <CardMedia
                    component="img"
                    alt="product image"
                    height="140"
                    image={product.image}
                    title="product image"
                    onError={(event: any) =>
                      (event.target.src = "https://picsum.photos/200/300")
                    }
                  />
                  <Box textAlign="left">
                    {product?.name?.length > 25 ? (
                      <Tooltip title={product?.name}>
                        <Typography variant="h4">
                          {product?.name?.slice(0, 25)}...
                        </Typography>
                      </Tooltip>
                    ) : (
                      <Typography variant="h4">{product?.name}</Typography>
                    )}
                  </Box>
                  <Box display="flex" textAlign="left">
                    <Typography variant="h6">{product.description}</Typography>
                  </Box>

                  <Box p={2}>
                    <Divider />
                  </Box>
                  <Box m={1.25} display="flex" justifyContent="space-between">
                    <Box>
                      <Chip label={product.size} variant="outlined" />
                    </Box>
                    <Box>
                      <Chip label={`$ ${product.price}`} variant="outlined" />
                    </Box>
                  </Box>
                </PlainCard>
              </Box>
            </Grid>
          ))
      }
    </Grid>
  );
};
