import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelItemComponent } from './duel-item.component';

describe('DuelItemComponent', () => {
  let component: DuelItemComponent;
  let fixture: ComponentFixture<DuelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
