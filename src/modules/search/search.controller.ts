import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './services/search.service';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchResult } from './searchResult';
@ApiTags('search')
@Controller('search')
export class SearchController {
  constructor(private readonly appService: SearchService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Search results',
    type: [SerachResult],
  })
  async search(@Query('query') query: string): Promise<SearchResult[]> {
    return this.appService.search(query);
  }
}
