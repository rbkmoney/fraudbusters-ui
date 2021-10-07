import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { merge, Subject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

import { Channel } from '../../../../api/fb-management/swagger-codegen/model/channel';
import { ChannelType } from '../../../../api/fb-management/swagger-codegen/model/channelType';
import { NotificationsService } from '../../../../api/payments/notifications';
import { progress } from '../../../operators';

@Injectable()
export class ChannelService {
    static defaultParams = {
        destination: '',
        name: '',
        type: ChannelType.TypeEnum.Mail,
    };

    private save$ = new Subject<Channel>();

    saved$ = this.save$.pipe(
        switchMap((channel) => this.notificationsService.saveChannel(channel)),
        shareReplay(1)
    );

    inProgress$ = progress(merge(this.save$), this.saved$);

    constructor(private fb: FormBuilder, private notificationsService: NotificationsService) {}

    form = this.fb.group(ChannelService.defaultParams);

    saveChannel(data: Channel) {
        this.save$.next(data);
    }
}
