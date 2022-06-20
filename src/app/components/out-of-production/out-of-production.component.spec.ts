import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfProductionComponent } from './out-of-production.component';

describe('OutOfProductionComponent', () => {
  let component: OutOfProductionComponent;
  let fixture: ComponentFixture<OutOfProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutOfProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutOfProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
