export type RoundState = {
  done: boolean;
  revealed: boolean;
  attempts: number;
  feedback: { status: "ok" | "err" | "revealed" | null; message: string };
};
