import {Injectable} from "@angular/core";
import {registerLocaleData} from "@angular/common";
import {loadTranslations} from "@angular/localize";

@Injectable({
    providedIn: "root",
  })
  export class I18nService {
    readonly allowedLanguages = ["en", "fr", "de", "it"];
    translations: any = {};
    language: string;

    async setLanguage() {
      const userLanguage = localStorage.getItem("i18nLng");
      if (userLanguage && this.allowedLanguages.includes(userLanguage)) {
        this.language = userLanguage;
      } else {
        const navigatorLanguage = navigator.language.slice(0, 2);
        if (this.allowedLanguages.includes(navigatorLanguage)) {
          this.language = navigatorLanguage;
        } else {
          this.language = this.allowedLanguages[0];
        }
        localStorage.setItem("i18nLng", this.language);
      }

      // Use webpack magic string to only include required locale data
      const languageModule = await import(
        /* webpackInclude: /(en|de|fr|it)\.mjs$/ */
        `/node_modules/@angular/common/locales/${this.language}.mjs`
      );
      registerLocaleData(languageModule.default);
  
      // Load translation file initially
      await this.loadTranslations();
    }
  
    async loadTranslations() {
      const languageTranslationsModule = await import(
        `src/assets/i18n/${this.language}.json`
      );
  
      // Ensure translations are flattened if necessary
      this.translations = this.flattenTranslations(languageTranslationsModule.default);
  
      // Load translations for the current language at runtime
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
