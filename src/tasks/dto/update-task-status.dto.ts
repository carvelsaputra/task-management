import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class updateTaskStatus {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
