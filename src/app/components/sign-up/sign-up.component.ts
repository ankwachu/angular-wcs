import { User } from './../../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  model: User = new User();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

  onReset() {
    console.log(this.model);
  }
}
