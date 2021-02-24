import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileEditorComponent implements OnInit {

  // 创建表单组, 统一创建表单FormControl
  // profile = new FormGroup({
  //   firstname: this.formBuilder.control(''),
  //   lastname: new FormControl(''),
  //   sex: new FormControl(''),
  //   // 表单嵌套
  //   address: new FormGroup({
  //     province: new FormControl(''),
  //     city: new FormControl(''),
  //     area: new FormControl('')
  //   }),
  // })

  profile: FormGroup

  constructor(private formBuilder: FormBuilder) {
    // 使用FormBuilder简化FormGroup的构建
    this.profile = this.formBuilder.group({
      firstname: '',
      lastname: '',
      sex: '',
      address: this.formBuilder.group({
        province: '',
        city: '',
        area: ''
      }),
      // FormArray适合用于动态的添加没有指定FormControlName的表单项
      aliases: this.formBuilder.array([])
    })
  }

  ngOnInit(): void {
  }

  get aliases() {
    return this.profile.get('aliases') as FormArray
  }

  addAliases() {
    this.aliases.push(this.formBuilder.control(''))
  }

  submit() {
    console.log(this.profile.value);
    console.log(this.profile.get('lastname').value);
  }

  patchValue() {
    // 批量设置表单内的值, 不同于setValue(setValue必须将表单内的值全部设置才行否则会报错, patchValue不需要全部设置表单内的值仅设置部分即可)
    this.profile.patchValue({
      firstname: 'Jack',
      lastname: 'Rose'
    })
  }
}
