import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent implements OnInit {
  private readonly loadingService = inject(LoadingService);
  loadingMessage = signal('');

  ngOnInit(): void {
    this.loadingService.loadingMessage$.subscribe((data) => {
      if (data) this.loadingMessage.set(data);
    });
  }
}
