export class Appointment {
  reservationId: string;
  tipo: string;
  clientName: string;
  salonName: string;
  paymentStatus: boolean;
  timeSlotStart: string;
  timeSlotEnd: string;
  workerName: string;

  constructor() {
    this.reservationId = '';
    this.tipo = '';
    this.clientName = '';
    this.salonName = '';
    this.paymentStatus = false;
    this.timeSlotStart = '';
    this.timeSlotEnd = '';
    this.workerName = '';
  }
}
