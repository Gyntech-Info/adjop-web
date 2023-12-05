import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThailandPrComponent } from './thailand-pr.component';

describe('ThailandPrComponent', () => {
  let component: ThailandPrComponent;
  let fixture: ComponentFixture<ThailandPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThailandPrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThailandPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
