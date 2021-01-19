import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ProductFun(props) {
  const [product, setProduct] = useState(props.product);
  const [updated, setUpdated] = useState(0);

  const addPrice = () => {
    setProduct({ ...product, price: Number(product.price) + 0.1 });
    setUpdated((u) => u + 1);
  };

  useEffect(() => {
    console.log(updated);
  }, [updated]);

  useEffect(() => {
    console.log(
      "I have finished rendering " +
        props.product.name +
        " price: " +
        props.product.price
    );
    return () => {
      console.log("I'm being destroyed");
    };
  });

  return (
    <ProductFrame>
      <ProductImageWrapper>
        <ProductImage src={props.product.img}></ProductImage>
      </ProductImageWrapper>
      <ProductInfoWrapper>
        <span>
          <a href={"/product/" + props.product.name}>{props.product.name}</a>
        </span>
        <span>
          {product.price}{" "}
          {/* {Number(this.state.product.price) > 2 ? "expensive" : "Promo"} */}
          {Number(product.price, 3) > 2 && "expensive"}
        </span>
        <button onClick={addPrice}>Add 0.1</button>
      </ProductInfoWrapper>
    </ProductFrame>
  );
}

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
