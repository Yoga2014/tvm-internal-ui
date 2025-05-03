import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private formData: any = {};

  setFormData(step: string, data: any) {
    this.formData[step] = data;
  }

  getFormData() {
    return this.formData;
  }

  clearFormData() {
    this.formData = {};
  }
}
