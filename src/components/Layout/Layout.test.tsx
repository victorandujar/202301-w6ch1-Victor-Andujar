import { render, screen } from "@testing-library/react";
import Wrapper from "../../wrapper/wrapper";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it renders", () => {
    test("Then it should show a title with the text 'To Do tasks'", () => {
      const text = "To Do tasks";

      render(
        <Wrapper>
          <Layout />
        </Wrapper>
      );

      const expectedTitle = screen.getByRole("heading", { name: text });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("Then it should show a form with an input", () => {
      render(
        <Wrapper>
          <Layout />
        </Wrapper>
      );

      const expectedInput = screen.getByRole("textbox");

      expect(expectedInput).toBeInTheDocument();
    });
  });
});
