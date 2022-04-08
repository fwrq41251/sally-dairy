import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLogModalComponent } from './item-log-modal.component';

describe('ItemLogModalComponent', () => {
  let component: ItemLogModalComponent;
  let fixture: ComponentFixture<ItemLogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLogModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
