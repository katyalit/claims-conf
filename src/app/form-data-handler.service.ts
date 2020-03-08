import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormDataHandlerService {

  checkSave(formKey: string) {
    const data = localStorage.getItem(formKey);
    if (data){
      return JSON.parse(data);
    }
    return null;
  }
 a = `{ "firstName": "Avishai", "lastName": "Ozeri", "address": "Uziel 14" etc.. }`

  save(formKey:string, formGroup: FormGroup): void{

    const formData = {};
    Object.keys(formGroup.controls).forEach(key => {
      formData[key] = formGroup.controls[key].value;
    });
    localStorage.setItem(formKey, JSON.stringify(formData));
  }
}
