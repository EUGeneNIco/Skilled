import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNzIcons } from './icons-provider';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { AuthConfig, OAuthModuleConfig, OAuthStorage, provideOAuthClient } from 'angular-oauth2-oidc';
import { authAppInitializerFactory } from './auth/auth-app-initializer.factory';
import { authConfig } from './auth/auth-config';
import { authModuleConfig } from './auth/auth-module-config';
import { AuthService } from './services/auth.service';

registerLocaleData(en);
export function storageFactory(): OAuthStorage {
  return localStorage;
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideOAuthClient(),
    provideRouter(routes), provideNzIcons(), provideNzI18n(en_US), importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient(),
    { provide: APP_INITIALIZER, useFactory: authAppInitializerFactory, deps: [AuthService], multi: true },
    { provide: AuthConfig, useValue: authConfig },
    { provide: OAuthModuleConfig, useValue: authModuleConfig },
    { provide: OAuthStorage, useFactory: storageFactory },]
};
