import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
  @ApiProperty({ example: 'Barcelona FC' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 'España' })
  @IsString()
  @IsNotEmpty()
  country!: string;
}
