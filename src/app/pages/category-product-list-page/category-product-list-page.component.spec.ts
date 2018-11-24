import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductListPageComponent } from './category-product-list-page.component';

describe('CategoryProductListPageComponent', () => {
  let component: CategoryProductListPageComponent;
  let fixture: ComponentFixture<CategoryProductListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryProductListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryProductListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
