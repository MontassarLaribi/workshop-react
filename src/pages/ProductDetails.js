import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProductFun from "../components/ProductFun";

export default function ProductDetails(props) {
  const history = useHistory();
  const name = props.match.params.name;
  const toRender = useSelector((state) =>
    state.products.products.find((item) => item.title === name)
  );
  return (
    <>
      <button onClick={() => history.replace("/products")}>
        Return to products
      </button>
      <ProductsWrapper>
        {toRender ? (
          <ProductFun product={toRender}></ProductFun>
        ) : (
          <p>Product not found</p>
        )}
      </ProductsWrapper>
    </>
  );
}

const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
