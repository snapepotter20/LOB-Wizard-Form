import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobWizardComponent } from './lob-wizard.component';

describe('LobWizardComponent', () => {
  let component: LobWizardComponent;
  let fixture: ComponentFixture<LobWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LobWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
