import { Component, ViewChild, AfterViewInit, HostBinding, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/loader/loader.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements AfterViewInit, OnInit {
  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  constructor(private router: Router, private observer: BreakpointObserver, private overlay: OverlayContainer,public loaderService: LoaderService) {}
   ngAfterViewInit() {
    setTimeout(() => {
      this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
    });
  }
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';

  darkClassName = 'theme-dark';
  lightClassName = 'theme-light';

  ngOnInit() {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.className = darkMode ? this.darkClassName : this.lightClassName;
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(this.darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClassName);
      }
    });

    this.loaderService.isLoading.next(true);
    setTimeout(() => {
      this.loaderService.isLoading.next(false);
    }, 3000);
  
  }

  logOut(){
    this.loaderService.isLoading.next(true);
    setTimeout(() => {
      this.router.navigate(['/login']);
      this.loaderService.isLoading.next(false);
    }, 3000);
  }
}
