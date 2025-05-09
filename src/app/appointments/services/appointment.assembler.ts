import {ClientAppointment} from '../model/appointment.entity';
import {AppointmentResponse} from './appointment.response';

export class AppointmentAssembler {
  static toEntityFromResource(resource: AppointmentResponse): ClientAppointment {
    return {
      reservationId: resource.reservationId || '',
<<<<<<< HEAD
      tipo: resource.tipo || '',
=======
      tipo: resource.tipo|| '',
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
      clientName: resource.client.user.name || '',
      salonName: resource.salon.location || '',
      paymentStatus: resource.payment.status || false,
      timeSlotStart: resource.timeSlot.start || '',
      timeSlotEnd: resource.timeSlot.end || '',
    }
  }
<<<<<<< HEAD

=======
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
  static toEntitiesFromResponse(resources: AppointmentResponse[]): ClientAppointment[] {
    return resources.map(resource => this.toEntityFromResource(resource));
  }
}
