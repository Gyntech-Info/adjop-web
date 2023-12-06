import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSanJoseComponent } from './auto-san-jose.component';

describe('AutoSanJoseComponent', () => {
  let component: AutoSanJoseComponent;
  let fixture: ComponentFixture<AutoSanJoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoSanJoseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoSanJoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
