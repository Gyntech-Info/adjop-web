import { NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { DescriptionComponent } from './description/description.component';
import { NewsComponent } from './news/news.component';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  imports: [
    AboutUsComponent,
    DescriptionComponent,
    NewsComponent,
    VideosComponent,
  ],
  exports: [
    AboutUsComponent,
    DescriptionComponent,
    NewsComponent,
    VideosComponent,
  ],
})
export class ComponentsModule { }
