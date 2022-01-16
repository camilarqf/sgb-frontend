import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecariosListComponent } from './bibliotecarios-list.component';

describe('BibliotecariosListComponent', () => {
  let component: BibliotecariosListComponent;
  let fixture: ComponentFixture<BibliotecariosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecariosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliotecariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
