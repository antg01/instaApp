import { Module } from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { FeedsController } from './feeds.controller';
import { MongooseModule } from '@nestjs/Mongoose';
import { Feed, FeedSchema } from 'src/schemas/feed.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Feed.name, schema: FeedSchema }]),
  ],
  controllers: [FeedsController],
  providers: [FeedsService],
})
export class FeedsModule {}
