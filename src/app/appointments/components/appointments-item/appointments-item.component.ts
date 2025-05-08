import { Component, Input } from '@angular/core';
import {ClientAppointment} from '../../model/appointment.entity';
import { MatDialog } from '@angular/material/dialog';
import {ScheduleDialogComponent} from '../schedule-dialog/schedule-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-appointments-item',
  templateUrl: './appointments-item.component.html',
  imports: [
    MatCardModule,
    MatIcon,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    provideNativeDateAdapter() // Add this line to provide the date adapter
  ],
  styleUrls: ['./appointments-item.component.css']
})
export class AppointmentsItemComponent {
  @Input() appointment: ClientAppointment = new ClientAppointment();

  constructor(private dialog: MatDialog) {}

  formatDay(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  }

  formatTime(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
  }

  openScheduleDialog(): void {
    this.dialog.open(ScheduleDialogComponent, {
      width: '600px',
      data: {
        appointment: this.appointment
      }
    });
  }
}
