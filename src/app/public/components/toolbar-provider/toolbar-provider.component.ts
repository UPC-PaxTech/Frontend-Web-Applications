  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterModule } from '@angular/router';
  import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

  @Component({
    selector: 'app-toolbar-provider',
    imports: [RouterModule, CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
    templateUrl: './toolbar-provider.component.html',
    styleUrl: './toolbar-provider.component.css'
  })
  export class ToolbarProviderComponent {


  }
