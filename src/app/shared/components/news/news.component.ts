import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from "../../shared/components/carousel/carousel.component";

@Component({
    selector: 'aw-news',
    standalone: true,
    templateUrl: './news.component.html',
    styleUrl: './news.component.scss',
    imports: [CommonModule, CarouselComponent]
})
export class NewsComponent {

}
