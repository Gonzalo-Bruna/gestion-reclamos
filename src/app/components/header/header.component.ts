import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShareDataService } from 'src/app/services/share-data/share-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isadmin:boolean = true;

  constructor(private authService: AuthService, 
    private loggedUser: ShareDataService, 
      private router:Router) { }

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

  public logout(){
    this.authService.logout();
    this.navigateTo("inicio");
  }

  public navigateTo(route: string): void{
    this.router.navigate([`/${route}`]);
  }


}
