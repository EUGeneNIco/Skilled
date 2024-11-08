import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class JobService extends BaseService {
  constructor(public override http: HttpClient) {
    super(http);
  }

  getList() {
    return this.http.get<Job[]>(this.apiUrl + 'api/job');
  }
}
