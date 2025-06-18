import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-sidebar-client',
  imports: [
    RouterLink,
    RouterModule,
    RouterLinkActive,
  ],
  templateUrl: './sidebar-client.component.html',
  styleUrl: './sidebar-client.component.css'
})
export class SidebarClientComponent {

}
