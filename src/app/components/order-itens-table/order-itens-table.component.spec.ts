import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItensTableComponent } from './order-itens-table.component';

describe('OrderItensTableComponent', () => {
  let component: OrderItensTableComponent;
  let fixture: ComponentFixture<OrderItensTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderItensTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderItensTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
