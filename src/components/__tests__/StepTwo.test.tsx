import { render, screen } from "@testing-library/react";
import StepTwo from "../StepTwo";

describe("StepTwo", () => {
  const mockHandleDaySelection = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders all days when ratio <= 0.5", () => {
    render(
      <StepTwo
        ratio={0.4}
        selectedDays={[]}
        handleDaySelection={mockHandleDaySelection}
        language="en"
      />
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(7);
  });

  test("renders only specific days when ratio > 0.5", () => {
    render(
      <StepTwo
        ratio={0.6}
        selectedDays={[]}
        handleDaySelection={mockHandleDaySelection}
        language="en"
      />
    );

    const activeDays = screen
      .getAllByRole("listitem")
      .filter((day) => window.getComputedStyle(day).opacity === "1");

    expect(activeDays).toHaveLength(4);
    expect(screen.getByText("Monday")).toBeInTheDocument();
    expect(screen.getByText("Wednesday")).toBeInTheDocument();
    expect(screen.getByText("Saturday")).toBeInTheDocument();
    expect(screen.getByText("Sunday")).toBeInTheDocument();
  });
});
