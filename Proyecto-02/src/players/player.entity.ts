import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Team } from '../teams/team.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  position!: string;

  @ManyToOne(() => Team, (team) => team.players, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'teamId' })
  team?: Team | null;

  @Column({ nullable: true })
  teamId?: number | null;
}
