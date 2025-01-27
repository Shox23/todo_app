import { Task } from "../../types/Task";

export type TaskItemProps = Task & {
  index: number;
};
