import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { UpcomingAppointmentsComponent } from './dashboard/components/upcoming-appointments/upcoming-appointments.component';
import { ProfessionalDashboardComponent } from './dashboard/pages/professional-dashboard/professional-dashboard.component';

import {CalendarComponent} from './schedule/components/calendar/calendar.component'
import { ToolbarProviderComponent } from './public/components/toolbar-provider/toolbar-provider.component'

import {ProfilePageComponent} from './profile/pages/profile-page/profile-page.component';
import {SidebarComponent} from './public/components/sidebar/sidebar.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarProviderComponent, SidebarComponent, ToolbarClientComponent, SidebarClientComponent],
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
