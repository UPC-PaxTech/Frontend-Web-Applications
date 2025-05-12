import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {ToolbarProviderComponent} from "../toolbar-provider/toolbar-provider.component";
import {SidebarClientComponent} from '../sidebar-client/sidebar-client.component';
import {ToolbarClientComponent} from '../toolbar-client/toolbar-client.component';

@Component({
  selector: 'app-client-layout',
  imports: [
    RouterOutlet,
    SidebarComponent,
    ToolbarProviderComponent,
    SidebarClientComponent,
    ToolbarClientComponent
  ],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.css'
})
export class ClientLayoutComponent {

}
