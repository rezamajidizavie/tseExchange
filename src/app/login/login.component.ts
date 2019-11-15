import { Component,OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder,private loginService: LoginService) { }

  ngOnInit() {
    this.initForm();

  }
  initForm() {
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  login() {
    this.formSubmitted = true;

    if (this.form.valid) {
      let dataModel = this.form.getRawValue();
      this.loginService.loginUser(dataModel).subscribe(res => {
        console.log(res);
      })
    } else {
      // this.messageBoxService.show(
      //   `لطفا فیلد های قرمز را اصلاح نمایید.`,
      //   'خطای ثبت اطلاعات',
      //   'error'
      // );
    }
  }

}
