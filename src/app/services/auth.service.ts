import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private apiURL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  register(formData: FormData): Observable<any> {
    return this.http.post(this.apiURL + "account/register", formData);
  }
}
