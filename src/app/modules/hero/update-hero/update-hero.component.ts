import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateHeroComponent implements OnInit {

  formValues: FormGroup;

  submitted: boolean

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private heroService: HeroService,
              private changeDetectorRef: ChangeDetectorRef,
              private router: Router) {
    this.formValues = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(20)
      ]],
      gender: ['0', Validators.min(0)],
      age: ['', Validators.min(0)],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^1\d{10}$/)
      ]],
      email: ['', Validators.email],
      job: ['', Validators.required],
      role: ['user', Validators.required],
      brief: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100)
      ]]
    });
    const id = this.route.snapshot.paramMap.get('id')
    this.heroService.hero(id).subscribe(value => {
      this.formValues.patchValue(value)
      this.changeDetectorRef.markForCheck()
    })
  }

  ngOnInit(): void {}
  get formControls() {
    const controls = {
      name: this.formValues.get('name'),
      age: this.formValues.get('age'),
      phone: this.formValues.get('phone'),
      email: this.formValues.get('email'),
      job: this.formValues.get('job'),
      role: this.formValues.get('role'),
      brief: this.formValues.get('brief')
    }
    return {
      name: {
        control: controls.name,
        showErr: controls.name.touched && controls.name.invalid,
        errors: controls.name.errors
      },
      age: {
        control: controls.age,
        showErr: controls.age.touched && controls.age.invalid,
        errors: controls.age.errors
      },
      phone: {
        control: controls.phone,
        showErr: controls.phone.touched && controls.phone.invalid,
        errors: controls.phone.errors
      },
      email: {
        control: controls.email,
        showErr: controls.email.touched && controls.email.invalid,
        errors: controls.email.errors
      },
      job: {
        control: controls.job,
        showErr: controls.job.touched && controls.job.invalid,
        errors: controls.job.errors
      },
      role: {
        control: controls.role,
        showErr: controls.role.touched && controls.role.invalid,
        errors: controls.role.errors
      },
      brief: {
        control: controls.brief,
        showErr: controls.brief.touched && controls.brief.invalid,
        errors: controls.brief.errors
      },
    };
  }

  onSubmit() {
    console.log(this.formValues.value);
    this.heroService.updateHero(this.formValues.value, this.route.snapshot.paramMap.get('id')).subscribe(() => {
      this.submitted = true
      alert('更新成功')
      this.router.navigate(['/home/hero/list']).then()
    })
  }

  cancel() {

  }

  canDeactivate(): boolean {
    if (this.formValues.dirty && !this.submitted) {
      return confirm('表单还未保存，确定要离开？')
    }
    return true
  }
}
