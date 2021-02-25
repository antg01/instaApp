import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Feed, FeedDocument } from 'src/schemas/feed.schema';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';

@Injectable()
export class FeedsService {
  constructor(@InjectModel(Feed.name) private feedModel: Model<FeedDocument>) {}

  async create(createFeedDto: CreateFeedDto): Promise<Feed> {
    return new this.feedModel(createFeedDto).save();
  }

  async findAll() {
    return this.feedModel.find();
  }

  async findOne(title: string) {
    return this.feedModel.findOne({ title });
  }

  async update(title: string, updateFeedDto: UpdateFeedDto) {
    return this.feedModel.updateOne({ title }, { $set: { ...updateFeedDto } });
  }

  async remove(title: string) {
    return this.feedModel.deleteOne({ title });
  }
}
