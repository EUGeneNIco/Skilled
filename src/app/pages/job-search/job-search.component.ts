import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../models/job';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { Setup } from '../../enums/setup';
import { EmploymentType } from '../../enums/employmentType';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [CommonModule, NzCardModule, NzGridModule],
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.scss'
})
export class JobSearchComponent implements OnInit {
  private readonly jobService = inject(JobService);

  jobList = signal<Job[]>([]);
  setups = Setup;
  employmentTypes = EmploymentType;

  ngOnInit(): void {
    this.jobService.getList().subscribe({
      next: (data: Job[]) => {
        console.log('jobs: ', data);
        this.jobList.set(data);
      },
      error: (e) => {
        console.log('Error:', e);
      }
    })
  }
}
