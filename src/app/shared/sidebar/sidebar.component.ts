import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import { fromEvent } from 'rxjs';
//Models
import { Menu } from 'src/app/models/menu.model';

//Services
import { InstructorsService } from 'src/app/services/instructors.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuList: Menu;
  activeMenu: boolean;
  currentRoute: string;

  constructor(
    private router: Router,
    private menu: InstructorsService
  ) { }

  ngOnInit(): void {
    this.getCurrentRoute();
  }

  getCurrentRoute() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        this.getMenu();
      }
    })
  }

  getMenu() {
    this.menuList = this.menu.getMenu()
    .find( data => data.url == this.currentRoute.split('/')[1]);
    this.menuList.isActive = this.currentRoute.split('/').length > 2 ? false: true;
  }

}
