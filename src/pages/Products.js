import React from "react";
import styled from "styled-components";
import products from "../products.json";
import ProductFun from "../components/ProductFun";

export default function Products() {
  return (
    <ProductsWrapper>
      {products.map((product, index) => (
        <ProductFun product={product} key={index}></ProductFun>
      ))}
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
