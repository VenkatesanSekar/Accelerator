import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this!

@Component({
  selector: 'app-home',
  standalone: true,           // Most likely true in your project
  imports: [CommonModule],    // Add CommonModule here
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit, OnDestroy {
  currentIndex = 0;
  intervalId: any;

  slides = [
    {
      title: 'Beyond Maintenance: Agile Managed Services',
      description: 'Stop just "keeping the lights on." We transform your operational backbone into a high-performance engine.',
      image: 'assets/city-1.jpg'
    },
    {
      title: 'Proven AI-led Transformation',
      description: 'Boutique P&C insurance experts providing AI-led strategy & execution excellence.',
      image: 'assets/city-2.jpg'
    }
  ];

  ngOnInit() {
    // Start the automatic "streaming" timer
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000); 
  }

  ngOnDestroy() {
    // Clean up to prevent the timer from running in the background forever
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}