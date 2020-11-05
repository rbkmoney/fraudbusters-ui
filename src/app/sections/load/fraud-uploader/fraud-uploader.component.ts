import { Component, OnInit } from '@angular/core';
import { FraudUploaderService } from '../../../shared/services/fraud-uploader/fraud-uploader.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-fraud-uploader',
    templateUrl: './fraud-uploader.component.html',
    styleUrls: ['./fraud-uploader.component.scss'],
})
export class FraudUploaderComponent {
    files: any[] = [];

    constructor(
        private fraudUploadService: FraudUploaderService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {}

    uploadFileToActivity(): void {
        for (const item of this.files) {
            this.uploadFilesProgress(this.files.indexOf(item));
            this.fraudUploadService.postFile(item).subscribe(
                (response) => {
                    this.uploadFilesProgress(0, true);
                },
                (error: HttpErrorResponse) => {
                    this.errorHandlerService.handleError(error, this.snackBar);
                }
            );
        }
    }

    onFileDropped($event): void {
        this.prepareFilesList($event);
    }

    fileBrowseHandler(files): void {
        this.prepareFilesList(files);
    }

    prepareFilesList(files: Array<any>): void {
        for (const item of files) {
            item.progress = 0;
            this.files.push(item);
        }
    }

    uploadFilesProgress(index: number, finished: boolean = false): void {
        setTimeout(() => {
            const progressInterval = setInterval(() => {
                if (this.files[index].progress >= 100 || finished) {
                    clearInterval(progressInterval);
                    this.files[index].progress = 100;
                } else {
                    this.files[index].progress += 5;
                }
            }, 300);
        }, 300);
    }

    deleteFile(index: number): void {
        this.files.splice(index, 1);
    }

    formatBytes(bytes, decimals): string {
        if (bytes === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals || 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}
