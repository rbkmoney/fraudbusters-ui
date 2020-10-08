import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpRequestModel } from '../template/model/HttpRequestModel';

@Injectable({
    providedIn: 'root',
})
export class ParamsUtilService {
    constructor() {}

    public filterParameters(params: any): HttpParams {
        let searchParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach((key) => {
                searchParams = params[key] ? searchParams.set(key, params[key]) : searchParams;
            });
        }
        return searchParams;
    }

    public initHttpRequestWithBody(bodyParam: any): HttpRequestModel {
        const httpRequestModel = new HttpRequestModel();
        httpRequestModel.body = bodyParam;
        return httpRequestModel;
    }
}
