import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-provider',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './service-provider.component.html',
  styleUrl: './service-provider.component.css',
})
export class ServiceProviderComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  selectedServices: string[] = [];
  providerOptions = ['Provider A', 'Provider B', 'Provider C'];

  ngOnInit(): void {
    this.selectedServices = this.formGroup.get('services')?.value || [];

    if (!this.formGroup.get('providers')) {
      this.formGroup.addControl('providers', new FormGroup({}));
    }

    const providersGroup = this.formGroup.get('providers') as FormGroup;

    this.selectedServices.forEach((service) => {
      if (!providersGroup.get(service)) {
        const serviceArray = new FormArray([]);
        providersGroup.addControl(service, serviceArray);
        this.addProvider(service); // Add only once
      }
    });
  }

  getProviders(service: string): FormArray {
    return (this.formGroup.get('providers') as FormGroup).get(service) as FormArray;
  }

  addProvider(service: string) {
    const group = new FormGroup({
      name: new FormControl('', Validators.required),
      weight: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    });
    this.getProviders(service).push(group);
  }

  removeProvider(service: string, index: number) {
    this.getProviders(service).removeAt(index);
  }

  getFormControl(control: any): FormControl {
    return control as FormControl;
  }
}
