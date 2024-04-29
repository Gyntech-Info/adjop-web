import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { EventosMock } from './shared/mocks/eventos-mock';
import { HeaderMenu } from "./shared/utils/header-menu.const";

@Component({
  selector: 'aw-root',
  standalone: true,
  imports: [CommonModule, CoreModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  Eventos = EventosMock;
  public title = 'adjop-web';
  public headerMenu = HeaderMenu;
}

