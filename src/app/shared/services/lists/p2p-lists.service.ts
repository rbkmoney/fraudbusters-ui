import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/config.service';
import { Observable } from 'rxjs';
import { ParamsUtilService } from '../utils/params-util.service';
import { HttpRequestModel } from '../../model/http-request-model';
import { IListsService } from './ilists.service';
import { SearchListsParams } from './model/search-lists-params';
import { ListsFilterResponse } from './model/lists-filter-response';
import { ListType } from '../../constants/list-type';
import { ListRecord } from './model/list-record';
import { InsertListRequest } from './model/insert-list-request';
import { CountInfoListRecord } from './model/count-info-list-record';

@Injectable({
    providedIn: 'root',
})
export class P2pListsService implements IListsService {
    private readonly fbManagementEndpoint: string;

    constructor(private http: HttpClient, private paramsUtilService: ParamsUtilService, configService: ConfigService) {
        this.fbManagementEndpoint = configService.config.fbManagementEndpoint;
    }

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

    saveListsRows(listType: ListType, records: CountInfoListRecord[]): Observable<string[]> {
        return this.http.post<string[]>(
            `${this.fbManagementEndpoint}/p2p/lists`,
            new InsertListRequest(listType, records),
            new HttpRequestModel()
        );
    }
}
