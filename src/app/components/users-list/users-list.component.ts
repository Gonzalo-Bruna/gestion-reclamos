import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private servicioUsuarios:UserService) { 
    this.users = [];
  }

  async ngOnInit(): Promise<void> {
    this.users = await this.servicioUsuarios.getAllUsers().toPromise();
  }

}
