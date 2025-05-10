import { Component, Input } from '@angular/core';
import { SalonProfile } from '../../models/salon-profile.entity';
import { CommonModule } from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-profile-portfolio',
  templateUrl: './profile-portfolio.component.html',
  styleUrls: ['./profile-portfolio.component.css'],
  standalone: true,
  imports: [CommonModule, TranslatePipe]
})
export class ProfilePortfolioComponent {
  @Input() profile!: SalonProfile;

  // Simula agregar la imagen al portafolio
  onAddPhoto(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          // Agregar la imagen al array directamente
          this.profile.portfolioImages.push(reader.result as string);
          console.log('Imagen añadida al portafolio');
        };
        reader.readAsDataURL(file); // Convierte a base64
      }
    };

    input.click(); // Abre el explorador de archivos
  }

  onImageClick(imageUrl: string): void {
    console.log('Imagen seleccionada:', imageUrl);
    // Aquí podrías abrir un modal para previsualizar la imagen si lo deseas
  }
}
