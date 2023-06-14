import { Module } from '@nestjs/common';
import { ShowroomController } from './showroom.controller';
import { ShowroomService } from './showroom.service';
import { ShowroomSchema } from './showroom.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Showroom', schema: ShowroomSchema }]),
  ],
  controllers: [ShowroomController],
  providers: [ShowroomService],
})
export class ShowroomModule {}
