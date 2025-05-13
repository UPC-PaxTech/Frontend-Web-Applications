export class Service {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  status: 'Active' | 'Paused';

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.duration = 0;
    this.price = 0;
    this.status = 'Active';
  }
}

