import {ThemeBase} from "./theme-base";
import {ThemeRegistration} from "./theme-registration";
import {StaticDomTags} from "../editor-main-view/data-views/static.dom.tags";

export class ThemeFach extends ThemeBase {
  constructor(
    backgroundColor = "whitesmoke",
    backgroundStreckengraphikColor = "white",
  ) {
    super(
      ThemeRegistration.ThemeFach,
      backgroundColor,
      backgroundStreckengraphikColor,
      false,
    );
    ThemeBase.setUIColors(ThemeFach.getThemeFachColors());
    ThemeBase.setRenderingColors(ThemeFach.getThemeFachColors());
  }

  static getThemeFachColors(): string[] {
    return [
      "NODE_COLOR_BACKGROUND: whitesmoke",
      "NODE_COLOR: white",
      "NODE_DOCKABLE: white",
      "NODE_DOCKABLE_HOVER: white",
      "NODE_TEXT_COLOR: rgb(118, 118, 118)",
      "NODE_TEXT_FOCUS: rgb(0, 0, 0)",

      "CONNECTION_COLOR: #767676",
      "CONNECTION_COLOR_HOVER: #767676",
      "CONNECTION_COLOR_WARNING: #767676",

      StaticDomTags.PREFIX_COLOR_VARIABLE + "_NORMAL: #767676",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_NORMAL_FOCUS: #000000",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_NORMAL_MUTED: #DCDCDC",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_NORMAL_RELATED: #767676",

      StaticDomTags.PREFIX_COLOR_VARIABLE + "_EC: #ea7b7b",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_EC_FOCUS: #f00000",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_EC_MUTED: #ffdfdc",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_EC_RELATED: #ef6950",

      StaticDomTags.PREFIX_COLOR_VARIABLE + "_IC: #ea7b7b",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_IC_FOCUS: #f00000",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_IC_MUTED: #ffdfdc",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_IC_RELATED: #ef6950",

      StaticDomTags.PREFIX_COLOR_VARIABLE + "_IR: #ea7b7b",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_IR_FOCUS: #f00000",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_IR_MUTED: #ffdfdc",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_IR_RELATED: #ef6950",

      StaticDomTags.PREFIX_COLOR_VARIABLE + "_RE: #3bc43d",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_RE_FOCUS: #2f9d31",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_RE_MUTED: #c4e5c4",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_RE_RELATED: #9ed267",

      StaticDomTags.PREFIX_COLOR_VARIABLE + "_S: #808080",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_S_FOCUS: #3a3a3a",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_S_MUTED: #e4e4e4",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_S_RELATED: #797979",

      StaticDomTags.PREFIX_COLOR_VARIABLE + "_GEX: #8c66b2",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_GEX_FOCUS: #4c4488",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_GEX_MUTED: #e6ddee",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_GEX_RELATED: #8c66b2",

      StaticDomTags.PREFIX_COLOR_VARIABLE + "_G: #567fd2",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_G_FOCUS: #2b52a1",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_G_MUTED: #d7e1f4",
      StaticDomTags.PREFIX_COLOR_VARIABLE + "_G_RELATED: #86a4df",

      "COLOR_GRAYEDOUT: white",
      "COLOR_TRANSITION_GRAYEDOUT: whitesmoke",

      "COLOR_STRECKENGRAPHIK_LINE_GRID_X: darkgray",
      "COLOR_STRECKENGRAPHIK_LINE_GRID_Y: darkgray",

      "COLOR_Edit: #f939e9",
    ];
  }
}
