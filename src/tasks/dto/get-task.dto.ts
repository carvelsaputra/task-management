import { TaskStatus } from '../tasks.model';

export class getTaskFilterDto {
  status?: TaskStatus;
  search?: string;
}
