import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private readonly spinner = inject(NgxSpinnerService);

  private loadingMessage = new BehaviorSubject<string>('');
  loadingMessage$ = this.loadingMessage.asObservable();

  private fakeDelay = 1000; // in ms
  block() {
    this.spinner.show();
  }

  unBlock() {
    setTimeout(() => {
      this.spinner.hide();
    }, this.fakeDelay);
  }

  startUiLoading(message: string) {
    this.loadingMessage.next(message);
    this.block();
    this.unBlock();
  }
}
