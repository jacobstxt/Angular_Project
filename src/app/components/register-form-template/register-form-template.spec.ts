import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormTemplate } from './register-form-template';

describe('RegisterFormTemplate', () => {
  let component: RegisterFormTemplate;
  let fixture: ComponentFixture<RegisterFormTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
