import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleAdsRoutingModule } from './google-ads-routing.module';
import { CreateDisplayComponent } from './components/create-display/create-display.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
    declarations: [
        CreateDisplayComponent
    ],
    imports: [
        CommonModule,
        CoreModule,
        GoogleAdsRoutingModule,
    ]
})
export class GoogleAdsModule { }
