import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowroomModule } from './showroom/showroom.module';

@Module({
  imports: [ShowroomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
