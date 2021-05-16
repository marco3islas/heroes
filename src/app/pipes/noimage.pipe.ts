import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

    transform(thumbnail: any[]): string{
        if( thumbnail ){
            return  thumbnail[0].extension;
        }else{
            return 'assets/img/noimage.png';
        }
    }
}
