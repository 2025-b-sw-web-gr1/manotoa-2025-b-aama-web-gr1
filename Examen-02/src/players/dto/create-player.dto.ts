import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  position!: string;

  @IsOptional()
  @IsInt()
  teamId?: number;
}
