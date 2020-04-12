import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("component App", () => {
  it("renders properly", () => {
    expect.assertions(1);

    render(<App />);

    expect(screen.getByText("Hello, World!")).toBeVisible();
  });
});
