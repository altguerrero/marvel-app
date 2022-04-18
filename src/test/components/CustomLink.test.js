import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CustomLink from "../../components/CustomLink";
import { BrowserRouter } from "react-router-dom";

describe("CharacterItemm.jsx", () => {
  let component;

  beforeEach(() => {
    component = render(
      <BrowserRouter>
        <CustomLink>click me!</CustomLink>
      </BrowserRouter>
    );
  });

  test("render component", () => {
    component.getByText("click me!");
  });
});
