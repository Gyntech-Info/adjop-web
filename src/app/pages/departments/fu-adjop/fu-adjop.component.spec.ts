import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuAdjopComponent } from './fu-adjop.component';

describe('FuAdjopComponent', () => {
  let component: FuAdjopComponent;
  let fixture: ComponentFixture<FuAdjopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuAdjopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FuAdjopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
