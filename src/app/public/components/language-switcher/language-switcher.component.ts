import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  imports: [
    MatButtonToggleModule,
    NgForOf
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css',


})

export class LanguageSwitcherComponent {
  currentLang = 'en';
  languages = [
    { label: 'en', flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svgg' },
    { label: 'es', flag: 'assets/images/Spanish-Flag.png' },
  ];

  constructor(private translate: TranslateService) {
    this.currentLang = translate.currentLang;
  }

  useLanguage(language: string) {
    this.currentLang = language;
    this.translate.use(language);
  }

}
