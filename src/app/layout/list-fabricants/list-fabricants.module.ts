import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListFabricantsRoutingModule } from './list-fabricants-routing.module';
import { ListFabricantsComponent } from './list-fabricants.component';
import { PageHeaderModule,AccountFabricantDialogModule } from './../shared';
import { AccountFabricantDialogComponent } from './../shared/account-fabricant-dialog/account-fabricant-dialog.component';
import { MaterialModule } from './../material.module';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { NotificationModule,DeleteConfirmDialogModule, MessageSnackBarModule } from './../../shared';
import {DeleteConfirmDialogComponent} from './../../shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { MessageSnackBarComponent } from './../../shared/message-snack-bar/message-snack-bar.component';

import { UpdateFabriquatDialogComponent } from './update-fabriquat-dialog/update-fabriquat-dialog.component';
import { CreateFabriquantDialogComponent } from './create-fabriquant-dialog/create-fabriquant-dialog.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      ListFabricantsRoutingModule,
      PageHeaderModule,
      MaterialModule,
      NotificationModule,
      DeleteConfirmDialogModule,
      FormsModule,
      ReactiveFormsModule,
      MessageSnackBarModule,
      AccountFabricantDialogModule],
    declarations: [ListFabricantsComponent, UpdateFabriquatDialogComponent, CreateFabriquantDialogComponent],
    entryComponents: [DeleteConfirmDialogComponent,UpdateFabriquatDialogComponent, CreateFabriquantDialogComponent,MessageSnackBarComponent,AccountFabricantDialogComponent],
})
export class ListFabricantsModule {}
