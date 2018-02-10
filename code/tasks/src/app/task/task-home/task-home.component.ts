import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from 'app/task/new-task/new-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一:去里奥阿查杀一只鳄鱼做成皮鞋',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: '周二',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务二:去下雨的马孔多买一张飞毯',
          completed: false,
          priority: 2,
          owner: {
            id: 2,
            name: '王五',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务三:去布恩迪亚家的海棠花长廊听一首自动钢琴曲',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '周二',
            avatar: 'avatars:svg-9'
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务四:去风之谷看一场娜乌西卡的飞行表演',
          completed: false,
          priority: 1,
          owner: {
            id: 2,
            name: '王五',
            avatar: 'avatars:svg-8'
          },
          dueDate: new Date(),
        }
      ]
    }

  ]


  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }

}
