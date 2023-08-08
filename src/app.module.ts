import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowroomModule } from './modules/showroom/showroom.module';
import { ValuesModule } from './modules/values/values.module';
import { ProductsModule } from './modules/products/products.module';
import { CoinsModule } from './modules/coins/coins.module';
import { ContactModule } from './modules/contact/contact.module';
import { DescriptionsModule } from './modules/descriptions/descriptions.module';
import { TextsModule } from './modules/texts/texts.module';
import { LanguagesModule } from './modules/languages/languages.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './modules/projects/projects.module';
import { MongodbService } from './mongodb/mongodb.service';

@Module({
  imports: [
    ShowroomModule,
    MongooseModule.forRoot('mongodb://localhost:27017/your-database-name'),
    ProjectsModule,
    LanguagesModule,
    TextsModule,
    DescriptionsModule,
    ContactModule,
    CoinsModule,
    ProductsModule,
    ValuesModule
  ],
  controllers: [AppController],
  providers: [AppService, MongodbService],
})
export class AppModule {}
