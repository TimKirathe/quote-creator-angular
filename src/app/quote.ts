export class Quote {
  upvote: number = 0;
  downvote: number = 0;
  constructor(public quote: string, public quoteAuthor: string, public submittedBy: string) {

  }
}
