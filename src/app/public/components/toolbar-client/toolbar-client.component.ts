import {Component, OnInit} from '@angular/core';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {Salon} from '../../../dashboard/models/Salon.entity';
import {SalonAssembler} from '../../../dashboard/services/Salon.assembler';
import {SalonApiService} from '../../../dashboard/services/salon-api.service';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import { MatInput} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-toolbar-client',
  imports: [
    LanguageSwitcherComponent,
    RouterLink,
    MatAutocomplete,
    MatOption,
    MatInput,
    ReactiveFormsModule,
    MatAutocompleteTrigger
  ],
  templateUrl: './toolbar-client.component.html',
  styleUrl: './toolbar-client.component.css'
})
export class ToolbarClientComponent implements OnInit{
salones: Salon[] = [];
myControl = new FormControl();
filteredOptions: Salon[] = [];

constructor(private salonService: SalonApiService, private router: Router) {

}
ngOnInit() {
  this.salonService.getAll().subscribe(salones => {
    this.salones = SalonAssembler.toEntitiesfromResponse(salones);
    this.filteredOptions = this.salones;
    console.log('Search bar input succesfull',this.salones);
    this.myControl.valueChanges.subscribe(value => {
      const filterValue = value?.toLowerCase?.() || '';
      this.filteredOptions = this.salones.filter(salon => salon.name.toLowerCase().includes(filterValue))
    })
  });
}

onSalonSelected(salon: Salon) {
  if(salon && salon.salonId) {
    this.router.navigate(['/client/homeClient/salon', salon.salonId]);
  }
}
}
