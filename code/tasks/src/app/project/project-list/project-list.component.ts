import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewProjectComponent } from 'app/project/new-project/new-project.component';
import { InviteComponent } from 'app/project/invite/invite.component';
import { ConfirmDialogComponent } from 'app/shared/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name": "企业协作项目",
      "desc": "企业内部的一个协同项目",
      "coverImg": "assets/img/covers/0.jpg",
    },
    {
      "name": "企业协作项目",
      "desc": "企业内部的一个协同项目",
      "coverImg": "assets/img/covers/1.jpg",
    }
  ];
  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent,{data:{title:'新增项目'}});
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  launchEditDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {data: {title: '编辑项目'}});
  }

  launchDelDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: '删除项目',content: '是否删除这个项目？'}});
  }

}
