import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { Group } from '../../../sections/groups/model/group';

@Injectable()
export class PaymentHistoricalDataService {
    private readonly fbPaymentReferenceEndpoint = `${this.configService.fbManagementEndpoint}/payments/group`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    findGroups(filterId: string): Observable<Group[]> {
        return this.http.get<Group[]>(`${this.fbPaymentReferenceEndpoint}/filter/`, {
            params: filterId ? { id: filterId } : {},
        });
    }

    getGroupById(id: string): Observable<Group> {
        return this.http.get<Group>(`${this.fbPaymentReferenceEndpoint}/${id}`);
    }

    deleteGroup(id: string): Observable<string> {
        return this.http.delete(`${this.fbPaymentReferenceEndpoint}/${id}`, { responseType: 'text' });
    }

    saveGroup(group: Group): Observable<string> {
        return this.http.post(`${this.fbPaymentReferenceEndpoint}`, group, { responseType: 'text' });
    }
}
