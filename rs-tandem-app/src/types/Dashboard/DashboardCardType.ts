export type Level = "Basic" | "Medium" | "Advanced";
export interface DashboardCardType {
  title: string;
  category: "JS" | "TS" | "Algorithms";
  level: Level;
  idCard: string;
  xpReward: number;
  totalTasks: number;
  completedTasks?: number;
  onActionClick: () => void;
}
