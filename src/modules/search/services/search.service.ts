import { Injectable } from '@nestjs/common';
import { SearchResult } from '../searchResult';

@Injectable()
export class SearchService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async search(query: string): Promise<SearchResult[]> {
    return [];
  }
}
