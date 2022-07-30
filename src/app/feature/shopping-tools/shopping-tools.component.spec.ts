import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingToolsComponent } from './shopping-tools.component';

describe('ShoppingToolsComponent', () => {
  let component: ShoppingToolsComponent;
  let fixture: ComponentFixture<ShoppingToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
