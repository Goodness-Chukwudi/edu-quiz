import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  editing:boolean = false;

  @Input() disableEdit:boolean = false;
  @Input() inResult:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
