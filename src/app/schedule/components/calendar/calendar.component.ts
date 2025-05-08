import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  imports: [
    CommonModule
  ],
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  currentUser = 'Javier Herrera';
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  hours = Array.from({ length: 17 }, (_, i) => `${i + 7}:00 - ${i + 8}:00`);

  appointments = [
    {
      day: 'Tuesday',
      time: '17:00 - 18:00',
      title: 'Keratin treatment',
      client: 'Emilia',
    },
    {
      day: 'Monday',
      time: '09:00 - 10:00',
      title: 'Haircut',
      client: 'Javier',
    },
  ];

  prevUser() {
    // lógica para cambiar de persona
  }

  nextUser() {
    // lógica para cambiar de persona
  }

}
