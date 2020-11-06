import { UploadStatus } from '../constants/upload-status';

export class UploadFile {
    file: File;
    status: UploadStatus;
    errorMessage: string;

    constructor(file: File, status: UploadStatus, errorMessage?: string) {
        this.file = file;
        this.status = status;
        this.errorMessage = errorMessage;
    }
}
