export * from "./projectController.service";
import {ProjectControllerBackendService} from "./projectController.service";
export * from "./projectController.serviceInterface";
export * from "./variantController.service";
import {VariantControllerBackendService} from "./variantController.service";
export * from "./variantController.serviceInterface";
export * from "./versionController.service";
import {VersionControllerBackendService} from "./versionController.service";
export * from "./versionController.serviceInterface";
export const APIS = [
  ProjectControllerBackendService,
  VariantControllerBackendService,
  VersionControllerBackendService,
];
