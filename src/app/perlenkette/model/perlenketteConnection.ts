import { Trainrun } from '../../models/trainrun.model';
import { Port } from '../../models/port.model';
import { Connection } from '../../models/connection.model';
import { Node } from '../../models/node.model';

export class PerlenketteConnection {
  constructor(
    public title: string,
    public categoryShortName: string,
    public beginningStation: string,
    public beginningStationId: number,
    public terminalStation: string,
    public terminalStationBackward: string,
    public frequency: number,
    public connectionWarning: boolean,
    public remainingTime: number,
    public connectedTrainrun: Trainrun,
    public port: Port,
    public id: number,
    public nodeId: number,
    public connection: Connection,
    public node: Node,
  ) {}
}
