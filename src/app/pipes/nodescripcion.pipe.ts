import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nodescripcion'
})
export class NodescripcionPipe implements PipeTransform {

  transform(description: string): string {
      if(!description){
          return 'Descripcion no disponible';
      }else{
          return description;
      }
  }

}
