export type VersionId = number;

export interface DownloadVersionModel {
  readonly versionId: VersionId;
  readonly fileName: string;
}
