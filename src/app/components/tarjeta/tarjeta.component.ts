import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

   @Input() hero: any = {};
   @Input() index: number;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  verHeroe(){
      
    console.log( this.index );
    this.router.navigate( ['/heroe',this.index] );
  }

}
