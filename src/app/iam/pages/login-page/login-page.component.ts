import { Component, OnInit, OnDestroy} from '@angular/core';
import {LoginFormComponent} from '../../components/login-form/login-form.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatButton} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-login-page',
  imports: [
    LoginFormComponent,
    MatToolbar,
    MatButton,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    RouterModule,
    NgForOf
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit, OnDestroy  {
  slideImages: string[] = [
    'https://www.gammabross.com/Gallery/salonimg-frkqkj-181.webp',
    'https://thehappening.com/wp-content/uploads/2024/02/captura-de-pantalla-2023-05-17-a-la-s-52813-pm-1.jpg',
    'https://cdn1.treatwell.net/images/view/v2.i7379851.w720.h480.x5F15B4CB/'
  ];

  activeIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.slideImages.length;
    }, 5000); // cambia cada 5 segundos
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  setSlide(index: number): void {
    this.activeIndex = index;
  }

}
