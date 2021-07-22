import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { UploadStatus } from './constants/upload-status';
import { UploadFile } from './model/upload-file';
import { PaymentLoadDataService } from '../../../api/payments/load-data';

@Component({
    templateUrl: './fraud-uploader.component.html',
    styleUrls: ['./fraud-uploader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FraudUploaderComponent {
    files: any[] = [];
    uploadFiles = new Map<string, UploadFile>();

    constructor(
        private fraudUploadService: PaymentLoadDataService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {}

    uploadFileToActivity(): void {
        if (this.files.length === 0) {
            this.errorHandlerService.handleStringError('File for upload is not find!', this.snackBar);
        }
        this.files
            .filter((file) => !this.uploadFiles.has(file.name))
            .forEach((item) => {
                this.startProgress(this.files.indexOf(item), this.calcProgressCoef(item.size));
                this.fraudUploadService.postFile(item).subscribe(
                    (response) => {
                        this.finishProgress(this.files.indexOf(item), UploadStatus.success);
                        this.uploadFiles.set(item.name, { file: item, status: UploadStatus.success });
                    },
                    (error: HttpErrorResponse) => {
                        this.finishProgress(this.files.indexOf(item), UploadStatus.error);
                        this.uploadFiles.set(item.name, {
                            file: item,
                            status: UploadStatus.error,
                            errorMessage: error.message,
                        });
                    }
                );
            });
    }

    onFileDropped($event): void {
        this.prepareFilesList($event);
    }

    fileBrowseHandler(files): void {
        this.prepareFilesList(files);
    }

    prepareFilesList(files: Array<any>): void {
        for (const item of files) {
            if (item.type !== 'text/csv') {
                this.errorHandlerService.handleStringError('File only csv format!', this.snackBar);
            } else {
                item.progress = 0;
                this.files.push(item);
            }
        }
    }

    startProgress(index: number, loadCoef: number): void {
        setTimeout(() => {
            const progressInterval = setInterval(() => {
                if (this.files[index].progress >= 100) {
                    clearInterval(progressInterval);
                } else {
                    this.files[index].progress += 5 * loadCoef;
                }
            }, 300);
        }, 300);
    }

    finishProgress(index: number, status: UploadStatus): void {
        this.files[index].progress = 100;
        this.files[index].status = status;
    }

    deleteFile(index: number): void {
        this.uploadFiles.delete(this.files[index].name);
        this.files.splice(index, 1);
    }

    formatBytes(bytes: number, decimals?: number): string {
        if (bytes === 0) {
            return '0 Bytes';
        }
        const k = 1024;
        const dm = decimals <= 0 ? 0 : decimals || 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    calcProgressCoef(bytes): number {
        if (bytes === 0) {
            return 20;
        }
        const k = 1024;
        return k / bytes;
    }

    isLoadError(name: string): boolean {
        return !!this.uploadFiles.get(name) && this.uploadFiles.get(name).status === UploadStatus.error;
    }

    isLoadSuccess(name: string): boolean {
        return !!this.uploadFiles.get(name) && this.uploadFiles.get(name).status === UploadStatus.success;
    }
}
