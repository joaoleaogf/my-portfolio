import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // Sem withEventReplay(): evita o script inline de event-replay (violava a CSP
    // 'script-src self' e causava "i.map is not a function" na hidratação). Site
    // é estático/prerenderizado, então event replay agrega pouco.
    provideClientHydration(),
  ],
};
