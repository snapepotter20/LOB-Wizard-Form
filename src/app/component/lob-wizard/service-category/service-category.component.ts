import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-category',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './service-category.component.html',
  styleUrl: './service-category.component.css',
})
export class ServiceCategoryComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  serviceTypes = ['SMS-OTP', 'SMS-NOTP', 'EMAIL-OTP', 'EMAIL-NOTP', 'WHATSAPP-TEMPLATE'];

  ngOnInit(): void {
    this.formGroup.addControl('services', new FormControl([], Validators.required));
  }

  toggleSelection(event: Event, value: string) {
    const selected = this.formGroup.get('services')?.value as string[];
    const checked = (event.target as HTMLInputElement).checked;

    const updated = checked
      ? [...selected, value]
      : selected.filter((item) => item !== value);

    this.formGroup.get('services')?.setValue(updated);
  }

  isSelected(value: string): boolean {
    return this.formGroup.get('services')?.value.includes(value);
  }
}
