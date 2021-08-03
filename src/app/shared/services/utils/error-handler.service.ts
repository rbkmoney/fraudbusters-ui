import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorHandlerService {
    constructor() {}

    handleError(error: HttpErrorResponse, snackBar: MatSnackBar): void {
        snackBar.open(`${error.status}: ${error.message}`, 'ERROR', {
            duration: 1500,
        });
    }

    handleStringError(error: string, snackBar: MatSnackBar): void {
        snackBar.open(error, 'ERROR', {
            duration: 1500,
        });
    }
}
