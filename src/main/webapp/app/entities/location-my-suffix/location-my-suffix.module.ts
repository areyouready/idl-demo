import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JdlSharedModule } from '../../shared';
import {
    LocationMySuffixService,
    LocationMySuffixPopupService,
    LocationMySuffixComponent,
    LocationMySuffixDetailComponent,
    LocationMySuffixDialogComponent,
    LocationMySuffixPopupComponent,
    LocationMySuffixDeletePopupComponent,
    LocationMySuffixDeleteDialogComponent,
    locationRoute,
    locationPopupRoute,
} from './';

const ENTITY_STATES = [
    ...locationRoute,
    ...locationPopupRoute,
];

@NgModule({
    imports: [
        JdlSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        LocationMySuffixComponent,
        LocationMySuffixDetailComponent,
        LocationMySuffixDialogComponent,
        LocationMySuffixDeleteDialogComponent,
        LocationMySuffixPopupComponent,
        LocationMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        LocationMySuffixComponent,
        LocationMySuffixDialogComponent,
        LocationMySuffixPopupComponent,
        LocationMySuffixDeleteDialogComponent,
        LocationMySuffixDeletePopupComponent,
    ],
    providers: [
        LocationMySuffixService,
        LocationMySuffixPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JdlLocationMySuffixModule {}
