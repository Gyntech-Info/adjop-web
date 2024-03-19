import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'aw-home',
  standalone: true,
  imports: [CommonModule, ComponentsModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomePage {
  public imagePath = '../../../../assets/images/logo-white.png';
}
