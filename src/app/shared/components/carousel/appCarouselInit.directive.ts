import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCarouselInit]',
  // standalone:true,
})
export class CarouselInitDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.initCarousel();
    }, 0);
  }

  private initCarousel() {
    console.log('diretiva funciona?');
    const carrouselContainer = this.el.nativeElement;
    if (!carrouselContainer) return;

    const item = carrouselContainer.querySelector('.carrossel-item');
    if (!item) {
      console.error("Elemento '.carrossel-item' não encontrado.");
      return;
    }

    setTimeout(() => {
      const largura = item.getBoundingClientRect().width;
      console.log('init', largura);
    }, 100); // Adicionando um atraso extra de 100ms
  }
}
