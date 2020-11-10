import { UploadStatus } from '../constants/upload-status';

export interface UploadFile {
    file: File;
    status: UploadStatus;
    errorMessage?: string;
}
