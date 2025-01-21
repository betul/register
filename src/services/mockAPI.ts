import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export interface Workout {
  id?: string;
  name?: string;
  duration?: number;
  date?: string;
  type?: string;
  data?: {
    height?: string;
    weight?: string;
    ratio?: string;
    selectedDays?: string[];
    goal?: string;
    email?: string;
    password?: string;
    fullName?: string;
    surname?: string;
  };
}

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const workoutAPI = {
  // Save measurements (Step 1)
  saveMeasurements: async (data: {
    height: string;
    weight: string;
    ratio: string;
  }): Promise<void> => {
    try {
      await api.post("/measurements", {
        data,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error saving measurements:", error);
      throw error;
    }
  },

  // Save program days (Step 2)
  saveSchedule: async (data: { selectedDays: string[] }): Promise<void> => {
    try {
      await api.post("/schedules", {
        data,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error saving schedule:", error);
      throw error;
    }
  },

  // Save goal (Step 3)
  saveGoal: async (goal: string): Promise<void> => {
    try {
      await api.post("/goals", {
        data: { goal },
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error saving goal:", error);
      throw error;
    }
  },

  // Save user (Step 4)
  saveUser: async (userData: {
    email: string;
    password: string;
    fullName: string;
    surname: string;
  }): Promise<void> => {
    try {
      await api.post("/users", {
        data: userData,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error saving user:", error);
      throw error;
    }
  },

  // Get all data
  getAllData: async (): Promise<{
    measurements: Workout[];
    schedules: Workout[];
    goals: Workout[];
    users: Workout[];
  }> => {
    try {
      const [measurements, schedules, goals, users] = await Promise.all([
        api.get("/measurements"),
        api.get("/schedules"),
        api.get("/goals"),
        api.get("/users"),
      ]);

      return {
        measurements: measurements.data,
        schedules: schedules.data,
        goals: goals.data,
        users: users.data,
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
};
