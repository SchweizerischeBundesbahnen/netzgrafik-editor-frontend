import {Component} from "@angular/core";
import {DataService} from "../../services/data/data.service";
import {UiInteractionService} from "../../services/ui/ui.interaction.service";
import {SbbRadioChange} from "@sbb-esta/angular/radio-button";
import {ThemeBase} from "../themes/theme-base";
import {ThemeRegistration} from "../themes/theme-registration";
import {
  StreckengrafikRenderingType
} from "../themes/streckengrafik-rendering-type";
import {TravelTimeCreationEstimatorType} from "../themes/editor-trainrun-traveltime-creator-type";

@Component({
  selector: "sbb-editor-properties-view-component",
  templateUrl: "./editor-properties-view.component.html",
  styleUrls: ["./editor-properties-view.component.scss"],
})
export class EditorPropertiesViewComponent {
  static DEFAULT_DARK_BACKGROUNDCOLOR = "#050505";
  static DEFAULT_BACKGROUNDCOLOR = "#f5f5f5";
  static BACKGROUNDCOLOR_WHITE = "#ffffff";

  readonly tSettings = $localize`:@@app.view.editor-properties-view-component.settings:Settings`;
  readonly tColorScheme = $localize`:@@app.view.editor-properties-view-component.color-scheme:Color scheme`;
  readonly tTheme = $localize`:@@app.view.editor-properties-view-component.theme:Theme`;
  readonly tBackgroundColor = $localize`:@@app.view.editor-properties-view-component.background-color:Background color`;
  readonly tSetColorToWhite = $localize`:@@app.view.editor-properties-view-component.set-color-to-white:Set color to 'white'`;
  readonly tResetBackgroundColorToDefault = $localize`:@@app.view.editor-properties-view-component.reset-background-color-to-default:Reset background color to default`;
  readonly tBackgroundColorBlack = $localize`:@@app.view.editor-properties-view-component.background-color-black:Background color (black)`;
  readonly tEditor = $localize`:@@app.view.editor-properties-view-component.editor:Editor`;
  readonly tTravelTimePresettingDefault = $localize`:@@app.view.editor-properties-view-component.travel-time-presetting-default:Travel time presetting (heuristics)`;
  readonly tStreckengrafik = $localize`:@@app.view.editor-properties-view-component.streckengrafik:Streckengrafik`;
  readonly tAxisScalingDistance = $localize`:@@app.view.editor-properties-view-component.axis-scaling-distance:Axis scaling (distance)`;


  colorThemeOptions = [
    {
      name: "Standard Farbschema",
      themeRegistration: ThemeRegistration.ThemeFach,
      isDark: false,
    },
    {
      name: "Spezielles Farbschema",
      themeRegistration: ThemeRegistration.ThemeDefaultUx,
      isDark: false,
    },
    {
      name: "Graustufen Farbschema",
      themeRegistration: ThemeRegistration.ThemeGray,
      isDark: false,
    },
    {
      name: "Optimiertes Farbschema zum Drucken/Exportieren",
      themeRegistration: ThemeRegistration.ThemeFachPrint,
      isDark: false,
    },
    {
      name: "Standard Farbschema (dunkel)",
      themeRegistration: ThemeRegistration.ThemeFachDark,
      isDark: true,
    },
    {
      name: "Spezielles Farbschema (dunkel)",
      themeRegistration: ThemeRegistration.ThemeDefaultUxDark,
      isDark: true,
    },
    {
      name: "Graustufen Farbschema (dunkel)",
      themeRegistration: ThemeRegistration.ThemeGrayDark,
      isDark: true,
    },
  ];
  activeColorTheme: ThemeBase = null;

  streckengrafikRenderingTypeOptions = [
    {
      name: "fahrzeitskaliert",
      title: "Die Streckengrafikabschnitte werden fahrzeitskaliert dargestellt, " +
        "d.h. es wird angenommen, dass der ausgewählte Zug mit konstanter " +
        "Geschwindigkeit verkehrt.",
      streckengrafikRenderingType: StreckengrafikRenderingType.TimeScaledDistance,
    },
    {
      name: "gleichmässig",
      title: "Die Streckengrafikabschnitte werden gleichmässig skaliert dargestellt.",
      streckengrafikRenderingType: StreckengrafikRenderingType.UniformDistance,
    },
  ];
  activeStreckengrafikRenderingType: StreckengrafikRenderingType = null;


  travelTimeCreationEstimatorTypeOptions = [
    {
      name: "Konstant 1min.",
      title: "Übernimmt die Fahrzeit mit konstant 1min (Default).",
      travelTimeCreationEstimatorType: TravelTimeCreationEstimatorType.Fixed,
    },
    {
      name: "Abschnittsfahrzeit",
      title: "Übernimmt die max. Fahrzeit auf dem selben Abschnitt aller Züge " +
        "gleicher Kategorie, sonst max. Fahrzeit aller Züge, sonst 1 Min.",
      travelTimeCreationEstimatorType: TravelTimeCreationEstimatorType.RetrieveFromEdge,
    },
  ];
  activeTravelTimeCreationEstimatorType: TravelTimeCreationEstimatorType = null;


  activeDarkBackgroundColor =
    EditorPropertiesViewComponent.DEFAULT_DARK_BACKGROUNDCOLOR;
  activeBackgroundColor = EditorPropertiesViewComponent.DEFAULT_BACKGROUNDCOLOR;

  constructor(
    private dataService: DataService,
    private uiInteractionService: UiInteractionService,
  ) {
    const activeTheme = this.uiInteractionService.getActiveTheme();
    this.activeColorTheme = activeTheme;
    this.activeStreckengrafikRenderingType =
      this.uiInteractionService.getActiveStreckengrafikRenderingType();
    this.activeTravelTimeCreationEstimatorType =
      this.uiInteractionService.getActiveTravelTimeCreationEstimatorType();

    if (activeTheme.isDark) {
      this.activeDarkBackgroundColor = this.getHexColor(
        activeTheme.backgroundColor,
      );
    } else {
      this.activeBackgroundColor = this.getHexColor(
        activeTheme.backgroundColor,
      );
    }
  }

  isActiveColorThemeDark(): boolean {
    return this.uiInteractionService.getActiveTheme().isDark;
  }

  onUpdateColorTheme(event: SbbRadioChange) {
    this.uiInteractionService.createTheme(
      event.value,
      this.activeBackgroundColor,
      this.activeDarkBackgroundColor,
    );
  }

  onUpdateStreckengrafikRenderingType(event: SbbRadioChange) {
    this.uiInteractionService.setActiveStreckengrafikRenderingType(event.value);
  }


  onUpdateaTravelTimeCreationEstimatorType(event: SbbRadioChange) {
    this.uiInteractionService.setActiveTravelTimeCreationEstimatorType(event.value);
  }

  colorPicked(value) {
    this.onUpdateColorTheme(
      new SbbRadioChange(
        null,
        this.uiInteractionService.getActiveTheme().themeRegistration,
      ),
    );
  }

  isDefaultBackgroundColorActive(): boolean {
    return (
      this.activeBackgroundColor ===
      EditorPropertiesViewComponent.DEFAULT_BACKGROUNDCOLOR
    );
  }

  isDefaultDarkBackgroundColorActive(): boolean {
    return (
      this.activeDarkBackgroundColor ===
      EditorPropertiesViewComponent.DEFAULT_DARK_BACKGROUNDCOLOR
    );
  }

  isBackgroundColorWhite(): boolean {
    return (
      this.activeBackgroundColor ===
      EditorPropertiesViewComponent.BACKGROUNDCOLOR_WHITE
    );
  }

  setBackgroundColorToWhite() {
    this.activeBackgroundColor =
      EditorPropertiesViewComponent.BACKGROUNDCOLOR_WHITE;
    this.onUpdateColorTheme(
      new SbbRadioChange(
        null,
        this.uiInteractionService.getActiveTheme().themeRegistration,
      ),
    );
  }

  onResetBackgroundColor() {
    this.activeBackgroundColor =
      EditorPropertiesViewComponent.DEFAULT_BACKGROUNDCOLOR;
    this.onUpdateColorTheme(
      new SbbRadioChange(
        null,
        this.uiInteractionService.getActiveTheme().themeRegistration,
      ),
    );
  }

  onResetDarkBackgroundColor() {
    this.activeDarkBackgroundColor =
      EditorPropertiesViewComponent.DEFAULT_DARK_BACKGROUNDCOLOR;
    this.onUpdateColorTheme(
      new SbbRadioChange(
        null,
        this.uiInteractionService.getActiveTheme().themeRegistration,
      ),
    );
  }

  isLocalStoredColorTheme() {
    return this.uiInteractionService.isLocalStoredColorTheme();
  }

  resetLocalStoredColorData() {
    this.uiInteractionService.resetLocalStoredColorData();
    this.activeColorTheme = this.uiInteractionService.getActiveTheme();
  }

  private getHexColor(colorStr): string {
    const a = document.createElement("div");
    a.style.color = colorStr;
    const colors = window
      .getComputedStyle(document.body.appendChild(a))
      .color.match(/\d+/g)
      .map((v) => parseInt(v, 10));
    document.body.removeChild(a);
    if (colors.length >= 3) {
      // eslint-disable-next-line no-bitwise
      return (
        "#" +
        ((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2])
          .toString(16)
          .substring(1)
      );
    } else {
      return colorStr;
    }
  }
}
