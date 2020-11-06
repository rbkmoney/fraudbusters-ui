import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorHandlerService {
    constructor() {}

    handleError(error: HttpErrorResponse, snackBar: MatSnackBar): void {
        snackBar.open(`${error.status}: ${error.message}`, 'OK', {
            duration: 1500,
        });
    }

    handleStringError(error: string, snackBar: MatSnackBar): void {
        snackBar.open(error, 'OK', {
            duration: 1500,
        });
    }
}
