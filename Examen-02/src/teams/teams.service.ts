import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Player } from '../players/player.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team) private teamsRepo: Repository<Team>,
    @InjectRepository(Player) private playersRepo: Repository<Player>,
  ) {}

  findAll() {
    return this.teamsRepo.find();
  }

  async findOne(id: number) {
    const team = await this.teamsRepo.findOne({ where: { id }, relations: ['players'] });
    if (!team) throw new NotFoundException(`Team ${id} not found`);
    return team;
  }

  create(createDto: CreateTeamDto) {
    const team = this.teamsRepo.create(createDto);
    return this.teamsRepo.save(team);
  }

  async update(id: number, updateDto: UpdateTeamDto) {
    const team = await this.teamsRepo.preload({ id, ...updateDto } as any);
    if (!team) throw new NotFoundException(`Team ${id} not found`);
    return this.teamsRepo.save(team);
  }

  async remove(id: number) {
    const team = await this.teamsRepo.findOne({ where: { id } });
    if (!team) throw new NotFoundException(`Team ${id} not found`);
    return this.teamsRepo.remove(team);
  }

  async findPlayers(teamId: number) {
    await this.findOne(teamId); // will throw if not found
    return this.playersRepo.find({ where: { teamId } });
  }
}
