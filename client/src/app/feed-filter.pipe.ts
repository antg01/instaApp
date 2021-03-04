import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feedFilter',
})
export class FeedFilterPipe implements PipeTransform {
  transform(feeds: string[], searchInput: string): any[] {
    if (!searchInput) {
      return feeds;
    }
    searchInput = searchInput.toLowerCase();
    return feeds.filter((x) => x.toLowerCase().includes(searchInput));
  }
}
