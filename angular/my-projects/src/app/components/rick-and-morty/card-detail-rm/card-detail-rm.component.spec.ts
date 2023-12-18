import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailRmComponent } from './card-detail-rm.component';

describe('CardDetailRmComponent', () => {
  let component: CardDetailRmComponent;
  let fixture: ComponentFixture<CardDetailRmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetailRmComponent]
    });
    fixture = TestBed.createComponent(CardDetailRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
