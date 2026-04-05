import { Module } from '@nestjs/common';
import { JobsModule } from './modules/jobs/jobs.module';
import { StuffModule } from './modules/stuff/stuff.module';

@Module({
  imports: [JobsModule, StuffModule],
})
export class AppModule {}
