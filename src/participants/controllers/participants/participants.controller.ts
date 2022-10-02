import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateParticipantDto } from 'src/participants/dtos/CreateParticipant.dto';
import { ParticipantsService } from 'src/participants/services/participants/participants.service';

@Controller('participants')
export class ParticipantsController {
  constructor(private participantsService: ParticipantsService) {}

  @Get()
  getAllParticipants() {
    return this.participantsService.getParticipants();
  }

  @Post()
  createParticipant(@Body() createParticipantDto: CreateParticipantDto) {
    return this.participantsService.createParticipant(createParticipantDto);
  }
}
