import {TrainrunCategoryHaltezeit} from '../data-structures/business.data.structures';
import {Vec2D} from '../utils/vec2D';

export class Stammdaten {

  private bp: string;
  private haltezeiten: TrainrunCategoryHaltezeit;
  private zaz: number;
  private connectionTime: number;         // aka Umsteigezeit
  private regions: string[];
  private filterableLabels: string[];
  private kategorien: string[];
  private position: Vec2D;
  private bahnhof: string;
  private erstellen: string;

  constructor(bp: string, haltezeiten: TrainrunCategoryHaltezeit, zaz: number, connectionTime: number,
              regions: string[], filterableLabels: string[], kategorien: string[],
              bahnhof: string, position: Vec2D, erstellen: string) {
    this.bp = bp;
    this.haltezeiten = haltezeiten;
    this.zaz = zaz;
    this.connectionTime = connectionTime;
    this.regions = regions;
    this.filterableLabels = filterableLabels;
    this.kategorien = kategorien;
    this.position = position;
    this.bahnhof = bahnhof;
    this.erstellen = erstellen;
  }

  getBahnhof(): string {
    return this.bahnhof;
  }

  getErstellen(): string {
    return this.erstellen;
  }

  getPosition(): Vec2D {
    return this.position;
  }

  getKategorien(): string[] {
    return this.kategorien;
  }

  getFilterableLabels(): string[] {
    return this.filterableLabels;
  }

  getRegions(): string[] {
    return this.regions;
  }

  getBP(): string {
    return this.bp;
  }

  getHaltezeiten(): TrainrunCategoryHaltezeit {
    return this.haltezeiten;
  }

  getZAZ(): number {
    return this.zaz;
  }

  getConnectionTime(): number {
    return this.connectionTime;
  }
}
