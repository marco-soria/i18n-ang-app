// import { TranslateLoader } from '@ngx-translate/core';
// import { Observable, of } from 'rxjs';

// import * as TranslationsEN from '../../public/i18n/en.json';
// import * as TranslationsES from '../../public/i18n/es.json';
// import * as TranslationsFR from '../../public/i18n/fr.json';
// import * as TranslationsIT from '../../public/i18n/it.json';

// interface Translation {
//   [key: string]: string | Translation;
// }

// const TRANSLATIONS: Translation = {
//   en: TranslationsEN,
//   es: TranslationsES,
//   fr: TranslationsFR,
//   it: TranslationsIT,
// };

// export class StaticTranslationLoader implements TranslateLoader {
//   public getTranslation(lang: string): Observable<Translation | string> {
//     const translation = TRANSLATIONS[lang];
//     if (translation) {
//       return of(translation);
//     } else {
//       console.error(`Unknown language: ${lang}`);
//       return of({});
//     }
//   }
// }
