import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/Mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedsModule } from './feeds/feeds.module';

@Module({
  imports: [FeedsModule, MongooseModule.forRoot('mongodb://localhost/instadb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
