import { render, screen } from "@testing-library/react";
import Wrapper from "../../wrapper/wrapper";
import TaskList from "./TaskList";

describe("Given a TaskList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Task with with the title 'Tasks dashboard'", () => {
      const buttonText = "Tasks dashboard";

      render(
        <Wrapper>
          <TaskList />
        </Wrapper>
      );

      const expectedText = screen.getByRole("heading", { name: buttonText });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
