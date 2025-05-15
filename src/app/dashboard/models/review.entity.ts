export class Review {
  id?: number;
  author: string;
  rating: number;
  text: string;
  read: boolean;

  constructor() {
    this.author = '';
    this.rating = 0;
    this.text = '';
    this.read = false;
  }
}
