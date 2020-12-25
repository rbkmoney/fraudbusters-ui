import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ParamsUtilService {
    constructor() {}

    public filterParameters(params: any): HttpParams {
        let searchParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach((key) => {
                searchParams =
                    params[key] !== undefined && params[key] !== null
                        ? searchParams.set(key, params[key])
                        : searchParams;
            });
        }
        return searchParams;
    }
}
