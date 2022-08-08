import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrusComponent } from './urus.component';

describe('UrusComponent', () => {
  let component: UrusComponent;
  let fixture: ComponentFixture<UrusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
