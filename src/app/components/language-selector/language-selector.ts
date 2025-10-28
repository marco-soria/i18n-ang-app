import { Component, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../service/language.service';

@Component({
  selector: 'app-language-selector',
  imports: [TranslateModule],
  templateUrl: './language-selector.html',
})
export class LanguageSelector {
  languageService = inject(LanguageService);

  currentLang = this.languageService.currentLang;

  languages = signal([
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'it', flag: '🇮🇹' },
  ]);

  changeLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;

    this.languageService.changeLang(lang);
  }
}
