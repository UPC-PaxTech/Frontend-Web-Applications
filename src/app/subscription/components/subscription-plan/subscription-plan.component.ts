import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import { MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-subscription-plan',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatButtonToggleGroup,
    MatButtonToggle,
    FormsModule,
    NgIf,
    TranslatePipe,
  ],
  templateUrl: './subscription-plan.component.html',
  styleUrl: './subscription-plan.component.css'
})
export class SubscriptionPlanComponent {
  selectedPlan: string = '';

  onPlanSelect(plan: string): void {
    this.selectedPlan = plan;
  }

  changePlan(): void {
    if (confirm('Are you sure you want to change your subscription plan?\n' +
      'This action will update your benefits, and the new plan will take effect immediately.')) {

    }
  }

}
