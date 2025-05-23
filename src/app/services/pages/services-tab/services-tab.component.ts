import { Component } from '@angular/core';
import { Service} from '../../model/service.entity';
import {TranslatePipe} from '@ngx-translate/core';
import {ServiceTableComponent} from '../../components/service-table/service-table.component';

@Component({
  selector: 'app-services-tab',
  imports: [
    TranslatePipe,
    ServiceTableComponent,

  ],
  templateUrl: './services-tab.component.html',
  styleUrl: './services-tab.component.css'
})
export class ServicesTabComponent {
  service: Service[] = [];


}
