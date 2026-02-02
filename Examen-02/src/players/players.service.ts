import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Team } from '../teams/team.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player) private playersRepo: Repository<Player>,
    @InjectRepository(Team) private teamsRepo: Repository<Team>,
  ) {}

  findAll() {
    return this.playersRepo.find();
  }

  async findOne(id: number) {
    const player = await this.playersRepo.findOne({ where: { id } });
    if (!player) throw new NotFoundException(`Player ${id} not found`);
    return player;
  }

  async create(dto: CreatePlayerDto) {
    if (dto.teamId) {
      const team = await this.teamsRepo.findOne({ where: { id: dto.teamId } });
      if (!team) throw new BadRequestException(`Team ${dto.teamId} does not exist`);
    }
    const player = this.playersRepo.create(dto as any);
    return this.playersRepo.save(player);
  }

  async update(id: number, dto: UpdatePlayerDto) {
    const teamId = (dto as any).teamId;
    if (typeof teamId !== 'undefined' && teamId !== null) {
      const team = await this.teamsRepo.findOne({ where: { id: teamId } });
      if (!team) throw new BadRequestException(`Team ${teamId} does not exist`);
    }
    const player = await this.playersRepo.preload({ id, ...dto } as any);
    if (!player) throw new NotFoundException(`Player ${id} not found`);
    return this.playersRepo.save(player);
  }

  async remove(id: number) {
    const player = await this.playersRepo.findOne({ where: { id } });
    if (!player) throw new NotFoundException(`Player ${id} not found`);
    return this.playersRepo.remove(player);
  }

  findByTeam(teamId: number) {
    return this.playersRepo.find({ where: { teamId } });
  }
}
