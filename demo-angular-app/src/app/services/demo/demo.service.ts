import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DemoService {
  constructor(private httpClient: HttpClient) {}

  getValor(): Observable<string> {
    return this.httpClient.get('/demo', { responseType: 'text' });
  }
}
