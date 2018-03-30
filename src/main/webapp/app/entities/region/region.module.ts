import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JdlSharedModule } from '../../shared';
import {
    RegionService,
    RegionPopupService,
    RegionComponent,
    RegionDetailComponent,
    RegionDialogComponent,
    RegionPopupComponent,
    RegionDeletePopupComponent,
    RegionDeleteDialogComponent,
    regionRoute,
    regionPopupRoute,
} from './';

const ENTITY_STATES = [
    ...regionRoute,
    ...regionPopupRoute,
];

@NgModule({
    imports: [
        JdlSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        RegionComponent,
        RegionDetailComponent,
        RegionDialogComponent,
        RegionDeleteDialogComponent,
        RegionPopupComponent,
        RegionDeletePopupComponent,
    ],
    entryComponents: [
        RegionComponent,
        RegionDialogComponent,
        RegionPopupComponent,
        RegionDeleteDialogComponent,
        RegionDeletePopupComponent,
    ],
    providers: [
        RegionService,
        RegionPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JdlRegionModule {}
