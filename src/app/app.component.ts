import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ToolbarProviderComponent } from './public/components/toolbar-provider/toolbar-provider.component'

import {SidebarComponent} from './public/components/sidebar/sidebar.component';
import {TranslateService} from '@ngx-translate/core';
import {ToolbarClientComponent} from './public/components/toolbar-client/toolbar-client.component';
import {SidebarClientComponent} from './public/components/sidebar-client/sidebar-client.component';

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
