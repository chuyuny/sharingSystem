import {FormControl, FormGroup} from '@angular/forms';
import { Observable, of } from 'rxjs';
// import 'rxjs/add/observable/of';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

// 手机号码校验
export function mobileVlidator(control: FormControl): any {
  const  myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if (!control.value) {
    return null;
  }
  const valid = myreg.test(control.value);

  return valid ? null : {mobile: true};
}

// 手机号码异步校验
export function mobileAsyncVlidator(control: FormControl): any {
  const  myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  if (!control.value) {
    return null;
  }
  const valid = myreg.test(control.value);
  return Observable.of(valid ? null : {mobile: true}).delay(5000);
}

// 确认密码验证
export function equalsValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const pConfirm: FormControl = group.get('pConfirm') as FormControl;
  const valid: boolean = (password.value === pConfirm.value);
  return valid ? null : {equals: true};
}
