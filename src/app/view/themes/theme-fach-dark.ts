import {ThemeBase} from './theme-base';
import {ThemeFach} from './theme-fach';
import {ThemeRegistration} from './theme-registration';
import {StaticDomTags} from '../editor-main-view/data-views/static.dom.tags';

export class ThemeFachDark extends ThemeBase {
  constructor(backgroundColor = 'whitesmoke',
              backgroundStreckengraphikColor = 'white') {
    super(ThemeRegistration.ThemeFachDark, backgroundColor, backgroundStreckengraphikColor, true);
    ThemeBase.setUIColors(ThemeFach.getThemeFachColors());
    ThemeBase.setRenderingColors(ThemeFachDark.getThemeFachDarkColors());
  }

  static getThemeFachDarkColors(): string[] {
    return [
      'NODE_COLOR_BACKGROUND: #101010',
      'NODE_COLOR: #363636',
      'NODE_DOCKABLE: #060606',
      'NODE_DOCKABLE_HOVER: #060606',
      'NODE_TEXT_COLOR: #767676',
      'NODE_TEXT_FOCUS: whitesmoke',

      'CONNECTION_COLOR: #959595',
      'CONNECTION_COLOR_HOVER: #959595',
      'CONNECTION_COLOR_WARNING: #959595',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_NORMAL: #767676',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_NORMAL_FOCUS: #DCDCDC',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_NORMAL_MUTED: #000000',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_NORMAL_RELATED: #767676',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_EC: #f09f9f',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_EC_FOCUS: #ffdfdc',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_EC_MUTED: #724040',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_EC_RELATED: #ef6950',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IC: #f09f9f',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IC_FOCUS: #ffdfdc',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IC_MUTED: #724040',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IC_RELATED: #ef6950',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IR: #f09f9f',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IR_FOCUS: #ffdfdc',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IR_MUTED: #724040',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IR_RELATED: #ef6950',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_RE: #71d573',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_RE_FOCUS: #c4e5c4',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_RE_MUTED: #2e582f',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_RE_RELATED: #9ed267',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_S: #9d9d9d',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_S_FOCUS: #e4e4e4',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_S_MUTED: #3a3a3a',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_S_RELATED: #797979',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_GEX: #b197cb',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_GEX_FOCUS: #e9dae8',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_GEX_MUTED: #473c51',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_GEX_RELATED: #b197cb',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_G: #6888c9',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_G_FOCUS: #a6c3cd',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_G_MUTED: #384869',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_G_RELATED: #6888c9',

      'COLOR_GRAYEDOUT: #121212',
      'COLOR_TRANSITION_GRAYEDOUT: #242424',

      'COLOR_STRECKENGRAPHIK_LINE_GRID_X: whitesmoke',
      'COLOR_STRECKENGRAPHIK_LINE_GRID_Y: whitesmoke',

      'COLOR_Edit: #eb61ff'
    ];
  }
}
