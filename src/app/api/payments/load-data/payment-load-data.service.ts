import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';

@Injectable()
export class PaymentLoadDataService {
    private readonly fbPaymentReferenceEndpoint = `${this.configService.fbManagementEndpoint}/payments-load-data`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    postFile(fileToUpload: File): Observable<any> {
        const formData: FormData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        return this.http.post<any>(`${this.fbPaymentReferenceEndpoint}/fraud-payments`, formData, {
            reportProgress: true,
            observe: 'events',
        });
    }
}
