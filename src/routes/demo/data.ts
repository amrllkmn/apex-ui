export type TActivities = {
  id: number;
  title: string;
  count: number;
  limit: number;
  done: boolean;
  isStop: boolean;
}
export const activities: TActivities[] = [
  {
    id: 1,
    title: "Drink water",
    count: 3,
    limit: 7,
    done: false,
    isStop: false
  },
  {
    id: 2,
    title: "Exercise",
    count: 1,
    limit: 1,
    done: true,
    isStop: false
  },
  {
    id: 3,
    title: "Stop smoking",
    count: 0,
    limit: 0,
    done: true,
    isStop: true
  }
]