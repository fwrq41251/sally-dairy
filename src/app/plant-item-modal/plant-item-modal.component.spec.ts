import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantItemModalComponent } from './plant-item-modal.component';

describe('PlantItemModalComponent', () => {
  let component: PlantItemModalComponent;
  let fixture: ComponentFixture<PlantItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
