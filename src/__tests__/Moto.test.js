import React from "react";
import Moto from "../Moto.jsx";
import { render } from "react-testing-library";

describe("Landing page", () => {
  test("Loader is undefined when react loads", () => {
    const loader = document.getElementsByClassName("container_loader")[0];
    expect(loader).toBeUndefined()
  })
  test("Moto component render correctly", () => {
    const { debug } = render(<Moto />);
  });
  
});
