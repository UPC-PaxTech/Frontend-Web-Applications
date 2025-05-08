export class Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  read: boolean;

  constructor() {
    this.id = 0;
    this.author = '';
    this.rating = 0;
    this.text = '';
    this.read = false;
  }
}
