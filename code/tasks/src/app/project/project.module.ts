import { NgModule } from '@angular/core';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';
import { ProjectRoutingModule } from 'app/project/project-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { MdDialogModule } from '@angular/material';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule,
    MdDialogModule,
  ],
  declarations: [ProjectListComponent, ProjectItemComponent, NewProjectComponent, InviteComponent],
  entryComponents: [NewProjectComponent, InviteComponent],
})
export class ProjectModule { }
