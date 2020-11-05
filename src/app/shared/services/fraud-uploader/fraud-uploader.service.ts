import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ParamsUtilService } from '../utils/params-util.service';
import { ConfigService } from '../../../core/config.service';

@Injectable({
    providedIn: 'root',
})
export class FraudUploaderService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
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
