import React from "react";
import Home from "../components/Home.jsx";
import { render, fireEvent } from "react-testing-library";

describe("Home section", () => {
  test("Home section render correctly", () => {
    const { debug } = render(<Home />);
  });
});
