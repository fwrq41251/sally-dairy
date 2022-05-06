import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDatepickerComponent } from './table-datepicker.component';

describe('TableDatepickerComponent', () => {
  let component: TableDatepickerComponent;
  let fixture: ComponentFixture<TableDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDatepickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
