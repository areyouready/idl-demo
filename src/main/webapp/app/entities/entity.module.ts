import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JdlDepartmentModule } from './department/department.module';
import { JdlJobHistoryModule } from './job-history/job-history.module';
import { JdlJobModule } from './job/job.module';
import { JdlEmployeeModule } from './employee/employee.module';
import { JdlLocationModule } from './location/location.module';
import { JdlTaskModule } from './task/task.module';
import { JdlCountryModule } from './country/country.module';
import { JdlRegionModule } from './region/region.module';
import { JdlDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JdlJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
import { JdlJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JdlEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JdlLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JdlTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JdlCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JdlRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JdlBookModule } from './book/book.module';
import { JdlAuthorModule } from './author/author.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JdlDepartmentModule,
        JdlJobHistoryModule,
        JdlJobModule,
        JdlEmployeeModule,
        JdlLocationModule,
        JdlTaskModule,
        JdlCountryModule,
        JdlRegionModule,
        JdlDepartmentMySuffixModule,
        JdlJobHistoryMySuffixModule,
        JdlJobMySuffixModule,
        JdlEmployeeMySuffixModule,
        JdlLocationMySuffixModule,
        JdlTaskMySuffixModule,
        JdlCountryMySuffixModule,
        JdlRegionMySuffixModule,
        JdlBookModule,
        JdlAuthorModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JdlEntityModule {}
