import { Component,OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  registerDone = false;
  constructor(private fb: FormBuilder,private registerService: RegisterService) { }

  ngOnInit() {
    this.initForm();

  }
  initForm() {
    this.form = this.fb.group({
      email: ['',Validators.required],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      login: ['',Validators.required],
      password: ['',Validators.required],
    });
  }

  register() {
    this.formSubmitted = true;

    if (this.form.valid) {
      let dataModel = this.form.getRawValue();
      this.registerService.registerUser(dataModel).subscribe(res => {
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
