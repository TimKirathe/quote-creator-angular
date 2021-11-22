import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {



  @Input() quotes: Quote[];
  mostVoted: any;
  mostVotes: boolean;

  newUpvoteFunc(index: number) {
    this.quotes[index].upvote += 1;
    this.quotes[index].netVotes = this.quotes[index].upvote - this.quotes[index].downvote;
  }

  newDownvoteFunc(index: number) {
    this.quotes[index].downvote += 1;
    this.quotes[index].netVotes = this.quotes[index].upvote - this.quotes[index].downvote;
  }

  if () {

  }
  constructor() { }

  ngOnInit(): void {

  }
}
