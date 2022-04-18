import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Input from "../../components/Input";

describe("CharacterItemm.jsx", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Input>
        <div>element</div>
      </Input>
    );
  });

  test("render component", () => {
    expect(component.container.querySelector(".input")).toBeDefined();
  });
});
