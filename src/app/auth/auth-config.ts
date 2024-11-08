import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  clientId:
    '1081849829782-an6ak4rhv2rsiee9qe7o0npcjljioo35.apps.googleusercontent.com', // The "Auth Code + PKCE" client
  dummyClientSecret: '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',
  responseType: 'code',
  redirectUri: window.location.origin + '/',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  strictDiscoveryDocumentValidation: false,
  scope: 'openid profile email', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator: 'semicolon', // Real semicolon gets mangled by Duende ID Server's URI encoding
};
