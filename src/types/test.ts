// Agar User va TestResult modelda yo'q bo'lsa frontend/backend uchun types.ts fayl ochib
export interface TestResultAttributes {
  wpm: number;
  raw: number;
  consistency: number;
  time: number; // sekundda saqlangan
  accuracy: number;
  score: number;
  createdAt: string;
}

export interface UserAttributes {
  id: number;
  name: string;
  phone: string;
  TestResults: TestResultAttributes[];
}
