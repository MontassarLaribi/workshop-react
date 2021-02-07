import React from "react";
import styled from "styled-components";
import ProductFun from "../components/ProductFun";
import { useSelector } from "react-redux";
import { selectProducts } from "../redux/slices/productsSlice";
import { Helmet } from "react-helmet";

export default function Products() {
  const [products, err] = useSelector(selectProducts);

  return (
    <ProductsWrapper>
      <Helmet>
        <title>Products list</title>
      </Helmet>
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
