import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Post {
  title:string;
}

@Component({
  selector: 'app-onomatopia',
  templateUrl: './onomatopia.component.html',
  styleUrls: ['./onomatopia.component.css']
})
export class OnomatopiaComponent {

  post:Post; 
 
  @Output() postCreated = new EventEmitter<Post>();
 
  constructor() {
    this.post = {} as Post;
  }
 
  onAddPost(){
    const post = {
      title: this.post.title
    }
    this.postCreated.emit(post);
    console.log(post);
  }
 
}