import { Injectable } from '@angular/core';
import { envirement } from '../envirements/envirement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'access_token';

  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    return this.http.post<{ token: string }>(`${envirement.apiUrl}/auth/login`, {
      username,
      password,
    });
  }

  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
