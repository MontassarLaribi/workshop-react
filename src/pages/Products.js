import React from "react";
import styled from "styled-components";
import ProductFun from "../components/ProductFun";
import { useApi } from "../hooks/useApi";

export default function Products() {
  const [products, err] = useApi("products");

  console.log(products);
  return (
    <ProductsWrapper>
      {err && <Errors>{err}</Errors>}
      {products?.map((product, index) => (
        <ProductFun product={product} key={index}></ProductFun>
      ))}
    </ProductsWrapper>
  );
}

const Errors = styled.p`
  color: red;
`;

const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
