import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsUrl()
  readonly imageUrl: string;
}
