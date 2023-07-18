import { ArrayNotEmpty, IsArray } from 'class-validator';

export class AssociateProjectDto {
  @IsArray()
  @ArrayNotEmpty()
  projects: string[];
}
