import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelector } from '../../components/language-selector/language-selector';

@Component({
  selector: 'app-products',
  imports: [RouterLink, LanguageSelector, TranslateModule],
  templateUrl: './products.html',
})
export default class Products {
  fullName = signal('Houin Kyouma');
}
