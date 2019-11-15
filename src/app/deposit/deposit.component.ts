import { Component,OnInit } from '@angular/core';
import { DepositService } from './deposit.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
  providers: [DepositService]
})
export class DepositComponent implements OnInit {
  form: FormGroup;
  formSubmitted = false;
  constructor(private fb: FormBuilder,private depositService: DepositService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      asset: ['',Validators.required],
      amount: ['',Validators.required],
    });
  }

  deposit() {
    this.formSubmitted = true;

    if (this.form.valid) {
      let dataModel = this.form.getRawValue();
      this.depositService.deposit(dataModel).subscribe(res => {
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
