import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjopChildrenComponent } from './adjop-children.component';

describe('AdjopChildrenComponent', () => {
  let component: AdjopChildrenComponent;
  let fixture: ComponentFixture<AdjopChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjopChildrenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdjopChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
