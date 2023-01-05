import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {}
  constructor(private accountService : AccountService, private toastr: ToastrService) {}

register(){
  this.accountService.register(this.model).subscribe({
    next: () => {
      this.toastr.success(this.model.username + ' created')
      this.cancel();
    }, 
    error: () => this.toastr.error('Registration failed')
  })
}

cancel(){
  this.cancelRegister.emit(false);
}
}
