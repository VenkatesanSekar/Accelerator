import { Routes } from '@angular/router';
import { ServiceDetail } from './pages/service-detail/service-detail';
import { Home } from './home/home';
import { About } from './about/about';
import { Differentiators} from './differentiators/differentiators';
import { ContactUs } from './contact-us/contact-us';

export const routes: Routes = [
    { path: 'servicedetails', component: ServiceDetail },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'differentiators', component: Differentiators },
     { path: 'contact-us', component: ContactUs },
];
