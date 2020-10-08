import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';

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

    public initHttpRequestWithBody(bodyParam: any) {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: bodyParam,
        };
    }
}
