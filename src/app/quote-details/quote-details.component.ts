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
  netVote: any = [];

  newUpvoteFunc(index: number) {
    this.quotes[index].upvote += 1;
    this.quotes[index].netVotes = this.quotes[index].upvote - this.quotes[index].downvote;
    console.log(this.netVote);
  }

  newDownvoteFunc(index: number) {
    this.quotes[index].downvote += 1;
    this.quotes[index].netVotes = this.quotes[index].upvote - this.quotes[index].downvote;
    console.log(this.netVote);
  }

  highestVotedFunc() {
    let upvotes: any = [];

    for(var i = 0; i<this.quotes.length; i++) {
      upvotes.push(this.quotes[i].upvote)
    }
    let highestUpvote: number = Math.max(...upvotes)
    if (highestUpvote === 0) {
      return 1;
    }
    return highestUpvote
  }

  constructor() { }

  ngOnInit(): void {

  }
}
