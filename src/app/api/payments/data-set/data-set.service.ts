import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigService } from '../../../config';
import { filterParameters } from '../../../shared/utils/filter-params';
import { DataSetsResponse } from '../../fb-management/swagger-codegen/model/dataSetsResponse';
import { HttpRequestModel } from '../../../shared/model/http-request-model';
import { SearchDataSetParams } from '../../../sections/testing/components/payment-data-sets/search-data-set-params';
import { DataSet } from '../../fb-management/swagger-codegen/model/dataSet';
import { ApplyRuleOnHistoricalDataSetRequest } from '../../fb-management/swagger-codegen/model/applyRuleOnHistoricalDataSetRequest';
import { CheckedDataSet } from '../../fb-management/swagger-codegen/model/checkedDataSet';

@Injectable()
export class DataSetService {
    private readonly fbPaymentReferenceEndpoint = `${this.configService.fbManagementEndpoint}/payments-data-set`;

    constructor(private http: HttpClient, private configService: ConfigService) {}

    filterDataSets(params: SearchDataSetParams): Observable<DataSetsResponse> {
        return this.http.get<DataSetsResponse>(`${this.fbPaymentReferenceEndpoint}/data-sets/filter`, {
            params: filterParameters(params),
        });
    }

    getById(id: string): Observable<DataSet> {
        return this.http.get<DataSet>(`${this.fbPaymentReferenceEndpoint}/data-sets/${id}`);
    }

    getCheckedById(id: string): Observable<CheckedDataSet> {
        return this.http.get<DataSet>(`${this.fbPaymentReferenceEndpoint}/checked-data-sets/${id}`);
    }

    deleteDataSets(id: string): Observable<string> {
        return this.http.delete<string>(`${this.fbPaymentReferenceEndpoint}/data-sets/${id}`);
    }

    saveDataSets(dataSet: DataSet): Observable<string> {
        return this.http.post<string>(`${this.fbPaymentReferenceEndpoint}/data-sets`, dataSet, new HttpRequestModel());
    }

    applyRuleOnHistoricalDataSet(request: ApplyRuleOnHistoricalDataSetRequest): Observable<string> {
        return this.http.post<string>(
            `${this.fbPaymentReferenceEndpoint}/data-sets/applyRuleOnHistoricalDataSet`,
            request,
            new HttpRequestModel()
        );
    }
}
