import {Injectable} from "@angular/core";
import {registerLocaleData} from "@angular/common";
import {loadTranslations} from "@angular/localize";

@Injectable({
    providedIn: "root",
  })
  export class I18n {
    readonly allowedLocales = ["en", "fr", "de", "it"];
    translations: any = {};
    locale: string;

    async setLocale() {
      const userLocale = localStorage.getItem("locale");
      if (userLocale && this.allowedLocales.includes(userLocale)) {
        this.locale = userLocale;
      }
      else {
        const navigatorLocale = navigator.language.slice(0, 2);
        if (this.allowedLocales.includes(navigatorLocale)) {
          this.locale = navigatorLocale;
        } else {
          this.locale = "en";
        }
        localStorage.setItem("locale", this.locale);
      }

      // Use webpack magic string to only include required locale data
      const localeModule = await import(
        /* webpackInclude: /(en|de|fr|it)\.mjs$/ */
        `/node_modules/@angular/common/locales/${this.locale}.mjs`
      );
      registerLocaleData(localeModule.default);
  
      // Load translation file initially
      await this.loadTranslations();
    }
  
    async loadTranslations() {
      const localeTranslationsModule = await import(
        `src/assets/i18n/${this.locale}.json`
      );
  
      // Ensure translations are flattened if necessary
      this.translations = this.flattenTranslations(localeTranslationsModule.default);
  
      // Load translations for the current locale at runtime
      loadTranslations(this.translations);
    }
  
    // Helper function to flatten nested translations
    // nested JSON :
    // {
    //   "app": {
    //     "login": "Login",
    //     "models": {...}
    //   }
    // }
    // flattened JSON :
    // {
    //   "app.login": "Login",
    //   "app.models...": ...,
    //   "app.models...": ...
    // }
    private flattenTranslations(translations: any): any {
      const flattenedTranslations = {};
  
      function flatten(obj, prefix = "") {
        for (const key in obj) {
          if (typeof obj[key] === "string") {
            flattenedTranslations[prefix + key] = obj[key];
          } else if (typeof obj[key] === "object") {
            flatten(obj[key], prefix + key + ".");
          }
        }
      }
  
      flatten(translations);
      return flattenedTranslations;
    }
  
    // Used for the pipe and allowing parameters
    translate(key: string, params?: any): string {
      let translation = this.translations[key] || key;
  
      if (params) {
        Object.keys(params).forEach(param => {
          translation = translation.replace(`{$${param}}`, params[param]);
        });
      }
  
      return translation;
    }
  }
