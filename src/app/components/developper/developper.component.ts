import { Skill } from './../../models/skill.model';
import { Developper } from './../../models/developper.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {

  developper: Developper;
  skillArray: Skill[] =
  [
    new Skill('Angular', 'https://angular.io/assets/images/logos/angular/angular.svg', 'https://angular.io/'),
    new Skill('Github', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png', 'https://github.com/')
  ];
  
  constructor() { }

  ngOnInit(): void {
    this.developper = new Developper('toto', 'coco', 100, 'oui', 'bio', this.skillArray )  
  }

}
