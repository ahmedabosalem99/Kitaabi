import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = 'https://rain-sly-yuzu.glitch.me/users';

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }
}
