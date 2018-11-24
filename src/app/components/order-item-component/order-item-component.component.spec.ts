import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemComponentComponent } from './order-item-component.component';

describe('OrderItemComponentComponent', () => {
  let component: OrderItemComponentComponent;
  let fixture: ComponentFixture<OrderItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
