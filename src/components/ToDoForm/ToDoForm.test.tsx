import { screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import ToDoForm from "./ToDoForm";

describe("Given a ToDoForm component", () => {
  describe("When it renders", () => {
    test("Then it should show an area-label with the text 'name'", () => {
      const areaLabelText = "name";
      render(<ToDoForm />);

      const areaLabel = screen.getByLabelText(areaLabelText);

      expect(areaLabel).toBeInTheDocument();
    });
  });

  test("Then it should show a button with the text 'Add task'", () => {
    const buttonText = "Add task";

    render(<ToDoForm />);

    const textOnButton = screen.getByRole("button", { name: buttonText });

    expect(textOnButton).toBeInTheDocument();
  });
});
