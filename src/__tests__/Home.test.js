import React from "react";
import Home from "../components/Home.jsx";
import { render, fireEvent, cleanup, getByText } from "react-testing-library";

describe("Home section", () => {
  afterEach(cleanup);
  test("Home section render correctly", () => {
    const { debug } = render(<Home />);
  });

  test("Handle buy button", () => {
    const { getByTestId } = render(
      <Home>
        <button data-testid="buy-button">
          Comprar
        </button>
      </Home>
    );
    const buyButton = getByTestId("buy-button");
  });
});
