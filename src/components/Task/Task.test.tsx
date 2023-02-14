import { render, screen } from "@testing-library/react";
import Task from "./Task";

describe("Given a Task component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Take out the rubish'", () => {
      const text = "Take out the rubish";

      render(<Task />);

      const expectedText = screen.getByRole("heading", { name: text });

      expect(expectedText).toBeInTheDocument();
    });

    test("Then it should show a button with the text '✅'", () => {
      const text = "✅";

      render(<Task />);

      const expectedText = screen.getByRole("button", { name: text });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
