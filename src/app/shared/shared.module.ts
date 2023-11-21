import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from "./components/banner/banner.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { TabComponent } from "./components/tab/tab.component";

@NgModule({
  imports: [
    BannerComponent,
    CarouselComponent,
    TabComponent
  ],
  exports: [
    BannerComponent,
    CarouselComponent,
    TabComponent
  ]
})
export class SharedModule { }
