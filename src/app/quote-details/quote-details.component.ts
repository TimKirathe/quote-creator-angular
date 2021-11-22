import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
declare const voteFunc: any;

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  newVoteFunc() {
    voteFunc();
  }
  @Input() newQuotes: Quote[] = [];
  constructor() { }

  ngOnInit(): void {

  }
}
