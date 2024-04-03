import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { DescriptionComponent } from './description/description.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';

@NgModule({
  imports: [
    AboutUsComponent,
    DescriptionComponent,
    NewsComponent,
    VideosComponent,
    CarouselComponent

  ],
  exports: [
    AboutUsComponent,
    DescriptionComponent,
    NewsComponent,
    VideosComponent,
    CarouselComponent
  ],
})
export class ComponentsModule { }
