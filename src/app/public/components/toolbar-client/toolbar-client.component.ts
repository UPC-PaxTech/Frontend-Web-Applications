import { Component } from '@angular/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-toolbar-client',
    imports: [
        LanguageSwitcherComponent,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './toolbar-client.component.html',
  styleUrl: './toolbar-client.component.css'
})
export class ToolbarClientComponent {

}
