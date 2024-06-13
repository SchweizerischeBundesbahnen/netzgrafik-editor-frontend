import {registerLocaleData} from "@angular/common";
import {APP_INITIALIZER, Injectable, LOCALE_ID} from "@angular/core";
import {loadTranslations} from "@angular/localize";

@Injectable({
  providedIn: "root",
})
class I18n {
  locale = "en";

  async setLocale() {
    const userLocale = localStorage.getItem("locale");

    // If the user has a preferred language stored in localStorage, use it.
    if (userLocale) {
      this.locale = userLocale;
    } else {
      localStorage.setItem("locale", this.locale);
    }

    // Use web pack magic string to only include required locale data
    const localeModule = await import(
      /* webpackInclude: /(en|de|fr|it)\.mjs$/ */
      `/node_modules/@angular/common/locales/${this.locale}.mjs`
    );

    // Set locale for built in pipes, etc.
    registerLocaleData(localeModule.default);

    // Load translation file
    const localeTranslationsModule = await import(
      `src/assets/i18n/${this.locale}.json`
    );

    // Load translations for the current locale at run-time
    loadTranslations(localeTranslationsModule.default);
  }
}

// Load locale data at app start-up
function setLocale() {
  return {
    provide: APP_INITIALIZER,
    useFactory: (i18n: I18n) => () => i18n.setLocale(),
    deps: [I18n],
    multi: true,
  };
}

// Set the runtime locale for the app
function setLocaleId() {
  return {
    provide: LOCALE_ID,
    useFactory: (i18n: I18n) => i18n.locale,
    deps: [I18n],
  };
}

export const I18nModule = {
  setLocale: setLocale,
  setLocaleId: setLocaleId,
};
