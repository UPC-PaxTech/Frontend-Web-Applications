import { Component } from '@angular/core';
import { ToolbarProviderComponent} from '../../../public/components/toolbar-provider/toolbar-provider.component';
import { CalendarComponent} from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-schedule-page',
  imports: [
    ToolbarProviderComponent, CalendarComponent
  ],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.css'
})
export class SchedulePageComponent {

}
