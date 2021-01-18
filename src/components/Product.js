import React, { Component } from "react";
import styled from "styled-components";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: props.product, updated: 0 };
    this.addPrice = this.addPrice.bind(this);
  }

  componentDidMount() {
    console.log(
      "I have finished rendering " +
        this.props.product.name +
        " price: " +
        this.state.product.price
    );
  }

  componentDidUpdate() {
    console.log("I have been updated " + this.state.updated + " times");
  }

  componentWillUnmount() {
    console.log("I'm being destroyed");
  }

  addPrice(e) {
    e.preventDefault();
    this.setState((oldState) => ({
      product: {
        ...oldState.product,
        price: Number(oldState.product.price) + 0.1,
      },
      updated: oldState.updated + 1,
    }));
  }

  render() {
    return (
      <ProductFrame>
        <ProductImageWrapper>
          <ProductImage src={this.state.product.img}></ProductImage>
        </ProductImageWrapper>
        <ProductInfoWrapper>
          <span>
            <a href={"/product/" + this.state.product.name}>
              {this.state.product.name}
            </a>
          </span>
          <span>
            {this.state.product.price}{" "}
            {/* {Number(this.state.product.price) > 2 ? "expensive" : "Promo"} */}
            {Number(this.state.product.price) > 2 && "expensive"}
          </span>
          <button onClick={this.addPrice}>Add 0.1</button>
        </ProductInfoWrapper>
      </ProductFrame>
    );
  }
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
