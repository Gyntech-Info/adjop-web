import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadalenaComponent } from './madalena.component';

describe('MadalenaComponent', () => {
  let component: MadalenaComponent;
  let fixture: ComponentFixture<MadalenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadalenaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MadalenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
