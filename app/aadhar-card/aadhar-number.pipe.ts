import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aadharNumber'
}) 
export class AadharNumberPipe implements PipeTransform {

  transform(aadharNo: string): string {

   return aadharNo.substr(0,4)+"-"+aadharNo.substr(4,4)+"-"+aadharNo.substr(8,4);
  }
        
 
}
