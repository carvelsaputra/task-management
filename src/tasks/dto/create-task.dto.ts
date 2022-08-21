import { IsNotEmpty } from 'class-validator';
export class CraeteTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
