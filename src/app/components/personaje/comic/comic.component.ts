import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

    comic: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
