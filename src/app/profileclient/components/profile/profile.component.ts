import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ProfileService } from '../../service/profile-api.service';
import { Profile } from '../../model/profile.entity';
import {MatIcon} from '@angular/material/icon';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {RouterLink} from '@angular/router';
import {MatButton, MatIconButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatError, MatFormField, MatInput} from '@angular/material/input';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-profile',
  imports: [MatIcon, ReactiveFormsModule, MatSlideToggle, MatFormField, RouterLink, MatButton, MatIconButton, NgIf, MatInput, MatError, MatProgressSpinner, MatProgressSpinner],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  passwordForm: FormGroup;
  profile: Profile;
  isLoading = true;
  passwordsMatch = true;
  showCurrentPasswordField = false;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    // Inicialización de formularios en el constructor
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      identityDocument: [''],
      notifications: [false],
      location: [false]
    });

    this.passwordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    });

    this.profile = new Profile();
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  loadProfile(): void {
    this.isLoading = true;
    this.profileService.getProfile().subscribe({
      next: (profile) => {
        this.profile = profile;
        this.updateForm(profile);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading profile:', err);
        this.isLoading = false;
      }
    });
  }

  updateForm(profile: Profile): void {
    this.profileForm.patchValue({
      name: profile.name,
      email: profile.email,
      phoneNumber: profile.phoneNumber,
      identityDocument: profile.identityDocument,
      notifications: profile.notifications,
      location: profile.location
    });
  }

  saveProfile(): void {
    if (this.profileForm.valid) {
      const updatedProfile: Profile = {
        ...this.profile,
        ...this.profileForm.value
      };

      this.profileService.updateProfile(updatedProfile).subscribe({
        next: (result) => {
          console.log('Profile updated successfully');
          // Mostrar mensaje de éxito
        },
        error: (err) => {
          console.error('Error updating profile:', err);
          // Mostrar mensaje de error
        }
      });
    }
  }

  changePassword(): void {
    if (this.passwordForm.valid) {
      const { currentPassword, newPassword, confirmPassword } = this.passwordForm.value;

      if (newPassword !== confirmPassword) {
        this.passwordsMatch = false;
        return;
      }

      this.passwordsMatch = true;
      this.profileService.changePassword(currentPassword, newPassword).subscribe({
        next: () => {
          console.log('Password changed successfully');
          this.passwordForm.reset();
          this.showCurrentPasswordField = false;
          // Mostrar mensaje de éxito
        },
        error: (err) => {
          console.error('Error changing password:', err);
          // Mostrar mensaje de error
        }
      });
    }
  }

  logout(): void {
    this.profileService.logout().subscribe({
      next: () => {
        // Navegar a la página de login o manejar el logout
      },
      error: (err) => {
        console.error('Error during logout:', err);
      }
    });
  }

  deleteAccount(): void {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      this.profileService.deleteAccount().subscribe({
        next: () => {
          // Navegar a la página de login o manejar la eliminación de cuenta
        },
        error: (err) => {
          console.error('Error deleting account:', err);
        }
      });
    }
  }
}
