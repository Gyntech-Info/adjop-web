import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjopMenComponent } from './adjop-men.component';

describe('AdjopMenComponent', () => {
  let component: AdjopMenComponent;
  let fixture: ComponentFixture<AdjopMenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjopMenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdjopMenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
