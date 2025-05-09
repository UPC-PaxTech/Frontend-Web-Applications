import {ClientAppointment} from '../model/appointment.entity';
import {AppointmentResponse} from './appointment.response';

export class AppointmentAssembler {
  static toEntityFromResource(resource: AppointmentResponse): ClientAppointment {
    return {
      reservationId: resource.reservationId || '',
      tipo: resource.tipo|| '',
      clientName: resource.client.user.name || '',
      salonName: resource.salon.location || '',
      paymentStatus: resource.payment.status || false,
      timeSlotStart: resource.timeSlot.start || '',
      timeSlotEnd: resource.timeSlot.end || '',
    }
  }
  static toEntitiesFromResponse(resources: AppointmentResponse[]): ClientAppointment[] {
    return resources.map(resource => this.toEntityFromResource(resource));
  }
}
