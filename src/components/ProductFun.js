import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { queryApi } from "../utils/queryApi";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  setErrors,
} from "../redux/slices/productsSlice";

export default function ProductFun(props) {
  const [product] = useState(props.product);
  const history = useHistory();
  const dispatch = useDispatch();

  const updateProduct = () => {
    history.replace("/update/" + product._id);
  };

  const deleteProductEvent = async () => {
    const [err] = await queryApi("product/" + product._id, {}, "DELETE");
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(deleteProduct(product._id));
    }
  };

  return (
    <ProductFrame>
      <ProductImageWrapper>
        <ProductImage
          src={
            process.env.REACT_APP_API_URL_UPLOADS + "/" + props.product.image
          }
        ></ProductImage>
      </ProductImageWrapper>
      <ProductInfoWrapper>
        <span>
          <a href={"/product/" + props.product.title}>{props.product.title}</a>
        </span>
        <span>
          {product.price}{" "}
          {/* {Number(this.state.product.price) > 2 ? "expensive" : "Promo"} */}
          {Number(product.price, 3) > 2 && "expensive"}
        </span>
        <button onClick={updateProduct}>Update</button>
        <button onClick={deleteProductEvent}>Delete</button>
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
