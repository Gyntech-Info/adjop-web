import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OystersRiverComponent } from './oysters-river.component';

describe('OystersRiverComponent', () => {
  let component: OystersRiverComponent;
  let fixture: ComponentFixture<OystersRiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OystersRiverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OystersRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
