import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemFornecedorComponent } from './mantem-fornecedor.component';

describe('MantemFornecedoresComponent', () => {
  let component: MantemFornecedorComponent;
  let fixture: ComponentFixture<MantemFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantemFornecedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantemFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
