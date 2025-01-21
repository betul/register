import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WorkoutForm from "../WorkoutForm";
import { workoutAPI } from "../../services/mockAPI";

// Mock API calls
jest.mock("../../services/mockAPI");

describe("WorkoutForm", () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test("renders first step correctly", () => {
    render(<WorkoutForm />);
    expect(
      screen.getByText("Let's create your personal workout plan")
    ).toBeInTheDocument();
  });

  test("validates height and weight inputs", async () => {
    render(<WorkoutForm />);

    const heightInput = screen.getByPlaceholderText("Your height (cm)");
    const weightInput = screen.getByPlaceholderText("Your weight (kg)");
    const nextButton = screen.getByText("Next");

    await userEvent.type(heightInput, "50");
    await userEvent.type(weightInput, "20");
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(
        screen.getByText("Height must be at least 100 cm")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Weight must be at least 30 kg")
      ).toBeInTheDocument();
    });
  });

  test("calculates ratio and moves to step 2", async () => {
    render(<WorkoutForm />);

    await act(async () => {
      const heightInput = screen.getByPlaceholderText("Your height (cm)");
      const weightInput = screen.getByPlaceholderText("Your weight (kg)");

      await userEvent.type(heightInput, "180");
      await userEvent.type(weightInput, "80");
      fireEvent.click(screen.getByText("Next"));
    });

    await waitFor(() => {
      expect(workoutAPI.saveMeasurements).toHaveBeenCalledWith({
        height: "180cm",
        weight: "80kg",
        ratio: expect.any(String),
      });
    });
  });

  test("completes full registration flow", async () => {
    // Setup API mocks
    (workoutAPI.saveMeasurements as jest.Mock).mockResolvedValue({});
    (workoutAPI.saveSchedule as jest.Mock).mockResolvedValue({});
    (workoutAPI.saveGoal as jest.Mock).mockResolvedValue({});
    (workoutAPI.saveUser as jest.Mock).mockResolvedValue({});

    render(<WorkoutForm />);

    // Step 1: Height and weight input
    await userEvent.type(
      screen.getByPlaceholderText("Your height (cm)"),
      "170"
    );
    await userEvent.type(screen.getByPlaceholderText("Your weight (kg)"), "70");
    fireEvent.click(screen.getByText("Next"));

    // Step 2: Day selection
    await waitFor(() => {
      expect(screen.getByText("Pick your workout days")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText("Monday"));
    fireEvent.click(screen.getByText("Next"));

    // Step 3: Goal selection
    await waitFor(() => {
      expect(
        screen.getByText("What is your fitness goal?")
      ).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText("Build muscle"));
    fireEvent.click(screen.getByText("Next"));

    // Step 4: User information
    await waitFor(() => {
      expect(
        screen.getByText("Final step. Complete your registration")
      ).toBeInTheDocument();
    });
    await userEvent.type(
      screen.getByPlaceholderText("E-mail"),
      "test@example.com"
    );
    await userEvent.type(screen.getByPlaceholderText("Password"), "Test1234!");
    await userEvent.type(screen.getByPlaceholderText("Name"), "John");
    await userEvent.type(screen.getByPlaceholderText("Surname"), "Doe");
    fireEvent.click(screen.getByText("Save"));

    // Check success modal
    await waitFor(() => {
      expect(screen.getByText("Success!")).toBeInTheDocument();
      expect(
        screen.getByText("Your membership has been created successfully.")
      ).toBeInTheDocument();
    });
  });
});
