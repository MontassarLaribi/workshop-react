import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/UserContext";

export default function Header() {
  const [user, setUser] = useContext(UserContext);

  function toggleUser() {
    !user ? setUser({ name: "test", roles: ["admin"] }) : setUser(null);
  }

  return (
    <HeaderFrame>
      <ul>
        <li>
          <a href="/welcome">Welcome</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/add">Add</a>
        </li>
        <li>
          connected user :{user?.name ?? "none"}{" "}
          <button onClick={toggleUser}>Toggle user</button>
        </li>
      </ul>
    </HeaderFrame>
  );
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
    & > li:last-child {
      margin-left: auto;
    }
  }
`;
