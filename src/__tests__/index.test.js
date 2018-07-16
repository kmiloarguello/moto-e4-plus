import React from "react";
import { render } from "react-testing-library";

describe("Basis", () => {
  test("Node version is greater or equal than 8", () => {
    let Nodeversion = window.process.versions.node;
    const nv_final = parseFloat(Nodeversion);
    expect(nv_final).toBeGreaterThanOrEqual(8.0);
  });
});
