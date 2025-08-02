import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLobComponent } from './create-lob.component';

describe('CreateLobComponent', () => {
  let component: CreateLobComponent;
  let fixture: ComponentFixture<CreateLobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
