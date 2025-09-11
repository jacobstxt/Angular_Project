import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AccountService} from '../../services/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-register-form-template',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register-form-template.html',
  styleUrls: ['./register-form-template.css']
})
export class RegisterFormTemplate implements OnInit {
  @Output() formSubmit = new EventEmitter<FormData>();
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      imageFile: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.registerForm.patchValue({ imageFile: file });
    }
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    const formData = new FormData();
    Object.entries(this.registerForm.value).forEach(([key, value]) => {
      if (value) formData.append(key, value as any);
    });
    this.formSubmit.emit(formData);
  }
}
