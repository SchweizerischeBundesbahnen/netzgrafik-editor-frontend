export type ColorRefType = string;

export interface PointDto {
  x: number;
  y: number;
}

export enum TrainrunSectionText {
  SourceArrival,
  SourceDeparture,
  TargetArrival,
  TargetDeparture,
  TrainrunSectionName,
  TrainrunSectionTravelTime,
  TrainrunSectionNumberOfStops,
}

export interface TrainrunSectionTextPositions {
  [TrainrunSectionText.SourceArrival]: PointDto;
  [TrainrunSectionText.SourceDeparture]: PointDto;
  [TrainrunSectionText.TargetArrival]: PointDto;
  [TrainrunSectionText.TargetDeparture]: PointDto;
  [TrainrunSectionText.TrainrunSectionName]: PointDto;
  [TrainrunSectionText.TrainrunSectionTravelTime]: PointDto;
  [TrainrunSectionText.TrainrunSectionNumberOfStops]: PointDto;
}

export interface PathDto {
  path: PointDto[];
  textPositions: TrainrunSectionTextPositions;
}

export enum PortAlignment {
  Top,
  Bottom,
  Left,
  Right,
}

export interface WarningDto {
  title: string;
  description: string;
}

export interface TimeFormatter {
  /*
  stylePattern : free text or special data access pattern or in any combination.
  supported special data access pattern [
    '{{consecutiveTime}}.format(HH:mm:ss)',
    '{{consecutiveTime}}.format(HH:mm)',
    '{{consecutiveTime}}',
    '{{time}}.format(HH:mm:ss)',
    '{{time}}.format(HH:mm)',
    '{{time}}'
    ]
   */
  colorRef: ColorRefType;
  stylePattern: string;
  textWidth: number; // default 20
  htmlStyle: string; // default '' - example 'font-size: 16px'- should not be used for coloring !!!
}

export interface TimeLockDto {
  time: number;
  consecutiveTime: number;
  lock: boolean;
  warning: WarningDto;
  timeFormatter: TimeFormatter; // undefined or object
}

export interface PortDto {
  id: number;
  positionIndex: number;
  positionAlignment: PortAlignment;
  trainrunSectionId: number;
}

export interface TransitionDto {
  // Durchfahrt
  id: number;
  port1Id: number;
  port2Id: number;
  isNonStopTransit: boolean;
}

export interface ConnectionDto {
  // Anschluss
  id: number;
  port1Id: number;
  port2Id: number;
}
