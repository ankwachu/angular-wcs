import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-onomatopia-list',
  templateUrl: './onomatopia-list.component.html',
  styleUrls: ['./onomatopia-list.component.css']
})
export class OnomatopiaListComponent implements OnInit {
  
  @Input() posts = [];

  constructor() { }

  ngOnInit(): void {
  }

}
