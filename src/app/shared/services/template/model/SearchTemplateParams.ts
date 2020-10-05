import {SortOrder} from '../../../constants/sort-order';

export class SearchTemplateParams {
  id?: string;
  lastId?: string;
  size?: number;
  sortOrder?: SortOrder;

  constructor(id: string, lastId: string, size: number, sortOrder: SortOrder) {
    this.id = id;
    this.lastId = lastId;
    this.size = size;
    this.sortOrder = sortOrder;
  }
}
