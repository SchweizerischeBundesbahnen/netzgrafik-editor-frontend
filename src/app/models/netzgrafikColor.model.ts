import {NetzgrafikColorDto} from '../data-structures/business.data.structures';
import {ColorRefType} from '../data-structures/technical.data.structures';
export class NetzgrafikColor {

  private static currentId = 0;

  private id: number;
  private colorRef: ColorRefType;

  private color: string;
  private colorFocus: string;
  private colorMuted: string;
  private colorRelated: string;
  private colorDarkMode: string;
  private colorDarkModeFocus: string;
  private colorDarkModeMuted: string;
  private colorDarkModeRelated: string;

  constructor({
                id, colorRef,
                color, colorFocus, colorMuted, colorRelated,
                colorDarkMode, colorDarkModeFocus, colorDarkModeMuted, colorDarkModeRelated
              }: NetzgrafikColorDto = {
    id: NetzgrafikColor.incrementId(),
    colorRef: 'UserDefined',

    color: '#767676',
    colorFocus: '#000000',
    colorMuted: '#DCDCDC',
    colorRelated: '#767676',

    colorDarkMode: '#767676',
    colorDarkModeFocus: '#DCDCDC',
    colorDarkModeMuted: '#000000',
    colorDarkModeRelated: '#767676',
  }) {
    this.id = id;
    this.colorRef = colorRef;


    this.color = color;
    this.colorFocus = colorFocus;
    this.colorMuted = colorMuted;
    this.colorRelated = colorRelated;

    this.colorDarkMode = colorDarkMode;
    this.colorDarkModeFocus = colorDarkModeFocus;
    this.colorDarkModeMuted = colorDarkModeMuted;
    this.colorDarkModeRelated = colorDarkModeRelated;

    if (NetzgrafikColor.currentId < this.id) {
      NetzgrafikColor.currentId = this.id;
    }
  }

  private static incrementId(): number {
    return ++NetzgrafikColor.currentId;
  }

  getId(): number {
    return this.id;
  }

  getColorRef(): ColorRefType {
    return this.colorRef;
  }

  setColorRef(colorRef: ColorRefType) {
    this.colorRef = colorRef;
  }

  getColors(isDarkMode: boolean) {
    if (!isDarkMode) {
      return {
        color: this.color,
        colorFocus: this.colorFocus,
        colorMuted: this.colorMuted,
        colorRelated: this.colorRelated,
      };
    }
    return {
      color: this.colorDarkMode,
      colorFocus: this.colorDarkModeFocus,
      colorMuted: this.colorDarkModeMuted,
      colorRelated: this.colorDarkModeRelated,
    };
  }

  getDto(): NetzgrafikColorDto {
    return {
      id: this.id,
      colorRef: this.colorRef,

      color: this.color,
      colorFocus: this.colorFocus,
      colorMuted: this.colorMuted,
      colorRelated: this.colorRelated,

      colorDarkMode: this.colorDarkMode,
      colorDarkModeFocus: this.colorDarkModeFocus,
      colorDarkModeMuted: this.colorDarkModeMuted,
      colorDarkModeRelated: this.colorDarkModeRelated,
    };
  }
}
