export class CountInfo {
    count: number;
    startCountTime: string;
    endCountTime: string;

    constructor(count: number, startCountTime: string, endCountTime: string) {
        this.count = count;
        this.startCountTime = startCountTime;
        this.endCountTime = endCountTime;
    }
}
