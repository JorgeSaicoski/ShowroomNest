import {
  IsString,
  IsOptional,
  ArrayNotEmpty,
  IsMongoId,
  IsArray,
} from 'class-validator';

export class CreateShowroomDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  client?: string;

  @IsArray()
  @IsOptional()
  images?: string[];

  @IsArray()
  @ArrayNotEmpty()
  projects: string[];

  @IsMongoId()
  @IsOptional()
  language?: string;
}
