import React, { Component } from "react";
import styled from "styled-components";

export default class Header extends Component {
  render() {
    return (
      <HeaderFrame>
        <ul>
          <li>
            <a href="/welcome">Welcome</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </HeaderFrame>
    );
  }
}

const HeaderFrame = styled.div`
  min-height: 50px;
  min-width: 100%;
  background-color: rgb(150, 150, 150, 0.7);
  display: flex;
  flex-direction: column;
  & > ul {
    list-style: none;
    display: flex;
    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`;
