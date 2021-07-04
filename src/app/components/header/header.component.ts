import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isadmin:boolean = true;

  constructor(private authService: AuthService, private loggedUser: ShareDataService) { }

  ngOnInit(): void {
  }

  public loggedIn(): boolean{
    return this.authService.loggedIn();
  }

  public isAdmin(){
    if(this.loggedIn()){
      return this.loggedUser.getUser().isAdmin;
    }
    return false;
  }

}
