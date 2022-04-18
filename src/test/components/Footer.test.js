import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Footer from "../../components/Footer";

describe("CharacterItemm.jsx", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Footer>
        <p>©2022 MARVEL</p>
      </Footer>
    );
  });

  test("render component", () => {
    component.getByText("©2022 MARVEL");
  });
});
