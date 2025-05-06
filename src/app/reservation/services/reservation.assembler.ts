import { Reservation } from '../model/reservation.entity';
import { ReservationResponse } from './reservations.response';

export class ReservationAssembler {
  static toEntityFromResource(resource: ReservationResponse): Reservation {
    return {
      reservationId: resource.reservationId,
      tipo: resource.tipo,
      clientName: resource.client.user.name,
      salonName: resource.salon.location,
      paymentStatus: resource.payment.status,
      timeSlotStart: resource.timeSlot.start,
      timeSlotEnd: resource.timeSlot.end,
    };
  }

  static toEntitiesFromResponse(response: ReservationResponse[]): Reservation[] {
    return response.map(resource => this.toEntityFromResource(resource));
  }
}
