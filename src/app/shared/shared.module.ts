import { NgModule } from '@angular/core';
import { BannerComponent } from "./components/banner/banner.component";
import { TabComponent } from "./components/tab/tab.component";
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({

  imports: [
    BannerComponent,
    CarouselComponent,
    TabComponent,
  ],
  exports: [
    BannerComponent,
    CarouselComponent,
    TabComponent
  ]
})
export class SharedModule { }
