import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import { MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-plan-selector',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatButtonToggleGroup,
    MatButtonToggle,
    FormsModule,
    NgIf,
  ],
  templateUrl: './plan-selector.component.html',
  styleUrl: './plan-selector.component.css'
})
export class PlanSelectorComponent {
  selectedPlan: string = '';

  onPlanSelect(plan: string): void {
    this.selectedPlan = plan;
  }
}
