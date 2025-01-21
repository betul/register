import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StepFour from "../StepFour";

describe("StepFour", () => {
  const mockSetFormData = jest.fn();
  const initialFormData = {
    email: "",
    password: "",
    fullName: "",
    surname: "",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders all input fields", () => {
    render(
      <StepFour
        formData={initialFormData}
        setFormData={mockSetFormData}
        language="en"
      />
    );

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Surname")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("updates form data on input change", async () => {
    render(
      <StepFour
        formData={initialFormData}
        setFormData={mockSetFormData}
        language="en"
      />
    );

    const nameInput = screen.getByPlaceholderText("Name");
    await userEvent.type(nameInput, "John");

    await waitFor(() => {
      expect(mockSetFormData).toHaveBeenCalledWith(expect.any(Function));
    });
  });
});
