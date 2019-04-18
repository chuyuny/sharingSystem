import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.less']
})
export class AskComponent implements OnInit {
  @Input() question;
  @Output() questionChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
