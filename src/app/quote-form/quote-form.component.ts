import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})

export class QuoteFormComponent implements OnInit {

  quotes: Quote[] = [];
  newQuote: Quote;

  onSubmit(value: any) {
    this.newQuote = new Quote(value.quote, value.quoteAuthor, value.submittedBy, new Date());
    console.log(this.newQuote.upvote);
    this.quotes.push(this.newQuote);
    console.log(this.quotes);
  }




  constructor() { }

  ngOnInit(): void {
  }

}
