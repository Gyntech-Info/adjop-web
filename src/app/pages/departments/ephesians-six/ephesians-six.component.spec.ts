import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EphesiansSixComponent } from './ephesians-six.component';

describe('EphesiansSixComponent', () => {
  let component: EphesiansSixComponent;
  let fixture: ComponentFixture<EphesiansSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EphesiansSixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EphesiansSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
