import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listfilter'
})
export class ListfilterPipe implements PipeTransform {

  transform(items: any[], listfilter: any[]): any {
    
    if (!items || !listfilter) {
      return items;
    }

    // filter = filter.toLowerCase();

    return items.filter(it => {return it.name.toLowerCase().includes(listfilter)});

  }

}
