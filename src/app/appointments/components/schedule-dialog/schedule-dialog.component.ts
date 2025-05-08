import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
  MatDialogActions, MatDialogClose
} from '@angular/material/dialog';
import {ClientAppointment} from '../../model/appointment.entity';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatFormField, MatInput} from '@angular/material/input';
import {NgForOf, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatLabel} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

interface DialogData {
  appointment: ClientAppointment;
}

@Component({
  selector: 'app-schedule-dialog',
  templateUrl: './schedule-dialog.component.html',
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatLabel,
    MatDatepicker,
    MatDatepickerToggle,
    MatCardModule,
    MatInput,
    MatFormField,
    NgForOf,
    NgIf,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDatepickerInput
  ],
  styleUrls: ['./schedule-dialog.component.css']
})
export class ScheduleDialogComponent {
  appointment: ClientAppointment;
  selectedDate: Date;
  timeSlots: { time: string, available: boolean, current: boolean }[] = [];

  constructor(
    public dialogRef: MatDialogRef<ScheduleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.appointment = data.appointment;
    this.selectedDate = this.appointment.timeSlotStart ? new Date(this.appointment.timeSlotStart) : new Date();
    this.generateTimeSlots();
  }

  close(): void {
    this.dialogRef.close();
  }

  onDateChange(event: any): void {
    this.selectedDate = event.value;
    this.generateTimeSlots();
  }

  generateTimeSlots(): void {
    // Generate time slots from 9 AM to 6 PM with 30-minute intervals
    this.timeSlots = [];
    const startHour = 9;
    const endHour = 18;

    // Get the current appointment's time
    const currentAppointmentTime = this.appointment.timeSlotStart ?
      new Date(this.appointment.timeSlotStart) : null;

    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour}:${minute === 0 ? '00' : minute}`;

        // Check if this is the current appointment time
        let isCurrent = false;
        if (currentAppointmentTime) {
          isCurrent = currentAppointmentTime.getHours() === hour &&
            Math.abs(currentAppointmentTime.getMinutes() - minute) < 15;
        }

        // Randomly determine if the slot is available (in a real app, this would come from your API)
        const isAvailable = !isCurrent && Math.random() > 0.3;

        this.timeSlots.push({
          time: this.formatTime(hour, minute),
          available: isAvailable,
          current: isCurrent
        });
      }
    }
  }

  formatTime(hour: number, minute: number): string {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
    return `${displayHour}:${minute === 0 ? '00' : minute} ${period}`;
  }

  selectTimeSlot(slot: any): void {
    if (!slot.available && !slot.current) return;

    // Handle time slot selection
    console.log(`Selected time slot: ${slot.time}`);
    // Here you would typically update the appointment with the new time

    this.dialogRef.close({
      selected: true,
      time: slot.time
    });
  }
}
