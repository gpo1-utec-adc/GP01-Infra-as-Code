import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciliacionListaComponent } from './conciliacion-lista.component';

describe('ConciliacionListaComponent', () => {
  let component: ConciliacionListaComponent;
  let fixture: ComponentFixture<ConciliacionListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConciliacionListaComponent]
    });
    fixture = TestBed.createComponent(ConciliacionListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
