import {Component, Input} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle} from "@angular/material/card";
import { MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';
import {MatDialog} from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-subscription-plan',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardContent,
    MatButtonToggleGroup,
    MatButtonToggle,
    FormsModule,
    NgIf,
    TranslatePipe,
    MatCardActions,
    MatIcon,
    NgClass,
    MatButton,
    NgForOf,
  ],
  templateUrl: './subscription-plan.component.html',
  styleUrl: './subscription-plan.component.css'
})
export class SubscriptionPlanComponent {
  selectedPlan: string = '';

  changePlan(plan: string): void {
    if (confirm('Are you sure you want to change your subscription plan?\n' +
      'This action will update your benefits, and the new plan will take effect immediately.')) {
      this.selectedPlan = plan;
    }else{
      this.selectedPlan = '';
    }
  }

}
