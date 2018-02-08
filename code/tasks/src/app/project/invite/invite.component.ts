import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items = [
    {
      id: 1,
      name: 'wangfei',
    },
    {
      id: 2,
      name: 'wanger',
    },
    {
      id: 3,
      name: 'zhouer',
    }

  ];

  constructor() { }

  ngOnInit() {
  }

  displayUser(user: {id: string; name: string}) {
    return user ? user.name : '';
  }

}
