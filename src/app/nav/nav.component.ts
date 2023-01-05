import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public accountService: AccountService, private router : Router, private toastr: ToastrService) {}
  model: any = {};

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => {
        this.router.navigateByUrl('/members'),
        this.toastr.success('logged in')
      },
      error: () => this.toastr.error('log in failed'),
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')

  }

  ngOnDestroy() {}
}
