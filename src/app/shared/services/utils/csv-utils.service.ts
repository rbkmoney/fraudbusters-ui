import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ErrorHandlerService } from './error-handler.service';

/**
 *  @deprecated
 */
@Injectable()
export class CsvUtilsService {
    constructor(private errorHandlerService: ErrorHandlerService, private snackBar: MatSnackBar) {}

    isValidFile(item: any, type: string, sizeByte: number): boolean {
        if (item.type !== type) {
            this.errorHandlerService.handleStringError('File only csv format!', this.snackBar);
            return false;
        } else if (item.size > sizeByte) {
            this.errorHandlerService.handleStringError(
                'Cant load > ' + this.convertToMb(sizeByte) + ' file size: ' + this.convertToMb(item),
                this.snackBar
            );
            return false;
        }
        return true;
    }

    convertToMb(item: any): string {
        return Math.fround(item.size / 1024 / 1024).toFixed(2);
    }

    isValidFormatCsv(data, item, fields: string[]): boolean {
        if (Object.values(fields).every((value) => !!data[0][value])) {
            return true;
        }
        this.errorHandlerService.handleStringError('Bad format file: ' + item.name, this.snackBar);
        return false;
    }
}
