import { resources, defaultNS } from './config';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['en'];
  }
}
