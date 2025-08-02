import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LobService } from '../../core/services/lob.service';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateLobComponent } from './create-lob/create-lob.component';
import { ServiceCategoryComponent } from './service-category/service-category.component';
import { ServiceProviderComponent } from './service-provider/service-provider.component';

@Component({
  selector: 'app-lob-wizard',
  standalone: true,
  imports: [
    NgClass,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CreateLobComponent,
    ServiceCategoryComponent,
    ServiceProviderComponent,
  ],
  templateUrl: './lob-wizard.component.html',
  styleUrl: './lob-wizard.component.css',
})
export class LobWizardComponent {
  step = 0;
  form: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private lobService: LobService) {
    this.form = this.fb.group({
      lobName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      services: this.fb.control([], [Validators.required]),
    });
  }

  next() {
    if (this.step < 2) {
      this.step++;
    }
  }

  previous() {
    if (this.step > 0) {
      this.step--;
    }
  }

  createLOB() {
    if (this.form.valid) {
      this.lobService.createLOB(this.form.value).subscribe({
        next: () => {
          this.formSubmitted = true;
        },
        error: (err) => {
          console.error('Error creating LOB:', err);
        },
      });
    }
  }

  resetForm() {
    this.form = this.fb.group({
      lobName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      services: this.fb.control([], [Validators.required]),
    });
    this.step = 0;
    this.formSubmitted = false;
  }
}
