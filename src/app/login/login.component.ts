import { Component,OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { LoginService } from './login.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder,private loginService: LoginService,private router: Router) { }

  ngOnInit() {
    this.initForm();
    const headers = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTU3MzkyMDYyOH0.CbQ-f8590CTe9580RrM--z3bj_x0Xh3XJPZBpbl5zJCJgxVg6z5BZn841JONL2F_3wcH0poMx0VR41e_DmRrdA'
    const _headers = new HttpHeaders().set('Authorization',headers);
    this.loginService.getCustomer(_headers).subscribe(res => {
      console.log(res);

    });
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
      this.loginService.loginUser(dataModel).subscribe((res: any) => {
        localStorage.setItem("user-token",res.id_token)
        this.router.navigate(['/intro']);
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
