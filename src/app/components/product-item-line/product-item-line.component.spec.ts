import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemLineComponent } from './product-item-line.component';

describe('ProductItemLineComponent', () => {
  let component: ProductItemLineComponent;
  let fixture: ComponentFixture<ProductItemLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
