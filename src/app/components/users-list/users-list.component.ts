import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private servicioUsuarios:UserService, private router: Router) { 
    this.users = [];
  }

  async ngOnInit(): Promise<void> {
    this.servicioUsuarios.getAllUsers().subscribe( res => {
      this.users = res;
    },
    err => {
      if(err instanceof HttpErrorResponse){
        if(err.status === 401){
          this.router.navigate(['/login']);
        }
      }
    }
    );
    this.users = await this.servicioUsuarios.getAllUsers().toPromise();
  }

}
