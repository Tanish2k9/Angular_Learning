import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): unknown {


    if(!value){
      return '';
    }

    let data = value.charAt(0).toLocaleUpperCase() + value.slice(1).toLocaleLowerCase();

    return data;
  }

}
