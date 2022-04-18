import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Container from "../../components/Container";

describe("Container.jsx", () => {
  let component;

  beforeEach(() => {
    component = render(<Container>children</Container>);
  });

  test("render component", () => {
    expect(component.container.querySelector(".container")).toBeDefined();
  });
});
