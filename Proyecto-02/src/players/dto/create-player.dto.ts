import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty({ example: 'Juan' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 'Delantero' })
  @IsString()
  @IsNotEmpty()
  position!: string;

  @ApiPropertyOptional({ example: 1, description: 'ID del equipo (opcional)' })
  @IsOptional()
  @IsInt()
  teamId?: number;
}
