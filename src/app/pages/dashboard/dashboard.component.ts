import { Component, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { LoggedInUser } from '../../auth/logged-in-user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  loggedInUserName = signal('');
  readonly authService = inject(AuthService);
  ngOnInit(): void {
    this.authService.loggedInUser$.subscribe((user) => {
      if (!user) {
        this.loggedInUserName.set('');
        return;
      }

      this.loggedInUserName.set(user.name);
    });
  }
}
