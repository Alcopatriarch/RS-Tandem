export type Level = 'Basic' | 'Medium' | 'Advanced';
export interface DashboardCardType {
  title: string;
  category: 'JS' | 'TS' | 'Algorithms';
  level: Level;
  xpReward: number;
  totalTasks: number;
  completedTasks: number;
  onActionClick: () => void;
}
