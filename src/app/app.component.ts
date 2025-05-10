import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { UpcomingAppointmentsComponent } from './dashboard/components/upcoming-appointments/upcoming-appointments.component';
import { ProfessionalDashboardComponent } from './dashboard/pages/professional-dashboard/professional-dashboard.component';
=======
>>>>>>> feature/Appointments

<<<<<<< HEAD
/**
import {ProfessionalDashboardComponent} from './dashboard/pages/professional-dashboard/professional-dashboard.component';
import {CalendarComponent} from './schedule/components/calendar/calendar.component'
<<<<<<< HEAD
import { ToolbarProviderComponent } from './public/components/toolbar-provider/toolbar-provider.component'

import {ProfilePageComponent} from './profile/pages/profile-page/profile-page.component';
import {SidebarComponent} from './public/components/sidebar/sidebar.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfessionalDashboardComponent, CalendarComponent, ToolbarProviderComponent, ProfilePageComponent, SidebarComponent],
=======
  */
=======
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
import {AppointmentsListComponent} from './appointments/components/appointments-list/appointments-list.component';


@Component({
  selector: 'app-root',
<<<<<<< HEAD

  imports: [RouterOutlet, AppointmentsListComponent

  ],

=======
  imports: [RouterOutlet, AppointmentsListComponent],
>>>>>>> af088205ef3b2f5ea06d31a1b009a0254cb555b2
>>>>>>> feature/Appointments
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-Web-Applications';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

}
