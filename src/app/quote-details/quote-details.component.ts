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
  upvote: number = 0;
  downvote: number = 0;


  @Input() newQuotes: Quote[] = [];

  newUpvoteFunc() {
    this.upvote + 1;
  }

  newDownvoteFunc() {
    this.downvote + 1;
  }
  constructor() { }

  ngOnInit(): void {

  }
}
