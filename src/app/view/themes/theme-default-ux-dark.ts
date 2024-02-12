import {ThemeBase} from './theme-base';
import {ThemeDefaultUx} from './theme-default-ux';
import {ThemeRegistration} from './theme-registration';
import {StaticDomTags} from '../editor-main-view/data-views/static.dom.tags';

export class ThemeDefaultUxDark extends ThemeBase {
  constructor(
    backgroundColor = 'whitesmoke',
    backgroundStreckengraphikColor = 'white',
  ) {
    super(
      ThemeRegistration.ThemeDefaultUxDark,
      backgroundColor,
      backgroundStreckengraphikColor,
      true,
    );
    ThemeBase.setUIColors(ThemeDefaultUx.getThemeDefaultUxColors());
    ThemeBase.setRenderingColors(
      ThemeDefaultUxDark.getThemeDefaultUxDarkColors(),
    );
  }

  static getThemeDefaultUxDarkColors(): string[] {
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

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_EC: #B38BBD',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_EC_FOCUS: #E1D2E5',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_EC_MUTED: #715878',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_EC_RELATED: #B38BBD',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IC: #B38BBD',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IC_FOCUS: #E1D2E5',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IC_MUTED: #715878',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IC_RELATED: #B38BBD',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IR: #DAA4C4',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IR_FOCUS: #F0DBE8',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IR_MUTED: #7e5e71',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_IR_RELATED: #DAA4C4',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_RE: #9193BA',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_RE_FOCUS: #D4D5E4',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_RE_MUTED: #2D327D',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_RE_RELATED: #9193BA',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_S: #79B8E1',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_S_FOCUS: #CBE3F3',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_S_MUTED: #143A85',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_S_RELATED: #79B8E1',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_GEX: #a7a2a2',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_GEX_FOCUS: #DCDCDC',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_GEX_MUTED: #444444',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_GEX_RELATED: #DCDCDC',

      StaticDomTags.PREFIX_COLOR_VARIABLE + '_G: #a7a2a2',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_G_FOCUS: #DCDCDC',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_G_MUTED: #444444',
      StaticDomTags.PREFIX_COLOR_VARIABLE + '_G_RELATED: #DCDCDC',

      'COLOR_GRAYEDOUT: #121212',
      'COLOR_TRANSITION_GRAYEDOUT: #242424',

      'COLOR_STRECKENGRAPHIK_LINE_GRID_X: whitesmoke',
      'COLOR_STRECKENGRAPHIK_LINE_GRID_Y: whitesmoke',

      'COLOR_Edit: rgb(47, 210, 204)',
    ];
  }
}
