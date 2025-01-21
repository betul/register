import { render, screen, fireEvent } from "@testing-library/react";
import StepOne from "../StepOne";

describe("StepOne", () => {
  const mockSetWeight = jest.fn();
  const mockSetHeight = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders input fields", () => {
    render(
      <StepOne
        weight=""
        height=""
        setWeight={mockSetWeight}
        setHeight={mockSetHeight}
        language="en"
        errors={{}}
      />
    );

    expect(screen.getByPlaceholderText("Your height (cm)")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your weight (kg)")).toBeInTheDocument();
  });

  test("calls setHeight with number value", async () => {
    render(
      <StepOne
        weight=""
        height=""
        setWeight={mockSetWeight}
        setHeight={mockSetHeight}
        language="en"
        errors={{}}
      />
    );

    const heightInput = screen.getByPlaceholderText("Your height (cm)");
    fireEvent.change(heightInput, { target: { value: "180" } });

    expect(mockSetHeight).toHaveBeenCalledWith(180);
  });
});
