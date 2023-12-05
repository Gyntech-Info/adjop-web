import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjopFamilyComponent } from './adjop-family.component';

describe('AdjopFamilyComponent', () => {
  let component: AdjopFamilyComponent;
  let fixture: ComponentFixture<AdjopFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjopFamilyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdjopFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
