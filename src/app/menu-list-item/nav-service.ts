import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
    public appDrawer: any;

    constructor() {}

    public closeNav(): void {
        this.appDrawer.close();
    }

    public openNav(): void {
        this.appDrawer.open();
    }
}
