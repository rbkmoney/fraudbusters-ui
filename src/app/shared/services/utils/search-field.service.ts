import { Injectable } from '@angular/core';

@Injectable()
export class SearchFieldService {
    constructor() {}

    formatField(searchField: string): string {
        return !!!searchField ? null : '%' + searchField + '%';
    }

    todayFromTime(): Date {
        const now = new Date();
        now.setDate(now.getDate() - 1);
        now.setHours(0, 0, 0, 0);
        return now;
    }
}
