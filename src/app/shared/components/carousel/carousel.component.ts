import { AfterContentInit, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { EventosMock } from '../../mocks/eventos-mock';
import { interval, observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';


interface Evento {
  titulo: string;
  descricao: string;
  data: string;
  hora: string;
  local: string;
  imagem: string;
}
@Component({
  selector: 'aw-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements AfterContentInit {

  @ViewChild('carrouselContainer') carrouselContainer?: ElementRef;

  eventos = EventosMock;
  currentIndex = signal(0);
  totalItems!: number;
  timeToStand!: number;
  secondsMissing!: number;
  timesScrolled = 0;
  subscription: Subscription | undefined;


  ngAfterContentInit(): void {
    setTimeout(() => {
      this.startCount();
    }, 3000)
  }

  startCount() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.totalItems = this.carrouselContainer?.nativeElement.querySelectorAll('.items').length;
    this.timeToStand = this.totalItems;
    const observable = interval(5000).pipe(take(this.timeToStand));

    this.subscription = observable.subscribe(seconds => {
      this.secondsMissing = this.timeToStand - seconds;
      this.moveCarousel();
    })
  }

  moveCarousel() {
    this.moveTo(2);
  }

  public moveTo(direction: number) {
    let carrosselItem = this.carrouselContainer?.nativeElement.querySelector('.items');
    if (!carrosselItem) return;
    const largura = carrosselItem?.scrollWidth || 360;
    if (!direction || !largura) return;

    const container = this.carrouselContainer?.nativeElement;

    if (direction === 1) {
      container.scrollLeft -= largura as number;
      this.timesScrolled += largura;

    } else {
      container.scrollLeft += largura as number;
      this.timesScrolled += container.scrollLeft;
      if (this.timesScrolled > container.scrollWidth) {
        this.goBackFistSlide(container);
      }
    }
  }

  private goBackFistSlide(divElement: HTMLDivElement) {
    this.timesScrolled = 0
    divElement.scrollLeft = 0;
    this.startCount();
  }

  pauseCount() {
    console.log('Pausa');
    this.subscription?.unsubscribe();
  }
  
  resumeCount() {
    console.log('Recomeça')
    this.startCount();
  }
  
}

