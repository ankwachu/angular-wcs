import { Skill } from './../../models/skill.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill: Skill;

  constructor() { }

  ngOnInit(): void {
  }

}
