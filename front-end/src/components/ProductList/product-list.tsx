import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect, useState } from "react";
import config, { requestPayload } from "../config";
import useFetch from "../custom-hook";
import { ProductTiles } from "./components";
import { ProductEntity } from "./interfaces";

interface ProductListProps {}

const ProductList = (props: ProductListProps) => {
  const { loading, data, error } = useFetch(
    config.DATA_END_POINT,
    requestPayload
  );
  const [localData, setLocalData] = useState<Array<ProductEntity>>(
    [] as Array<ProductEntity>
  );

  // on each time data changes, lets have a copy for filter purpose
  useEffect(() => {
    if (data?.data?.products) {
      setLocalData(data?.data?.products);
    }
  }, [data]);
  return loading ? (
    <CircularProgress size={30} />
  ) : (
    <>
      {error ||
        (data?.data?.error && `${error || data?.data?.error}, please retry!`)}
      <ProductTiles products={localData} />
    </>
  );
};

export default ProductList;
