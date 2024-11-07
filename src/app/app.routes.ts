import { Routes } from '@angular/router';
import { CandidateSearchComponent } from './pages/candidate-search/candidate-search.component';
import { JobSearchComponent } from './pages/job-search/job-search.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  { path: 'job-search', component: JobSearchComponent, canActivate: [AuthGuard] },

  { path: 'candidate-search', component: CandidateSearchComponent, canActivate: [AuthGuard] },

  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
];
