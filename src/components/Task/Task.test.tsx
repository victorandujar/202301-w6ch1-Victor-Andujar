import { render, screen } from "@testing-library/react";
import Wrapper from "../../wrapper/wrapper";
import Task from "./Task";

describe("Given a Task component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Take out the rubish'", () => {
      const todo = {
        id: 1,
        name: "Cook for the week",
        isDone: false,
      };

      render(
        <Wrapper>
          <Task todo={todo} />
        </Wrapper>
      );

      const expectedText = screen.getByRole("heading", { name: todo.name });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
