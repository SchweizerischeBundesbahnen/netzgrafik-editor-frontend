/* This file contains data structure of the Netzgrafik Dtos. The model files encapsulate these data structures and
add's additional functionality */

import {
  ColorRefType,
  ConnectionDto,
  PathDto,
  PortDto,
  TimeLockDto,
  TransitionDto,
  WarningDto,
} from "./technical.data.structures";

export interface FreeFloatingTextDto {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  text: string;
  backgroundColor: string;
  textColor: string;
  labelIds: number[];
}

export interface NetzgrafikColorDto {
  id: number;
  colorRef: ColorRefType; // uniqueness (business id)

  color: string;
  colorFocus: string;
  colorMuted: string;
  colorRelated: string;

  colorDarkMode: string;
  colorDarkModeFocus: string;
  colorDarkModeMuted: string;
  colorDarkModeRelated: string;
}

export interface TrainrunCategory {
  id: number;
  order: number;
  name: string;
  shortName: string; // uniqueness (business id)
  fachCategory: HaltezeitFachCategories;
  colorRef: ColorRefType;
  minimalTurnaroundTime: number;
  nodeHeadwayStop: number;
  nodeHeadwayNonStop: number;
  sectionHeadway: number;
}

export interface TrainrunFrequency {
  id: number;
  order: number;
  frequency: number; // in minutes
  offset: number; // in minutes
  name: string;
  shortName: string;
  linePatternRef: LinePatternRefs;
}

export interface TrainrunTimeCategory {
  id: number;
  order: number;
  name: string;
  shortName: string;
  dayTimeInterval: TimeInterval[];
  weekday: number[];
  linePatternRef: LinePatternRefs;
}

export interface TimeInterval {
  from: number;
  to: number;
}

export interface TrainrunSectionDto {
  id: number;
  sourceNodeId: number;
  sourcePortId: number;
  targetNodeId: number;
  targetPortId: number;

  sourceArrival: TimeLockDto;
  sourceDeparture: TimeLockDto;
  targetArrival: TimeLockDto;
  targetDeparture: TimeLockDto;
  travelTime: TimeLockDto;

  numberOfStops: number;

  trainrunId: number;
  resourceId: number;

  specificTrainrunSectionFrequencyId: number;
  path: PathDto;
  warnings: WarningDto[];
}

export enum LabelRef {
  Undefinded = "Undefined",
  Node = "Node",
  Trainrun = "Trainrun",
  Note = "Note",
}

export interface LabelDto {
  id: number;
  label: string;
  labelGroupId: number;
  labelRef: LabelRef;
}

export interface LabelGroupDto {
  id: number;
  name: string;
  labelRef: LabelRef;
}

export interface NodeDto {
  id: number;
  betriebspunktName: string; // BN -> 2-4 char name (theoretisch länger, im UI einfach abschneiden aber in der DB zulassen)
  fullName: string; // optional, beim workshop kann der auch mal leer sein. -> in UI, falls leer, fallback to Betriebspunk
  positionX: number;
  positionY: number;

  ports: PortDto[];
  transitions: TransitionDto[];
  connections: ConnectionDto[];

  resourceId: number;
  perronkanten: number;
  connectionTime: number; // aka Umsteigezeit
  trainrunCategoryHaltezeiten: TrainrunCategoryHaltezeit;
  symmetryAxis: number;
  warnings: WarningDto[];

  labelIds: number[];
}

export interface TrainrunDto {
  id: number;
  name: string;
  categoryId: number;
  frequencyId: number;
  trainrunTimeCategoryId: number;

  labelIds: number[];
}

export enum HaltezeitFachCategories {
  IPV = "HaltezeitIPV",
  A = "HaltezeitA",
  B = "HaltezeitB",
  C = "HaltezeitC",
  D = "HaltezeitD",
  Uncategorized = "HaltezeitUncategorized",
}

export enum LinePatternRefs {
  Freq120 = "120",
  Freq60 = "60",
  Freq30 = "30",
  Freq20 = "20",
  Freq15 = "15",
  TimeCat7_24 = "7/24",
  TimeCatHVZ = "HVZ",
  TimeZeitweise = "ZEITWEISE",
}

export interface TrainrunCategoryHaltezeit {
  [HaltezeitFachCategories.IPV]: Haltezeit;
  [HaltezeitFachCategories.A]: Haltezeit;
  [HaltezeitFachCategories.B]: Haltezeit;
  [HaltezeitFachCategories.C]: Haltezeit;
  [HaltezeitFachCategories.D]: Haltezeit;
  [HaltezeitFachCategories.Uncategorized]: Haltezeit;
}

export interface Haltezeit {
  haltezeit: number;
  no_halt: boolean;
}

export interface MetadataDto {
  trainrunCategories: TrainrunCategory[];
  trainrunFrequencies: TrainrunFrequency[];
  trainrunTimeCategories: TrainrunTimeCategory[];
  netzgrafikColors: NetzgrafikColorDto[];
}

export interface ResourceDto {
  id: number;
  capacity: number;
}

export interface FilterSettingDto {
  id: number;
  name: string;
  description: string;
  filterNodeLabels: number[];
  filterNoteLabels: number[];
  filterTrainrunLabels: number[];
  filterArrivalDepartureTime: boolean;
  filterTravelTime: boolean;
  filterTrainrunName: boolean;
  filterConnections: boolean;
  filterShowNonStopTime: boolean;
  filterTrainrunCategory: TrainrunCategory[];
  filterTrainrunFrequency: TrainrunFrequency[];
  filterTrainrunTimeCategory: TrainrunTimeCategory[];
  filterAllEmptyNodes: boolean;
  filterAllNonStopNodes: boolean;
  filterNotes: boolean;
  timeDisplayPrecision: number;
  isTemporaryDisableFilteringOfItemsInView: boolean;
  temporaryEmptyAndNonStopFilteringSwitchedOff: boolean;
}

export interface FilterDataDto {
  filterSettings: FilterSettingDto[];
}

export interface NetzgrafikDto {
  nodes: NodeDto[];
  trainrunSections: TrainrunSectionDto[];
  trainruns: TrainrunDto[];
  resources: ResourceDto[];
  metadata: MetadataDto;
  freeFloatingTexts: FreeFloatingTextDto[];
  labels: LabelDto[];
  labelGroups: LabelGroupDto[];
  filterData: FilterDataDto;
}
