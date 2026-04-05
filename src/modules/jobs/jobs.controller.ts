import { Controller, Get } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { TJob } from './types/TJobs';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get()
  findAll(): TJob[] {
    return this.jobsService.findAll();
  }
}
