import { Controller, Get } from '@nestjs/common';
import { StuffService } from './stuff.service';
import { TStuff } from './types/TStuff';

@Controller('stuff')
export class StuffController {
  constructor(private readonly stuffService: StuffService) {}

  @Get()
  findAll(): TStuff[] {
    return this.stuffService.findAll();
  }
}
