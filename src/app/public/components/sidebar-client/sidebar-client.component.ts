import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar-client',
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './sidebar-client.component.html',
  styleUrl: './sidebar-client.component.css'
})
export class SidebarClientComponent {

}
