import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateParticipantParams } from 'src/participants/utils/types';
import { Participant } from 'src/typeorm/entities/Participant';
import { Repository } from 'typeorm';

@Injectable()
export class ParticipantsService {
  constructor(
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
  ) {}

  getParticipants() {
    return this.participantRepository.find();
  }

  createParticipant(participantDetails: CreateParticipantParams) {
    const newParticipant = this.participantRepository.create({
      ...participantDetails,
    });
    return this.participantRepository.save(newParticipant);
  }
}
