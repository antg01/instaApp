import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FeedsService } from './feeds.service';
import { CreateFeedDto } from './dto/create-feed.dto';
import { UpdateFeedDto } from './dto/update-feed.dto';

@Controller('feeds')
export class FeedsController {
  constructor(private readonly feedsService: FeedsService) {}

  @Post()
  create(@Body() createFeedDto: CreateFeedDto) {
    return this.feedsService.create(createFeedDto);
  }

  @Get()
  findAll() {
    return this.feedsService.findAll();
  }

  @Get(':title')
  findOne(@Param('title') title: string) {
    return this.feedsService.findOne(title);
  }

  @Put(':title')
  update(@Param('title') title: string, @Body() updateFeedDto: UpdateFeedDto) {
    return this.feedsService.update(title, updateFeedDto);
  }

  @Delete(':title')
  remove(@Param('title') title: string) {
    return this.feedsService.remove(title);
  }
}
