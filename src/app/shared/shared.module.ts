import { NgModule } from '@angular/core';

import { BannerComponent } from "./components/banner/banner.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { TabComponent } from "./components/tab/tab.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { DescriptionComponent } from "./components/description/description.component";
import { NewsComponent } from "./components/news/news.component";
import { VideosComponent } from "./components/videos/videos.component";

@NgModule({
  imports: [
    BannerComponent,
    CarouselComponent,
    TabComponent,
    AboutUsComponent,
    DescriptionComponent,
    NewsComponent,
    VideosComponent,
  ],
  exports: [
    BannerComponent,
    CarouselComponent,
    TabComponent,
    AboutUsComponent,
    DescriptionComponent,
    NewsComponent,
    VideosComponent,
  ]
})
export class SharedModule { }
