import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { ListType } from '../../constants/list-type';
import { HttpRequestModel } from '../../model/http-request-model';
import { ParamsUtilService } from '../utils/params-util.service';
import { IListsService } from './ilists.service';
import { CountInfoListRecord } from './model/count-info-list-record';
import { InsertListRequest } from './model/insert-list-request';
import { ListsFilterResponse } from './model/lists-filter-response';
import { SearchListsParams } from './model/search-lists-params';

@Injectable()
export class P2pListsService implements IListsService {
    private readonly fbManagementEndpoint = this.configService.fbManagementEndpoint;

    constructor(
        private http: HttpClient,
        private paramsUtilService: ParamsUtilService,
        private configService: ConfigService
    ) {}

    deleteListRow(id: string): Observable<string> {
        return this.http.delete(`${this.fbManagementEndpoint}/p2p/lists/${id}`, {
            responseType: 'text',
        });
    }

    findListRows(params: SearchListsParams): Observable<ListsFilterResponse> {
        return this.http.get<ListsFilterResponse>(`${this.fbManagementEndpoint}/p2p/lists/filter`, {
            params: this.paramsUtilService.filterParameters(params),
        });
    }

    getNames(listTypeSearch: ListType): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbManagementEndpoint}/p2p/lists/names`, {
            headers: {
                'Content-Type': 'application/json',
            },
            params: { listType: listTypeSearch },
        });
    }

    getAvailableListNames(): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbManagementEndpoint}/p2p/lists/availableListNames`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    saveListsRows(listType: ListType, records: CountInfoListRecord[]): Observable<string[]> {
        return this.http.post<string[]>(
            `${this.fbManagementEndpoint}/p2p/lists`,
            new InsertListRequest(listType, records),
            new HttpRequestModel()
        );
    }
}
