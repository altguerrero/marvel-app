import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Hero from "../../components/Hero";

describe("CharacterItemm.jsx", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Hero img="image.png">
        <div>element</div>
      </Hero>
    );
  });

  test("render component", () => {
    expect(component.container.querySelector(".hero")).toBeDefined();
  });
});
