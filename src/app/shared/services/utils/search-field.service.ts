import { Injectable } from '@angular/core';

@Injectable()
export class SearchFieldService {
    constructor() {}

    formatField(searchField: string): string {
        return !!!searchField ? null : '%' + searchField + '%';
    }
}
