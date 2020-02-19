import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];

    this.user = this.userService.getUserInfo(+userId);
    this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUserInfo(+params['id']);
      }
    );
  }




}
