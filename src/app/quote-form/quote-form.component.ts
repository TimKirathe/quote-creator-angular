import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})

export class QuoteFormComponent implements OnInit {

  quotes: Quote[] = [];

  onSubmit(value: any) {
    console.log(value);
    this.quotes.push(value)
    console.log(this.quotes);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
