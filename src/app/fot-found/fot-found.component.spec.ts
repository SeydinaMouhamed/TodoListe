import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotFoundComponent } from './fot-found.component';

describe('FotFoundComponent', () => {
  let component: FotFoundComponent;
  let fixture: ComponentFixture<FotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
