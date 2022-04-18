import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Stack from "../../components/Stack";

describe("Stack.jsx", () => {
  let component;

  beforeEach(() => {
    component = render(
      <Stack>
        <div>element</div>
      </Stack>
    );
  });

  test("render component", () => {
    expect(component.container.querySelector(".stack")).toBeDefined();
  });
});
