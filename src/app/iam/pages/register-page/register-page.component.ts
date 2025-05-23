import { Component, OnInit } from '@angular/core';
import {RegisterFormClientComponent} from '../../components/register-form-client/register-form-client.component';
import {RegisterFormProviderComponent} from '../../components/register-form-provider/register-form-provider.component';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-register-page',
  imports: [
    RegisterFormClientComponent,
    RegisterFormProviderComponent,
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  isProvider: boolean = false;  // Determina si se está registrando un cliente o proveedor
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
  // Cambia entre los formularios de cliente y proveedor
  toggleForm(value: boolean) {
    this.isProvider = value;
  }
}

