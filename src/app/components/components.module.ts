import { NgModule } from "@angular/core";
import { AboutUsComponent } from "../shared/components/about-us/about-us.component";
import { CarouselComponent } from "../shared/components/carousel/carousel.component";
import { DescriptionComponent } from "../shared/components/description/description.component";
import { NewsComponent } from "../shared/components/news/news.component";
import { VideosComponent } from "../shared/components/videos/videos.component";


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
