import {
  IsString,
  IsOptional,
  Length,
  IsObject,
  IsTimeZone,
} from "class-validator";

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @Length(0, 500)
  bio?: string;

  @IsOptional()
  @IsString()
  @IsTimeZone()
  timezone?: string;

  @IsOptional()
  @IsObject()
  videoHandles?: Record<string, string>;
}
