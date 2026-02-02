import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@ApiTags('players')
@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los jugadores' })
  @ApiResponse({ status: 200, description: 'Lista de jugadores' })
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener jugador por ID' })
  @ApiResponse({ status: 200, description: 'Jugador encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un jugador' })
  @ApiResponse({ status: 201, description: 'Jugador creado' })
  create(@Body() dto: CreatePlayerDto) {
    return this.playersService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un jugador' })
  @ApiResponse({ status: 200, description: 'Jugador actualizado' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePlayerDto) {
    return this.playersService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un jugador' })
  @ApiResponse({ status: 200, description: 'Jugador eliminado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.playersService.remove(id);
  }
}
