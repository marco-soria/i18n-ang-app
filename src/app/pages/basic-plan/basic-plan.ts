import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelector } from '../../components/language-selector/language-selector';

@Component({
  selector: 'app-basic-plan',
  imports: [LanguageSelector, RouterLink, TranslateModule],
  templateUrl: './basic-plan.html',
})
export default class BasicPlan {}
