import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  apiUrl = 'https://localhost:7206/';
  constructor(public http: HttpClient) {}
}
