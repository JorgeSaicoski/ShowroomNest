import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowroomModule } from './showroom/showroom.module';
import { LanguagesModule } from './languages/languages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';
import { ShowroomModule } from './showroom/showroom.module';

@Module({
  imports: [
    ShowroomModule,
    MongooseModule.forRoot('mongodb://localhost:27017/your-database-name'),
    ProjectsModule,
    LanguagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
