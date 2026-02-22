import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  imports: [],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css',
})
export class ServiceDetail {
   solutionSteps = [
    {
      title: 'Managed services',
      color: '#4a76c5', // Blue
      icon: 'assets/icons/managed-service.png',
      points: [
        'Continuous compliance: Ongoing audits, monitoring, and controls',
        'Model ops: Model monitoring, retraining, and drift management',
        'Platform reliability: 24/7 operations, SLAs, and incident response',
        'Personalization: Continuous tuning for journeys and UBI pricing'
      ]
    },
    {
      title: 'Digital Innovation',
      color: '#4db6ac', // Teal
      icon: 'assets/icons/digital-innovation.png',
      points: [
        'AI underwriting & fraud detection',
        'IoT-based risk monitoring',
        'Usage-based insurance (auto/health)',
        'Wearables for health personalization'
      ]
    },
    {
      title: 'Business Transformation',
      color: '#43a047', // Green
      icon: 'assets/icons/business-transform.png',
      points: [
        'Fraud Management and Risk Control',
        'Compliance automation',
        'Microinsurance for SME & gig workers'
      ]
    },
    {
      title: 'Enablement',
      color: '#7cb342', // Light Green
      icon: 'assets/icons/enablement.png',
      points: [
        'Cloud based scalable infrastructure',
        'Agile squads',
        'Government/Regulatory sandboxes support',
        'AI governance framework for compliance'
      ]
    }
  ];

}
