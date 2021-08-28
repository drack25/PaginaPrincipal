import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})


export class CarouselComponent implements OnInit {

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel!: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  imagenescar: any[]=[
    { name: "Carrusel 1",
      img: 'assets/img/Carrusel1.jpg',
	    desc: 'Carrusel 1',
    },
    { name: "Carrusel 2",
      img: 'assets/img/Carrusel6.jpg',
	    desc: 'Carrusel 2',
    },
    { name: "Carrusel 3",
      img: 'assets/img/Carrusel3.jpg',
	    desc: 'Carrusel 3',
    },
    { name: "Carrusel 4",
      img: 'assets/img/Carrusel4.jpg',
	    desc: 'Carrusel 4',
    }
  ];
  constructor(private _config:NgbCarouselConfig) {
   
  }

  ngOnInit(): void {
  }

}
