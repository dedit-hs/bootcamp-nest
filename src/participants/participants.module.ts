import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from 'src/typeorm/entities/Participant';
import { ParticipantsController } from './controllers/participants/participants.controller';
import { ParticipantsService } from './services/participants/participants.service';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  controllers: [ParticipantsController],
  providers: [ParticipantsService],
})
export class ParticipantsModule {}
