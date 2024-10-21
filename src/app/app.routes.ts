import { Routes } from '@angular/router';
import { CandidateSearchComponent } from './pages/candidate-search/candidate-search.component';
import { JobSearchComponent } from './pages/job-search/job-search.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  // { path: 'dashboard', component: DashboardComponent },

  { path: 'job-search', component: JobSearchComponent },

  { path: 'candidate-search', component: CandidateSearchComponent },

  { path: '', pathMatch: 'full', redirectTo: '/job-search' },
];
