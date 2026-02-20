import { Component,signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceDetail } from '../pages/service-detail/service-detail';

@Component({
  selector: 'app-header',
   imports: [RouterLink, ServiceDetail],
  standalone: true,
  templateUrl: './header.html',
})
export class Header {// Signal to track if the 'Pathways' dropdown is open
  isPathwaysOpen = signal(false);

  togglePathways() {
    this.isPathwaysOpen.update(val => !val);
  }
}