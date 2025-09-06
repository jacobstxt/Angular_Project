import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEdit } from './edit';

describe('Edit', () => {
  let component: CategoryEdit;
  let fixture: ComponentFixture<CategoryEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
