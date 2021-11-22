import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {



  @Input() quotes: Quote[];


  newUpvoteFunc(index: number) {
    this.quotes[index].upvote += 1;
  }

  newDownvoteFunc(index: any) {
    this.quotes[index].downvote += 1;
  }
  constructor() { }

  ngOnInit(): void {

  }
}
