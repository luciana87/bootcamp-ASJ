import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/Videos';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: Video[], arg1: any): Video[] {
    if(arg1 === '' || arg1 === undefined) {
      return value;
    }
    return value.filter((item:Video) => item.title.includes(arg1));
  }
}
