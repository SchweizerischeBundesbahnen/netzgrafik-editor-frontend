export class TrackSegments {
  constructor(
    public startPos: number,
    public endPos: number,
    public nbrTracks: number,
    public minNbrTracks: number,
    public backward: boolean) {
  }
}

export class TrackData {


  private nodeTracks: TrackData[] = [];
  private trackGrp: number = undefined;

  constructor(public track: number,
              public nodeId1: number = undefined,
              public nodeId2: number = undefined,
              public sectionTrackSegments: TrackSegments[] = []) {
  }

  setTrackGrp(grp: number) {
    this.trackGrp = grp;
  }

  getTrackGrp(): number {
    return this.trackGrp;
  }

  setNodeTracks(tracks: TrackData[]) {
    this.nodeTracks = tracks;
  }

  getNodeTracks(): TrackData[] {
    return this.nodeTracks;
  }
}
