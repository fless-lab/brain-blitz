import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWithBrainiacComponent } from './chat-with-brainiac.component';

describe('ChatWithBrainiacComponent', () => {
  let component: ChatWithBrainiacComponent;
  let fixture: ComponentFixture<ChatWithBrainiacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatWithBrainiacComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWithBrainiacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
