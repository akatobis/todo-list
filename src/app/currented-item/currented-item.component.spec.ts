import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentedItemComponent } from './currented-item.component';

describe('CurrentedItemComponent', () => {
  let component: CurrentedItemComponent;
  let fixture: ComponentFixture<CurrentedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
