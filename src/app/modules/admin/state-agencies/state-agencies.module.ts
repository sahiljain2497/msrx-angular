import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateAgenciesComponent } from './state-agencies.component';

import { Route, RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
const stateAgencieRoute: Route[] = [
    {
        path: '',
        component: StateAgenciesComponent,
    },
];
@NgModule({
    declarations: [StateAgenciesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(stateAgencieRoute),
        MatPaginatorModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        MatTableModule,
        MatBadgeModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatSidenavModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatButtonToggleModule,
    ],
})
export class StateAgenciesModule {}
