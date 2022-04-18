import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Typography from "../../components/Typography";

describe("Typography.jsx", () => {
  let component;

  beforeEach(() => {
    component = render(<Typography>element</Typography>);
  });

  test("render component", () => {
    expect(component.container.querySelector(".typography")).toBeDefined();
  });
});
