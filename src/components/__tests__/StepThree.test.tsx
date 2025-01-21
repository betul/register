import { render, screen, fireEvent } from "@testing-library/react";
import StepThree from "../StepThree";

describe("StepThree", () => {
  const mockSetSelectedGoal = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders all fitness goals", () => {
    render(
      <StepThree
        selectedGoal=""
        setSelectedGoal={mockSetSelectedGoal}
        language="en"
      />
    );

    expect(screen.getByText("Lose weight")).toBeInTheDocument();
    expect(screen.getByText("Build muscle")).toBeInTheDocument();
    expect(screen.getByText("Stay healthy")).toBeInTheDocument();
  });

  test("calls setSelectedGoal when a goal is clicked", () => {
    render(
      <StepThree
        selectedGoal=""
        setSelectedGoal={mockSetSelectedGoal}
        language="en"
      />
    );

    fireEvent.click(screen.getByText("Lose weight"));
    expect(mockSetSelectedGoal).toHaveBeenCalledWith("lose_weight");
  });
});
