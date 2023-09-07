import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Home")).toBeInTheDocument();
  });

  it("toggles the mobile menu on button click", () => {
    const { getByTestId } = render(<Header />);
    const mobileMenuButton = getByTestId("mobile-menu-button");

    // Initial state: menu is closed
    expect(mobileMenuButton).not.toHaveClass("show");

    // Click the mobile menu button
    fireEvent.click(mobileMenuButton);

    // After clicking: menu is open
    expect(mobileMenuButton).toHaveClass("show");

    // Click the mobile menu button again
    fireEvent.click(mobileMenuButton);

    // After clicking again: menu is closed
    expect(mobileMenuButton).not.toHaveClass("show");
  });
});
