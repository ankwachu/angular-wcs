import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-onomatopia',
  templateUrl: './onomatopia.component.html',
  styleUrls: ['./onomatopia.component.css']
})
export class OnomatopiaComponent implements OnInit {

  @Output() 
  dataChange = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  sendDataToParent() {
    this.dataChange.emit('String sent by child component to parent component');
  }
}
