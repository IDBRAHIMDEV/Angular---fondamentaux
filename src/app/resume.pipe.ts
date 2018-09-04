import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: string, limit?: number): any {
    
      if(!value) {
        return null;
      }
      let myLimit = (limit) ? limit : 30;
      return value.substr(0, myLimit) + '...';
  }

}
