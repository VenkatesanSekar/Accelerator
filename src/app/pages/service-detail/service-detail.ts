import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  imports: [],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.css',
})
export class ServiceDetail {
  
  // Current active step index
  currentStep = signal(0);

  // Data matching the images you provided
  steps = [
    {
      title: 'Step 1: Application',
      description: 'Your journey starts here. Submit your profile for review.',
      image: 'assets/application.jpg'
    },
    {
      title: 'Step 2: Assessment',
      description: 'We evaluate your skills through technical tests.',
      image: 'assets/assessment.jpg'
    },
    {
      title: 'Step 3: Interview',
      description: 'After the hiring manager reviews your profile, they will share feedback with your recruiter to schedule a business interview with you.',
      image: 'assets/interview.png' // This matches image_e08c66.jpg
    }
  ];

  next() {
    if (this.currentStep() < this.steps.length - 1) {
      this.currentStep.update(s => s + 1);
    }
  }

  prev() {
    if (this.currentStep() > 0) {
      this.currentStep.update(s => s - 1);
    }
  }

}
