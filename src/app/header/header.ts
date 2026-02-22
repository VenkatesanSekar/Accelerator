import { Component,signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceDetail } from '../pages/service-detail/service-detail';
import { Home } from '../home/home';
import { About } from '../about/about';

@Component({
  selector: 'app-header',
   imports: [RouterLink, ServiceDetail,Home,About],
  standalone: true,
  templateUrl: './header.html',
})
export class Header {// Signal to track if the 'Pathways' dropdown is open
  isPathwaysOpen = signal(false);

  togglePathways() {
    this.isPathwaysOpen.update(val => !val);
  }
}