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
    if (this.quotes[index + 1].upvote > this.quotes[index].upvote) {
      this.mostVoted = this.quotes[index + 1].quote;
      this.mostVotes = true;
    }
    else {
      this.mostVoted = this.quotes[index].quote;
      this.mostVotes = true;
    }
  }

  newDownvoteFunc(index: any) {
    this.quotes[index].downvote += 1;
  }
  constructor() { }

  ngOnInit(): void {

  }
}
