import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AuthService } from './services/auth.service';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { LoadingService } from './services/loading.service';
import { LoadingComponent } from './components/loading/loading.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule,
    NzAvatarModule,
    LoadingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly authService = inject(AuthService);
  readonly loadingService = inject(LoadingService);
  isCollapsed = false;
  pictureSrc = signal('');

  ngOnInit(): void {
    console.log('app comp runs..')

    this.authService.loggedInUser$.subscribe((user) => {
      if (!user) {
        this.pictureSrc.set('');
        return;
      }

      this.pictureSrc.set(this.authService.profilePicture);
    });

    this.loadingService.startUiLoading('Initializing...');
  }

  logout() {
    this.loadingService.startUiLoading('Logging you out...');
    this.authService.handleLogout();
  }
  login() {
    this.authService.login();
  }
}
