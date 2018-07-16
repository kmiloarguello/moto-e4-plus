import React from "react";
import Moto from "../Moto.jsx";
import { render } from "react-testing-library";

describe("Landing page", () => {
  test("Moto component render correctly", () => {
    const { debug } = render(<Moto />);
  });
});
