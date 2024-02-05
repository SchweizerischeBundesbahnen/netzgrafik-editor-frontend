import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Resource} from '../../models/resource.model';
import {ResourceDto} from '../../data-structures/business.data.structures';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  // Description of observable data service: https://coryrylan.com/blog/angular-observable-data-services
  resourceSubject = new BehaviorSubject<Resource[]>([]);
  readonly resourceObservable = this.resourceSubject.asObservable();
  resourceStore: { resources: Resource[] } = {resources: []}; // store the data in memory

  setResourceData(resourceDto: ResourceDto[]) {
    this.resourceStore.resources = resourceDto.map(trainrunDto => new Resource(trainrunDto));
  }

  getResource(resourceId: number): Resource {
    return this.resourceStore.resources.find((res: Resource) => res.getId() === resourceId);
  }

  changeCapacity(resourceId: number, capacity: number) {
    this.resourceStore.resources.find(res => res.getId() === resourceId).setCapacity(capacity);
    this.resourceUpdated();
  }

  createAndGetResource(): Resource {
    const resource = new Resource();
    this.resourceStore.resources.push(resource);
    this.resourceUpdated();
    return resource;
  }

  resourceUpdated() {
    this.resourceSubject.next(Object.assign({}, this.resourceStore).resources);
  }

  getDtos() {
    return this.resourceStore.resources.map(resource => resource.getDto());
  }
}
