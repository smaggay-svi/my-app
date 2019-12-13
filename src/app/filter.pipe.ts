import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: any[]): any {
    
    if (!items || !filter) {
      return items;
    }

    // filter = filter.toLowerCase();

    return items.filter(it => {return it.name.toLowerCase().includes(filter)});

  }

}