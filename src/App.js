import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Header></Header>
      <AppFrame className="App">
        <BrowserRouter basename="/">
          <Switch>
            <Route
              path="/welcome"
              render={(props) => <Welcome {...props} />}
            ></Route>
            <Route
              path="/products"
              render={(props) => <Products {...props} />}
            ></Route>
            <Route
              path="/product/:name"
              render={(props) => <ProductDetails {...props} />}
            ></Route>
            <Route exact render={() => <p>Default rendered page!</p>}></Route>
          </Switch>
        </BrowserRouter>
      </AppFrame>
    </>
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export default App;
