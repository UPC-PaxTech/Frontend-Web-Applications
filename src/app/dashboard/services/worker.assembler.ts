import {WorkerResource} from './worker.resource';
import {Worker} from '../models/worker.entity';
import {AppointmentResponse} from './appointment.response';
import {Appointment} from '../models/appointment.entity';

export class WorkerAssembler {
  static  toEntityFromResource(resource: WorkerResource): Worker {
    return {
      id: resource.workerId,
      nombre: resource.nombre
    }
  }
  static toEntitiesFromResponse(resources: WorkerResource[]): Worker[] {
    return resources.map(resource => this.toEntityFromResource(resource));
  }
}
