import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SearchFieldService {
    constructor() {}

    formatField(searchField: string): string {
        return !!!searchField ? '' : '%' + searchField + '%';
    }
}
