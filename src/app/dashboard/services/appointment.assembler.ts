  import {Appointment} from '../models/appointment.entity';
  import {AppointmentResponse} from './appointment.response';

  export class AppointmentAssembler {
    static toEntityFromResource(resource: AppointmentResponse): Appointment {
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
    static toEntitiesFromResponse(resources: AppointmentResponse[]): Appointment[] {
      return resources.map(resource => this.toEntityFromResource(resource));
    }
  }
