  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterModule } from '@angular/router';
  import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
  import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';

  @Component({
    selector: 'app-toolbar-provider',
    imports: [RouterModule, CommonModule, RouterLink, RouterLinkActive, RouterOutlet, LanguageSwitcherComponent],
    templateUrl: './toolbar-provider.component.html',
    styleUrl: './toolbar-provider.component.css'
  })
  export class ToolbarProviderComponent {


  }
