import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Button from "../../components/Button";

test("renders content", () => {
  const component = render(
    <Button variant="text" color="primary" width="full">
      click me!
    </Button>
  );

  component.getByText("click me!");
});
