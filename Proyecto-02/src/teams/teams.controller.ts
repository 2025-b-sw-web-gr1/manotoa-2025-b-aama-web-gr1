import { Controller, Get, Param, Post, Body, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({ status: 200, description: 'Lista de equipos' })
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener equipo por ID' })
  @ApiResponse({ status: 200, description: 'Equipo encontrado' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un equipo' })
  @ApiResponse({ status: 201, description: 'Equipo creado' })
  create(@Body() dto: CreateTeamDto) {
    return this.teamsService.create(dto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un equipo' })
  @ApiResponse({ status: 200, description: 'Equipo actualizado' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTeamDto) {
    return this.teamsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un equipo' })
  @ApiResponse({ status: 200, description: 'Equipo eliminado' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.remove(id);
  }

  @Get(':id/players')
  @ApiOperation({ summary: 'Obtener jugadores de un equipo' })
  @ApiResponse({ status: 200, description: 'Lista de jugadores del equipo' })
  findPlayers(@Param('id', ParseIntPipe) id: number) {
    return this.teamsService.findPlayers(id);
  }
}
