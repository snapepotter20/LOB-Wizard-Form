// import { CommonModule } from '@angular/common';
// import { Component, Input, OnInit } from '@angular/core';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-create-lob',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './create-lob.component.html',
//   styleUrl: './create-lob.component.css',
// })
// export class CreateLobComponent implements OnInit {
//   @Input() formGroup!: FormGroup;

//   ngOnInit() {
//     this.formGroup.addControl('lobName', new FormControl('', Validators.required));
//     this.formGroup.addControl(
//       'email',
//       new FormControl('', [Validators.required, Validators.email])
//     );
//   }

//   get lobNameControl() {
//     return this.formGroup.get('lobName');
//   }

//   get emailControl() {
//     return this.formGroup.get('email');
//   }
// }


import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-lob',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-lob.component.html',
  styleUrl: './create-lob.component.css'
})
export class CreateLobComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup.addControl('lobName', new FormControl('', Validators.required));
    this.formGroup.addControl('email', new FormControl('', [Validators.required, Validators.email]));
  }

  get lobName() {
    return this.formGroup?.get('lobName');
  }

  get email() {
    return this.formGroup?.get('email');
  }
}
