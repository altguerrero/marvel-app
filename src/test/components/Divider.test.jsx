import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Divider from "../../components/Divider";

describe("CharacterItemm.jsx", () => {
  let component;

  beforeEach(() => {
    component = render(<Divider text="or" />);
  });

  test("render component", () => {
    component.getByText("or");
  });
});
