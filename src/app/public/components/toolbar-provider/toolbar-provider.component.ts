  import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterModule } from '@angular/router';

  @Component({
    selector: 'app-toolbar-provider',
    imports: [RouterModule, CommonModule],
    templateUrl: './toolbar-provider.component.html',
    styleUrl: './toolbar-provider.component.css'
  })
  export class ToolbarProviderComponent {

    options = [
      {link: '/home-provider', label: 'home-provider'},
      {link: '/logout', label: 'logout'},
      {link: '/profile-provider', label: 'profile-provider'},
    ]

  }
