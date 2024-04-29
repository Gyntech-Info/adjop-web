import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        NoopAnimationsModule,
        BrowserAnimationsModule,
    ],
    exports: [
        NoopAnimationsModule,
        BrowserAnimationsModule
    ]
}) export class CarouselModule {

}