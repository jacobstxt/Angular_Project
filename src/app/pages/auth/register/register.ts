import { Component } from '@angular/core';
import {RegisterFormTemplate} from '../../../components/register-form-template/register-form-template';
import {AccountService} from '../../../services/auth.service';
import {Router} from '@angular/router';
import {LoadingService} from '../../../services/loading.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RegisterFormTemplate
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  constructor(private accountService: AccountService,
              private router: Router, public loadingService: LoadingService) {}


  onSubmit(formData: FormData) {
    this.accountService.register(formData).subscribe({
      next: () => this.router.navigate(['/']),
      error: err => console.error('❌ Registration failed', err)
    });
  }


  protected readonly RegisterFormTemplate = RegisterFormTemplate;



}
