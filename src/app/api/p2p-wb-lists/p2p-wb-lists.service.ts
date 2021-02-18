import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../config';
import { HttpRequestModel } from '../../shared/model/http-request-model';
import { SearchListParams } from '../../shared/model/search-list-params';
import { filterParameters } from '../../shared/utils/filter-params';
import { FilterResponseWbListRecords } from '../fb-management/swagger-codegen/model/filterResponseWbListRecords';
import { P2pCountInfo } from '../fb-management/swagger-codegen/model/p2pCountInfo';
import { WbListRecords } from '../fb-management/swagger-codegen/model/wbListRecords';
import ListTypeEnum = WbListRecords.ListTypeEnum;

@Injectable()
export class P2pWbListsService {
    private readonly fbP2pListsEndpoint = `${this.configService.fbManagementEndpoint}/p2p/lists`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    deleteListRow(id: string): Observable<string> {
        return this.http.delete(`${this.fbP2pListsEndpoint}/${id}`, {
            responseType: 'text',
        });
    }

    findListRows(params: SearchListParams): Observable<FilterResponseWbListRecords> {
        return this.http.get<FilterResponseWbListRecords>(`${this.fbP2pListsEndpoint}/filter`, {
            params: filterParameters(params),
        });
    }

    getNames(listTypeSearch: ListTypeEnum): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbP2pListsEndpoint}/names`, {
            params: { listType: listTypeSearch },
        });
    }

    getAvailableListNames(): Observable<string[]> {
        return this.http.get<string[]>(`${this.fbP2pListsEndpoint}/availableListNames`);
    }

    saveListsRows(listType: ListTypeEnum, records: P2pCountInfo[]): Observable<string[]> {
        return this.http.post<string[]>(`${this.fbP2pListsEndpoint}`, { listType, records }, new HttpRequestModel());
    }
}
