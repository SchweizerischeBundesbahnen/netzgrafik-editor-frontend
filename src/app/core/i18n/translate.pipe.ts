import {Pipe, PipeTransform} from "@angular/core";
import {I18n} from "./i18n.service";

@Pipe({
  name: "translate",
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private i18n: I18n) {}

  transform(key: string, params?: any): string {
    return this.i18n.translate(key, params);
  }
}
