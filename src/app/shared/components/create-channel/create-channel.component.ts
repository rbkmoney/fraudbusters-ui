import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Channel } from '../../../api/fb-management/swagger-codegen/model/channel';
import { LAYOUT_GAP_L, LAYOUT_GAP_M } from '../../../tokens';
import { ErrorHandlerService } from '../../services/utils/error-handler.service';
import { ChannelService } from './services/channel.service';
import { ChannelType } from '../../../api/fb-management/swagger-codegen/model/channelType';

@Component({
    selector: 'fb-create-channel',
    templateUrl: './create-channel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ChannelService],
})
export class CreateChannelComponent implements OnInit {
    @Input() channel: Channel;

    form = this.channelService.form;

    channelTypes = Object.values(ChannelType.TypeEnum);

    saved$ = this.channelService.saved$;
    inProgress$ = this.channelService.inProgress$;

    constructor(
        private router: Router,
        private channelService: ChannelService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar,
        @Inject(LAYOUT_GAP_L) public layoutGapL: string,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    ngOnInit() {
        if (this.channel) {
            this.form.setValue({
                name: this.channel.name,
                type: this.channel.type,
                destination: this.channel.destination,
            });
            this.form.get('name').disable();
        }
        this.saved$.subscribe(
            (channel) => {
                if (this.channel) {
                    this.snackBar.open(`Saved success: ${channel.id}`, 'OK', {
                        duration: 3000,
                    });
                } else {
                    this.snackBar.open(`Notification has been created`, 'OK', {
                        duration: 3000,
                    });
                    this.back();
                }
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    saveChannel() {
        this.channelService.saveChannel({
            destination: this.form.getRawValue().destination,
            name: this.form.getRawValue().name,
            type: this.form.getRawValue().type,
            createdAt: new Date(Date.now()),
        });
    }

    back() {
        this.router.navigate([`../notifications/channels`]);
    }
}
