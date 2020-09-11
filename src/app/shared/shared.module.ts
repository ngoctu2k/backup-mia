// Angular module
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Angular material
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
// component
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LoaderComponent } from './components/loader/loader.component';
import { UserComponent } from './components/user/user.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SharedTableComponent } from './components/shared-table/shared-table.component';

// pipe
import { CustomPipeModule } from './pipe/pipe.module';
import { NoStraightBrick } from './pipe/pipe.custom';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [MenuBarComponent, HeaderComponent, NotificationsComponent, LoaderComponent, UserComponent, DialogComponent, SharedTableComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    MatDividerModule,
    MatChipsModule,

  ],

  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MenuBarComponent,
    HeaderComponent,
    MatSidenavModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatRadioModule,
    MatSelectModule,
    LoaderComponent,
    DialogComponent,
    SharedTableComponent,
    NotificationsComponent,
    UserComponent,
    BreadcrumbComponent,
    MatDividerModule,
    MatChipsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]

})
export class SharedModule { }
