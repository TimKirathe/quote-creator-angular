export class Quote {
  upvote: number = 0;
  downvote: number = 0;
  constructor(public quote: any, public quoteAuthor: any, public submittedBy: any, public timePassed: any) {

  }
}
