import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
declare const upvoteFunc: any;
declare const downvoteFunc: any;

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  newUpvoteFunc() {
    upvoteFunc();
  }

  newDownvoteFunc() {
    downvoteFunc();
  }

  @Input() newQuotes: Quote[] = [];
  constructor() { }

  ngOnInit(): void {

  }
}
