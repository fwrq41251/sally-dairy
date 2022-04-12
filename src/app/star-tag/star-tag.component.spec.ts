import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarTagComponent } from './star-tag.component';

describe('StarTagComponent', () => {
  let component: StarTagComponent;
  let fixture: ComponentFixture<StarTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
