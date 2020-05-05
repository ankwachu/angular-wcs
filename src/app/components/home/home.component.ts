import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  storedPosts = []
z
  onPostAdded(event) {
    this.storedPosts.push(event);
  }

  greet(post) {
    alert(post.title);
  }
 
}