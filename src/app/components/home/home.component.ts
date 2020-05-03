import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
message: string;
  constructor() { }

  ngOnInit(): void {
  }

  onDataChange($event) {
    this.message = $event;
    console.log($event);
    // 'String sent by child component to parent component'
  }
}
