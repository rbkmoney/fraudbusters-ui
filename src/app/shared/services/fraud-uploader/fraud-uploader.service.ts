import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../core/config.service';

@Injectable()
export class FraudUploaderService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

    postFile(fileToUpload: File): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return this.http.post<any>(`${this.fbManagementEndpoint}/fraud/load`, formData, {
            reportProgress: true,
            observe: 'events',
        });
    }
}
