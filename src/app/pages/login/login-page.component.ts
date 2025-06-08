import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AtSign, Lock, LucideAngularModule, Mail, UserRound } from 'lucide-angular';


@Component({
  selector: 'page-login',
  imports: [
    LucideAngularModule,
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
})
export class PageLogin {

  readonly AtSign = AtSign;
  readonly Lock = Lock;
  readonly Mail = Mail;
  readonly UserRound = UserRound;

}
