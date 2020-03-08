import { Component, OnInit } from '@angular/core';
import MultiPage from '../multi-page/multi-page';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormDataHandlerService } from '../form-data-handler.service';

@Component({
  selector: 'multi-page-form',
  templateUrl: './multi-page-form.component.html',
  styleUrls: ['./multi-page-form.component.css', '../bootstrap.css']
})
export class MultiPageFormComponent extends MultiPage implements OnInit {

  kinderForm: FormGroup;
  tPattern=/(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/g;
  mailPattern= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;

  formSaveKey: string = 'ClaimsConKindertransportFormSave';

  constructor(private formBuilder: FormBuilder, private formDataHandler: FormDataHandlerService) {
    super();
  }


  ngOnInit(): void {
    const savedData = this.formDataHandler.checkSave(this.formSaveKey);
    const s = (key) => {
      return savedData && savedData[key]? savedData[key]: '';
    }
    this.kinderForm = this.formBuilder.group({
      familyName: [s('familyName'), [Validators.required, Validators.minLength(2)]],
      firstName: [s('firstName'), Validators.required],
      middleName: s('middleName'),

      anotherFamilyName: s('anotherFamilyName'),
      anotherFirstName: s('anotherFirstName'),
      anotherMiddleName: s('anotherMiddleName'),
      
      gender: [s('gender'), Validators.required],

      streetApt: [s('streetApt'), Validators.required],
      city: [s('city'), Validators.required],
      state: s('state'),
      country: [s('country'), Validators.required],
      postalCode:[s('postalCode'), Validators.required],
      telephone: [s('telephone'),[Validators.required, Validators.pattern(this.tPattern)]],
      email: [s('email'),[Validators.required, Validators.pattern(this.mailPattern)]],

      language: s('language'),

      contactFamilyName: s('contactFamilyName'),
      contactFirstName: s('contactFirstName'),
      contactRelationship: s('contactRelationship'),
      contactAddress: s('contactAddress'),
      contactCity: s('contactCity'),
      contactState: s('contactState'),
      contactCountry: s('contactCountry'),
      contactPostalCode: s('contactPostalCode'),
      contactTelephone: s('contactTelephone'),
      contactEmail: s('contactEmail'),

      bornCity: s('bornCity'),
      bornRegion: s('bornRegion'),
      bornCountry: s('bornCountry'),

      bornDay: s('bornDay'),
      bornMonth: s('bornMonth'),
      bornYear: s('bornYear'),

      anotherBDay: s('anotherBDay'),
      anotherBM:s('anotherBM'),
      anotherBY: s('anotherBY'),

      howPersecuted: s('howPersecuted'),

      countrypriorNine: s('countrypriorNine'),

      countryAftherNine: s('countryAftherNine'),
      aftherNineYear: s('aftherNineYear'),

      kinderLeaveMonth: s('kinderLeaveMonth'),
      kinderLeaveYear: s('kinderLeaveYear'),
      kinderLeaveFrom: s('kinderLeaveFrom'),
      mOrFAccompany: s('mOrFAccompany'),
      sAccompany: s('sAccompany'),

    });

    this.kinderForm.valueChanges.subscribe( () => this.formDataHandler.save(this.formSaveKey, this.kinderForm));
  }

  notValid(controlName: string): boolean {
    const formControl = this.kinderForm.get(controlName) as FormControl;
    return !formControl.valid && formControl.touched;
  }

  notValidNoTouchedTest(controlName: string): boolean {
    const formControl = this.kinderForm.get(controlName) as FormControl;
    return !formControl.valid;
  }

  touched(controlName: string): boolean {
    const formControl = this.kinderForm.get(controlName) as FormControl;
    return formControl.touched;
  }

  determineStyle(controlName: string): string {
    const formControl = this.kinderForm.get(controlName) as FormControl;
    return '' + (!formControl.valid && formControl.touched? 'control-invalid' :formControl.touched && 'control-valid');
  }
  log(e) {
    console.log(e);
  }

  onSubmit(form: FormGroup): void {
    this.kinderForm.markAllAsTouched();
  }
}
