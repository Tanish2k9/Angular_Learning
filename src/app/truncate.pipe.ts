import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, times : number  = 3): string{


    if(!value){
      return "";
    }


    if(value.length > times){
      value = value.slice(0,times) + "...";
    }


    return value;
  }

}
