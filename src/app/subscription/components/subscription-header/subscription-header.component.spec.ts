import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionHeaderComponent } from './subscription-header.component';

describe('SubscriptionHeaderComponent', () => {
  let component: SubscriptionHeaderComponent;
  let fixture: ComponentFixture<SubscriptionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
