import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/Videos';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: Video[], arg1: any): Video[] {
    if(arg1 === '' || arg1 === undefined) {
      return value;
    }
    return value.filter((item:Video) => item.category.includes(arg1));
  }

}
